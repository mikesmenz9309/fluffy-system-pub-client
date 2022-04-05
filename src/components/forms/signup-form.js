import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { useForm } from "react-hook-form";
import useAuth from "../../hooks/use-auth";
import { LockClosedIcon } from '@heroicons/react/solid'
export default function SignupForm({ callback }) {
  const { registerAccount } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (accountInfo) =>
    registerAccount(accountInfo, (message) => {
      if (message) {
        callback(message);
      }
    });

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      
        <div className="max-w-md w-full space-y-8">
        <div>
            
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
            {/* <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                start your 14-day free trial
              </a>
            </p> */}
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="firstname" className="sr-only">
                  First Name
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="First Name"
                  {...register("firstname", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="lastname" className="sr-only">
                  Last Name
                </label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  autoComplete="lastname"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Last Name"
                  {...register("lastname", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="mobile_number" className="sr-only">
                  Mobile Number
                </label>
                <input
                  id="mobile_number"
                  name="mobile_number"
                  type="text"
                  autoComplete="mobile"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Mobile Number"
                  {...register("mobile_number", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="email_address" className="sr-only">
                  Email address:
                </label>
                <input
                  id="email_address"
                  name="email_address"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email Address"
                  {...register("email_address", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <p className="text-sm font-small text-grey-600">Have an Account?  <a><NavLink to="/login" className="font-medium text-blue-600 hover:text-blue-500"> Login</NavLink>
                  
                </a></p>
                
              </div>
            </div>

            <div>
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
                </span>
                Create an Account
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

SignupForm.prototypes = {
  callback: PropTypes.func.isRequired,
};
