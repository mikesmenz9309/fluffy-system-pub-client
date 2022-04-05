import React from "react";
// import { LoginForm } from "../../components/forms";
import { PageLayout } from "../../components/structure";
import useAuth from "../../hooks/use-auth";
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
// import Lottie from 'react-lottie';
import animationData from '../../lotties/93385-login';
import Herocta from "../../components/structure/herocta";

export default function Home() {
  const { signin, user } = useAuth();
  const features = [
    {
      name: 'Home Pickup & Delivery',
      description:
        "",
      icon: GlobeAltIcon,
    },
    {
      name: 'Fast Turnaround',
      description:
        '',
      icon: ScaleIcon,
    },
    {
      name: 'Affordable',
      description:
        '',
      icon: LightningBoltIcon,
    },
    {
      name: 'Satisfaction Guaranteed',
      description:
        '',
      icon: AnnotationIcon,
    },
  ]
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };



  return (

    
    <PageLayout>
      
      <main className="mt-10 mx-auto hero-back max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-center mb-10">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome To</span>{' '}
                <span className="block text-blue-600 xl:inline">EAZEEWASH</span> 
                
              </h1>
              <h2 className="mt-2 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl">
                <span className="block xl:inline">Full on Demand</span>{' '}
                <span className="block text-blue-600 xl:inline">Dry Cleaning & Laundry Service</span>
                <br></br>
                
              </h2>
              {/* <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              <ul><li>Home Pickup &amp; Delivery</li>
              <li>Timely Turnaround</li>
              <li>Affordable Prices</li>
              <li>Satisfaction Guaranteed</li></ul>
              
              </p> */}
              <div className="mt-5 mb-10 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="/login"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Sign in
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/register"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          
          
      {/* <div

        className="lg:p-20 w-full flex justify-between space-x-3"
        id="home-content"
      >
        <div className="border-r-2 border-dotted pr-10">
        <div>
    <Lottie 
    options={defaultOptions}
      height={400}
      width={400}
    /></div>
        </div>

        {!user ? <LoginForm {...{ signin }} /> : null}
      </div> */}
      <div className="mt-10 py-12 bg-blue-500 mb-10 rounded-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-white font-semibold tracking-wide uppercase">Dry Cleaning & Laundry</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to get it done!
          </p>
          <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
            
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white text-blue-500">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="ml-16 text-lg leading-6 font-bold text-white">{feature.name}</h3>
                </dt>
                {/* <dd className="mt-2 ml-16 text-base text-white">{feature.description}</dd> */}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    {/* <Herocta  /> */}
    </main>
    </PageLayout>
  );
}
