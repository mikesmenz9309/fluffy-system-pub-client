import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import eaziwash_logo from "../../assets/eazee-wash-logo.png";
import netfresh_logo from "../../assets/netfresh-logo.jpeg";
import mlo_logo from "../../assets/mlo-logo.png";
import payfast_logo from "../../assets/pay-fast-logo.png";

import { ExternalLink, NavLink, SiteTopNav } from "../navigation";
import OrderProvider from "../../utils/contexts-providers/order-provider";
import { config } from "../../config";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import useAuth from "../../hooks/use-auth";
import Footer from "./footer";
import useCart from "../../hooks/use-cart";
import {
  UserCircleIcon,
   
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  ClockIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Cart from "../../pages/cart";

const solutions = [
  {
    name: 'Home',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'Profile',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/profile',
    icon: UserCircleIcon,
  },
  {
    name: 'Shop',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/shop',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Cart',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/cart',
    icon: ShoppingCartIcon,
  },
  
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Call us',
    description: '+27 011 83838',
    href: '#',
    icon: PhoneIcon,
  },
  
  { name: 'Pickup and Delivery Times', description: 'Monday–Friday: 6am – 5pm', href: '#', icon: ClockIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Layout({ children }) {
  const { eazeewash_tel } = config(process.env.NODE_ENV);
  const { user, signOut } = useAuth();
  const { itemsCount } = useCart();
  const [open, setOpen] = useState(true);
  // const [blockMenu, setBlockMenu] = useState();
  return (
    
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <NavLink to="/">
              <img
                className="h-100 w-auto sm:h-10"
                src={eaziwash_logo}
                alt=""
              /></NavLink>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    )}
                  >
                    
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <NavLink to={item.href}>
                            <a
                              key={item.name}
                              
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                            </NavLink>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <NavLink to={item.href}>
                              <a
                                
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a></NavLink>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <NavLink to="/">

            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </a></NavLink>
            
            <NavLink to="/shop">

            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Shop
            </a></NavLink>
            <NavLink to="/profile">

            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Profile
            </a></NavLink>
            <NavLink  onClick={() => setOpen(true)}>

            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
            <ShoppingCartIcon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
            
            {itemsCount > 0 ?  `(${itemsCount})` : ''}
            </a></NavLink>
            

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-white' : 'text-gray-100',
                      'group pt-2 pb-2 pl-2 pr-2 bg-blue-500 rounded-md inline-flex items-center text-base font-medium hover:text-gray-0 focus:outline-none hover:bg-gray-500'
                    )}
                  >
                    <span>Quick Info</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-100' : 'text-gray-100',
                        'ml-2 h-5 w-5 '
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <NavLink to={item.href}>
                            <a
                              key={item.name}
                              
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a></NavLink>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Posts</h3>
                            {/* <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="text-base truncate">
                                  <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul> */}
                          </div>
                          <div className="mt-5 text-sm">
                            {/* <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                              {' '}
                              View all posts <span aria-hidden="true">&rarr;</span>
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          
          {!user && <NavLink className="" to="/login"><button class="min-w-auto w-28 h-10 bg-blue-300 p-2 rounded-l-xl hover:bg-blue-500 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold">
        Log in
      </button></NavLink>}
          {!user && <NavLink className="" to="/register"><button class="min-w-auto w-28 h-10 bg-gray-300 p-2 rounded-r-xl hover:bg-gray-500 transition-colors duration-50 hover:animate-pulse ease-out text-white font-semibold">
        Register
      </button></NavLink>}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={eaziwash_logo}
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <NavLink to={item.href}>
                    <a
                      key={item.name}
                      
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a></NavLink>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                
                {/* <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a> */}

                {/* <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Docs
                </a> */}
                {resources.map((item) => (
                  <NavLink to={item.href}>
                  <a
                    key={item.name}
                    
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a></NavLink>
                ))}
              </div>
              <div>
              
              
                <button className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  {!user && <NavLink className="text-blue-600 hover:text-blue-500" to="/login">Login</NavLink>}
                </button>
              </div>
            </div>
          </div>
          
        </Popover.Panel>
      </Transition>
      <div className="flex justify-center items-center w-full p-4">
        <div>{children}</div>
      
      
      
      </div>
      <Footer>
      </Footer>
      <div className="bg-gray-700 xl:text-center">
        <span className="text-white  ">&copy; {new Date().getFullYear()} Mlo Solutions</span>
        </div>
      

      {/* <div className="flex justify-center items-center dark:text-white w-full">
        <div className="flex flex-col items-center w-2/3">
          <div>
            <div className="flex flex-col items-center p-10">
              <h2 className="font-semibold">Our Partner(s)</h2>
              <div className="flex space-x-4 items-center justify-center">
                <div className="rounded-lg w-36">
                  <img src={netfresh_logo} alt="Logo not available" />
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-1 gap-4">
              <div>
                <div className="w-20">
                  <NavLink to="/">
                    <img src={eaziwash_logo} alt="logo not available" />
                  </NavLink>
                </div>
              </div>

              <div>
                <h2 className="font-bold">Pickup and Delivery Times :</h2>
                <p className="flex flex-col">
                  <span>Monday–Friday:</span>
                  <span>6am – 5pm</span>
                  <span>Saturday:</span>
                  <span>8am – 4pm</span>
                  <span>Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>

              <div>
                <h2 className="font-bold">Services</h2>
                <div>Dry Cleaning</div>
                <div>Laundry &amp; Ironing</div>
              </div>

              <div>
                <h2 className="font-bold">Legal</h2>
                <Link to="/terms-and-conditions/" className="text-blue-500">
                  Terms and Conditions
                </Link>
              </div>

              <div>
                <h2 className="font-bold">Contact US</h2>
                <div>Tel {eazeewash_tel}</div>
                <p className="flex space-x-4">
                  <span>
                    <ExternalLink
                      text="Twitter"
                      link="https://twitter.com/eazeewash"
                    />
                  </span>
                  <span>
                    <ExternalLink
                      text="Facebook"
                      link="https://www.facebook.com/Eazeewash-108778155055179/"
                    />
                  </span>
                  <span>
                    <ExternalLink
                      text="Instagram"
                      link="https://www.instagram.com/eazeewash/"
                    />
                  </span>
                </p>
                <span>
                  <img src={payfast_logo} alt="logo not available" />
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 text-center">
            <p className="flex justify-center items-center space-x-2">
              <span>&copy; {new Date().getFullYear()}</span>
              <span>
                <img
                  className="w-5 h-5"
                  src={mlo_logo}
                  alt="logo not available"
                />
              </span>
              <span></span>
            </p>
          </div>
        </div>
      </div> */}
    </Popover>
    
  
  // return (
  //   <div className="flex flex-col justify-between">
  //     <div className="bg-sky-400 flex justify-center items-center w-full sticky top-0">
  //       <div className="w-2/3">
  //         <div className="flex justify-between">
  //           <div className="w-20">
  //             <NavLink to="/">
  //               <img src={eaziwash_logo} alt="logo not available" />
  //             </NavLink>
  //           </div>

  //           <OrderProvider>
  //             <SiteTopNav />
  //           </OrderProvider>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Footer Start */}
      // <div className="flex justify-center items-center w-full p-4">
      //   <div className="w-2/3">{children}</div>
      // </div>
      // <div className="flex justify-center items-center bg-gray-400 w-full">
      //   <div className="flex flex-col items-center w-2/3">
      //     <div>
      //       <div className="flex flex-col items-center p-10">
      //         <h2 className="font-semibold">Our Partner(s)</h2>
      //         <div className="flex space-x-4 items-center justify-center">
      //           <div className="rounded-lg w-36">
      //             <img src={netfresh_logo} alt="Logo not available" />
      //           </div>
      //         </div>
      //       </div>
      //       <div className="grid lg:grid-cols-5 md:grid-cols-1 gap-4">
      //         <div>
      //           <div className="w-20">
      //             <NavLink to="/">
      //               <img src={eaziwash_logo} alt="logo not available" />
      //             </NavLink>
      //           </div>
      //         </div>

      //         <div>
      //           <h2 className="font-bold">Pickup and Delivery Times :</h2>
      //           <p className="flex flex-col">
      //             <span>Monday–Friday:</span>
      //             <span>6am – 5pm</span>
      //             <span>Saturday:</span>
      //             <span>8am – 4pm</span>
      //             <span>Sunday:</span>
      //             <span>Closed</span>
      //           </p>
      //         </div>

      //         <div>
      //           <h2 className="font-bold">Services</h2>
      //           <div>Dry Cleaning</div>
      //           <div>Laundry &amp; Ironing</div>
      //         </div>

      //         <div>
      //           <h2 className="font-bold">Legal</h2>
      //           <Link to="/terms-and-conditions/" className="text-blue-500">
      //             Terms and Conditions
      //           </Link>
      //         </div>

      //         <div>
      //           <h2 className="font-bold">Contact US</h2>
      //           <div>Tel {eazeewash_tel}</div>
      //           <p className="flex space-x-4">
      //             <span>
      //               <ExternalLink
      //                 text="Twitter"
      //                 link="https://twitter.com/eazeewash"
      //               />
      //             </span>
      //             <span>
      //               <ExternalLink
      //                 text="Facebook"
      //                 link="https://www.facebook.com/Eazeewash-108778155055179/"
      //               />
      //             </span>
      //             <span>
      //               <ExternalLink
      //                 text="Instagram"
      //                 link="https://www.instagram.com/eazeewash/"
      //               />
      //             </span>
      //           </p>
      //           <span>
      //             <img src={payfast_logo} alt="logo not available" />
      //           </span>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="p-4 text-center">
      //       <p className="flex justify-center items-center space-x-2">
      //         <span>&copy; {new Date().getFullYear()}</span>
      //         <span>
      //           <img
      //             className="w-5 h-5"
      //             src={mlo_logo}
      //             alt="logo not available"
      //           />
      //         </span>
      //         <span>Mlo Solutions</span>
      //       </p>
      //     </div>
      //   </div>
      // </div>
      //   </div>
  )
}

Layout.propTypes = {
  alertMessage: PropTypes.string,
  children: PropTypes.node,
};
