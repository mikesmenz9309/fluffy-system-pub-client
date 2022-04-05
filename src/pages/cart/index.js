
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
// import ItemSubtotal from './item-subtotal'
// import OrderTotal from './order-total'
// import { PageLayout } from '../../components/structure'
// import { NavLink } from 'react-router-dom'
import React, { useEffect, useState, Fragment } from "react";
import { useDispatch } from "react-redux";
// import classNames from "classnames";
import {
  useNavigate,
  generatePath,
  useParams,
  NavLink,
} from "react-router-dom";

import {
  // incrementItemQty,
  decrementItemQty,
  createOrder,
  updateOrder,
  removeCartItem,
} from "../../features/cart/cartSlice";
import useAuth from "../../hooks/use-auth";
import useCart from "../../hooks/use-cart";
import useOrder from "../../hooks/use-order";
import useOrderId from "../../hooks/use-order-id";

import { PageLayout } from "../../components/structure";
import OrderTotal from "./order-total";
import ItemSubtotal from "./item-subtotal";
// import AlertMessage from "../../components/alerts/alert-message";
import useOrderItem from "../../hooks/use-order-item";



export default function Cart() {
  const [open, setOpen] = useState(true);
  const { id } = useParams();
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { items } = useCart();
  const { orderId, setOrderId } = useOrderId();
  const order = useOrder({ orderId, userId: user?._id });
  const navigate = useNavigate();
  const product = items.find((item) => item._id === id);

  const [alertMessage, setAlertMessage] = useState();
  const { itemMessage, setOrderItemMessage } = useOrderItem();

  useEffect(() => {
    if ((!id || !product) && items.length > 0) {
      navigate(generatePath(`/cart/:_id`, items[0]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, items.length]);


  return (
    <PageLayout>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900"> Shopping cart </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {items.map((item) => (
                            <li key={item.id} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={item.img.dataUrl}
                                  // alt={product.imageAlt}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                  <NavLink to={generatePath(`/cart/:_id`, item)}>
                                    <h3>
                                      
                                      <a> {item.name} </a>
                                    </h3></NavLink>
                                    <p className="ml-4">{product.price}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className="text-gray-500">Qty {item.qty || 0}</p>

                                  <div className="flex">
                                    <button type="button" 
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    onClick={() => {
                                      if (item.qty === 1) {
                                        dispatch(removeCartItem(item));
                                      } else {
                                        dispatch(decrementItemQty(item));
                                      }
                                      setOrderItemMessage({
                                        message: `${item.name} quantity incremented!`,
                                        itemName: item.name,
                                        decrQTY: true,
                                      });
                                    }}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <ItemSubtotal item={product} withLabel />
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Delivery Subtotal: R45.00</p>
                    <OrderTotal {...{ items }} withLabel />
                    <div className="mt-6">
                    {items.length > 0 ? (
            <button
              className="font-bold hover:bg-blue-200 hover:text-black bg-blue-400 text-white rounded-lg p-1"
                      onClick={() => {
                if (!user) navigate(generatePath("/login", { replace: false }));
                if (
                  !order ||
                  order.orderStatus === "COMPLETED" ||
                  order.orderStatus === "CANCELLED"
                ) {
                  dispatch(
                    createOrder({
                      orderInfo: {
                        clientId: user._id,
                        items: items.map((item) => ({
                          ...item,
                          img: undefined,
                        })),
                      },
                      onSuccess: async ({ _id, message }) => {
                        try {
                          await setOrderId(_id, () => setAlertMessage(message));
                        } catch (error) {
                          console.log(
                            "Failed saving order to local storage",
                            error
                          );
                        } finally {
                          setTimeout(() => {
                            setAlertMessage();
                            navigate("/profile");
                          }, 1000);
                        }
                      },
                    })
                  );
                } else {
                  dispatch(
                    updateOrder({
                      orderInfo: {
                        clientId: user._id,
                        orderId: orderId,
                        items: items.map((item) => ({
                          ...item,
                          img: undefined,
                        })),
                      },
                      onSuccess: async ({ _id, message }) => {
                        try {
                          await setOrderId(_id, () => setAlertMessage(message));
                        } catch (error) {
                          console.log(
                            "Failed updating order to local storage",
                            error
                          );
                        } finally {
                          setTimeout(() => {
                            setAlertMessage();
                            navigate("/profile");
                          }, 1000);
                        }
                      },
                    })
                  );
                }
              }}
            >
              {order && !order.orderStatus ? "Update Order" : "Create Order"}
            </button>
          ) : !alertMessage ? (
            <button
              className="font-bold hover:bg-blue-200 hover:text-black bg-blue-400 text-white rounded-lg p-1"
              onClick={() =>
                navigate(generatePath("/shop", { replace: false }))
              }
            >
              Visit shop
            </button>
          ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </PageLayout>
  )
}