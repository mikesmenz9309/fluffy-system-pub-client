import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  createPickupAddress,
  updatePickupAddress,
} from "../../features/cart/cartSlice";
import { usePickupAddress } from "../../hooks/pick-up-address";
import useAuth from "../../hooks/use-auth";

export default function AddressForm({ callback }) {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm();
  const { pickupAddress, mutate } = usePickupAddress({ userId: user?._id });

  const submitAddress = async (addressInfo) => {
    try {
      if (pickupAddress?._id) {
        // address update request
        dispatch(
          updatePickupAddress({
            addressId: pickupAddress._id,
            addressInfo,
            onSuccess: ({ message }) => {
              callback(message);
            },
          })
        );
      } else {
        //create new address request
        dispatch(
          createPickupAddress({
            userId: user._id,
            addressInfo,
            onSuccess: ({ message }) => {
              callback(message);
            },
          })
        );
      }
    } catch (e) {
      console.log("Failed address submit/update");
    } finally {
      setTimeout(() => {
        callback();
      }, 2000);
      mutate();
    }
  };

  useEffect(() => {
    if (pickupAddress) {
      [
        "postal_code",
        "province",
        "street_name",
        "town_city",
        "unit_complex_number",
      ].forEach((addressField) =>
        setValue(addressField, pickupAddress[addressField])
      );
    }
  }, [pickupAddress, setValue]);

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(submitAddress)}>
    <div className="rounded-md shadow-sm -space-y-px">
        <label htmlFor="text-left street_address" className="sr-only">Street address:</label>
        <input
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          type="text"
          id="street_address"
          {...register("street_name", { required: true })}
        />
      </div>

      <div className="">
        <label htmlFor="text-left street_address" className="sr-only">Unit/Complex number:</label>
        <input
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          type="text"
          id="unit_complex_number"
          {...register("unit_complex_number")}
        />
      </div>

      <div className="">
        <label htmlFor="town_city" className="sr-only">Town/City:</label>
        <input
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          type="text"
          id="town_city"
          {...register("town_city", { required: true })}
        />
      </div>

      <div className="">
        <label htmlFor="province" className="sr-only">Province:</label>
        <input
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          type="text"
          id="province"
          {...register("province", { required: true })}
        />
      </div>

      <div className="">
        <label htmlFor="postal_code" className="sr-only">Postal Code:</label>
        <input
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
          type="text"
          id="postal_code"
          {...register("postal_code", { required: true })}
        />
      </div>

      <div className="text-center mt-2">
        <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          {pickupAddress?._id ? "Update address" : "Add address"}
        </button>
      </div>
    </form>
    </div>
  );
}

AddressForm.prototypes = {
  callback: PropTypes.func.isRequired,
};
