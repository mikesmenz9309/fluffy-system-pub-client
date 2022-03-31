import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { config } from "../../config";
import { requestPOST, requestPUT } from "../../utils/network-requests/";

const { server_url } = config(process.env.NODE_ENV);

export const createPickupAddress = createAsyncThunk(
  "cart/createPickupAddress",
  async ({ userId, addressInfo, onSuccess }, { getState, dispatch }) => {
    return await requestPOST({
      url: `${server_url}/account/address/${userId}`,
      data: addressInfo,
    }).then((newAddress) => {
      if (newAddress) {
        onSuccess({ ...newAddress, message: "Address successfully saved!" });
        return newAddress;
      }
    });
  }
);

export const updatePickupAddress = createAsyncThunk(
  "cart/updatePickupAddress",
  async ({ addressId, addressInfo, onSuccess }, { getState, dispatch }) => {
    const updatedAddress = await requestPUT({
      url: `${server_url}/account/address/${addressId}`,
      data: addressInfo,
    }).then((updatedAddress) => {
      if (updatedAddress) {
        onSuccess(updatedAddress);
        return updatedAddress;
      }
    });
    return updatedAddress;
  }
);

export const createOrder = createAsyncThunk(
  "cart/createOrder",
  async ({ orderInfo, onSuccess }, { getState, dispatch }) => {
    const createdOrder = await requestPOST({
      url: `${server_url}/order/create`,
      data: orderInfo,
    }).then((order) => {
      if (order) {
        onSuccess({ ...order, message: "Order successfully created!" });
        dispatch(removeCartItems({ emptyItems: [] }));
        return order;
      }
    });
    return createdOrder;
  }
);

export const updateOrder = createAsyncThunk(
  "cart/createOrder",
  async ({ orderInfo, onSuccess }, { getState, dispatch }) => {
    const createdOrder = await requestPUT({
      url: `${server_url}/order/update/${orderInfo.orderId}/user/${orderInfo.clientId}`,
      data: orderInfo.items,
    }).then((order) => {
      if (order) {
        onSuccess({ ...order, message: "Order successfully updated!" });
        dispatch(removeCartItems({ emptyItems: [] }));
        return order;
      }
    });
    return createdOrder;
  }
);

export const recordPayment = createAsyncThunk(
  "cart/recordPayment",
  async ({ payment, onSuccess }, { getState, dispatch }) => {
    await requestPOST({
      url: `${server_url}/order/payment`,
      data: payment,
    }).then(({ message, status, order: paidOrder }) => {
      if (status) {
        onSuccess({ paidOrder, message });
      }
    });
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsCount: 0,
    items: [],
    totalCost: 0,
    order: {},
  },
  reducers: {
    addCartItem: (state, action) => {
      const { payload } = action;
      const selectedProduct = state.items.find(
        ({ _id }) => _id === payload._id
      );

      state.items = !selectedProduct
        ? [...state.items, { ...payload, qty: 1 }]
        : state.items;
      state.itemsCount += !selectedProduct ? 1 : 0;
    },
    incrementItemQty: (state, action) => {
      const { payload } = action;

      state.items = state.items.map((selectedProduct) =>
        selectedProduct._id === payload._id
          ? {
              ...selectedProduct,
              qty: selectedProduct.qty ? selectedProduct.qty + 1 : 1,
            }
          : selectedProduct
      );
    },
    removeCartItem: (state, action) => {
      const { payload } = action;

      const itemToRemove = state.items.find(({ _id }) => _id === payload._id);

      state.items = itemToRemove
        ? state.items.filter(({ _id }) => _id !== payload._id)
        : state.items;

      state.itemsCount -= itemToRemove ? 1 : 0;
    },
    removeCartItems: (state, action) => {
      const { payload } = action;

      state.items = payload.emptyItems;
      state.itemsCount = payload.emptyItems.length;
    },
    decrementItemQty: (state, action) => {
      const { payload } = action;

      state.items = state.items.map((selectedProduct) =>
        selectedProduct._id === payload._id
          ? {
              ...selectedProduct,
              qty:
                selectedProduct.qty && selectedProduct.qty !== 0
                  ? selectedProduct.qty - 1
                  : 0,
            }
          : selectedProduct
      );
    },
  },
  extraReducers: (builder) => {},
});

export const {
  addCartItem,
  incrementItemQty,
  removeCartItem,
  removeCartItems,
  decrementItemQty,
} = cartSlice.actions;
export default cartSlice.reducer;
