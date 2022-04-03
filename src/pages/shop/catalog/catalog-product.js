import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// import { useNavigate, generatePath } from "react-router-dom";
import PropTypes from "prop-types";

import {
  addCartItem,
  // decrementItemQty,
  incrementItemQty,
  // removeCartItem,
} from "../../../features/cart/cartSlice";
import useOrderItem from "../../../hooks/use-order-item";
// import AlertMessage from "../../../components/alerts/alert-message";
import useCart from "../../../hooks/use-cart";
import { LockClosedIcon } from "@heroicons/react/outline";

export default function CatalogProduct({ product }) {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageIsLoading, setImageIsLoading] = useState(false);
  const { itemMessage, setOrderItemMessage } = useOrderItem();
  const { items } = useCart();
  // import prodcard from "../../../components/prodcard";
  const itemAlreadyAdded = items.find((item) => item._id === product._id);

  return (
<div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900"></h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            
              <div key={product._id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.img.dataUrl}
                    alt=" Laundry Service"
                    onLoad={() => setImageIsLoading(true)}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">R{product?.unit_price}</p>
                </div>
                
                {items.find((item) => item._id === product._id) ? (
                <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => {
                              setOrderItemMessage({
                                message:
                                  itemAlreadyAdded.qty === 1
                                    ? `${product.name} Added to cart!`
                                    : `${product.name} quantity increment`,
                                itemName: product.name,
                                success: true,
                              });
              
                              itemAlreadyAdded.qty === 1
                                ? dispatch(addCartItem(product))
                                : dispatch(incrementItemQty(product));
                            }}
                          >
              
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Add To Cart
              </button> ) : null}
              </div>
            ))
          </div>
        </div>
        </div>



    // <li key={product._id} className="flex flex-col space-y-4">
    //   <div
    //     className="hover:cursor-pointer"
    //     // onClick={() => navigate(generatePath(`/product/:_id`, product))}
    //   >
    //     <div className="w-60 hover:scale-125">
    //       <img
    //         src={product.img.dataUrl}
    //         alt="not available"
    //         onLoad={() => setImageIsLoading(true)}
    //       />
    //     </div>
    //     <div className="flex flex-col">
    //       {!imageIsLoading ? (
    //         <div className="w-40">
    //           <Skeleton count={2} className="h-5" />
    //         </div>
    //       ) : (
    //         <>
    //           <span>{product.name}</span>
    //           <span className="break-word">{product.description}</span>
    //           <span>R{product?.unit_price}</span>
    //         </>
    //       )}
    //     </div>
    //   </div>
    //   {itemMessage && product.name === itemMessage?.itemName ? (
    //     <div className="flex items-center space-x-4">
    //       <AlertMessage alertMessage={itemMessage?.message} />
    //     </div>
    //   ) : (
    //     <div className="flex items-center space-x-4">
    //       <button
    //         className="w-20 hover:bg-blue-200 hover:text-white border-2 border-blue-300 text-blue-200 rounded-lg p-1"
    //         onClick={() => {
    //           itemAlreadyAdded
    //             ? dispatch(incrementItemQty(product))
    //             : dispatch(addCartItem(product));
    //           setOrderItemMessage({
    //             message: itemAlreadyAdded
    //               ? `${product.name} quantity incremented!`
    //               : `${product.name} added to cart!`,
    //             itemName: product.name,
    //             success: true,
    //           });
    //         }}
    //       >
    //         <span className="text-lg font-bold">+</span>
    //       </button>
    //       {items.find((item) => item._id === product._id) ? (
    //         <button
    //           className="w-20 hover:bg-red-200 hover:text-white border-2 border-red-300 text-red-200 rounded-lg p-1"
    //           onClick={() => {
    //             setOrderItemMessage({
    //               message:
    //                 itemAlreadyAdded.qty === 1
    //                   ? `${product.name} removed from cart!`
    //                   : `${product.name} quantity decremented`,
    //               itemName: product.name,
    //               success: true,
    //             });

    //             itemAlreadyAdded.qty === 1
    //               ? dispatch(removeCartItem(product))
    //               : dispatch(decrementItemQty(product));
    //           }}
    //         >
    //           <span className="text-lg font-bold">-</span>
    //         </button>
    //       ) : null}
    //     </div>
    //   )}
    // </li>
  );
}

CatalogProduct.propTypes = {
  product: PropTypes.object.isRequired,
};
