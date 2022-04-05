import React from "react";
import { Link } from "react-router-dom";
import eaziwash_logo from "../../assets/eazee-wash-logo.png";
// import mlo_logo from "../../assets/mlo-logo.png";
import netfresh_logo from "../../assets/netfresh-logo.jpeg"
import payfast_logo from "../../assets/payfast-logo.svg"
function footer() {
    return (
        <div className="pt-16">
            <div className="w-full bg-gray-700 py-12">
            
                <div className="container mx-auto xl:flex text-center xl:text-left lg:text-left">
                    
                    
                    
                    <div className="xl:w-2/6  sm:w-full mb-6 xl:mb-0">
                     
                    <img src={eaziwash_logo} 
                    className="h-20"
                    ></img>   
                        
                    </div>
                    
                    <div className="xl:w-3/6 sm:w-full">
                        <ul className="xl:flex lg:flex md:flex sm:flex justify-around">
                            <li className="text-white text-left text-bold hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a className="mb-2">Pickup and Delivery Times</a><br></br>
                                
                                <b>Monday–Friday:</b><br></br>
                                6am – 5pm<br></br>
                                <b>Saturday:</b><br></br>
                                8am – 4pm<br></br>
                                <b>Sunday:</b><br></br>
                                Closed<br></br>
                            </li>
                            <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                {/* <a className="mb-2">Legal</a><br></br> */}
                                <Link className="" to="/terms-and-conditions"><b>Terms and Conditions </b></Link>                            
                            </li>
                            <li className="text-white hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a href>Our Partner</a><b></b>
                                <img className="h-20" src={netfresh_logo}></img>
                            </li>
                            <li className="text-white ml-5 hover:text-gray-300 mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a href="javascript:void(0)">Payment Providers</a>
                                <img className="h-20" src={payfast_logo}></img>
                            </li>

                        </ul>
                        <ul class="payment-type__logo-container"><li><img src="https://payfast.co.za/images/payment_types/credit-card.svg" alt="" class="payment-type__logo payment-type__logo__creditcard"></img></li><img src="https://payfast.co.za/images/payment_types/debit-card.svg" alt="" class="payment-type__logo payment-type__logo__debitcard"></img><img src="https://payfast.co.za/images/payment_types/instantEFT.svg" alt="" class="payment-type__logo payment-type__logo__instanteft"></img><img src="https://payfast.co.za/images/payment_types/masterpass.svg" alt="" class="payment-type__logo payment-type__logo__masterpass"></img><img src="https://payfast.co.za/images/payment_types/mobicred.svg" alt="" class="payment-type__logo payment-type__logo__mobicred"></img><img src="https://payfast.co.za/images/payment_types/moretyme.svg" alt="" class="payment-type__logo payment-type__logo__moretyme"></img><img src="https://payfast.co.za/images/payment_types/snapscan.svg" alt="" class="payment-type__logo payment-type__logo__snapscan"></img><img src="https://payfast.co.za/images/payment_types/zapper.svg" alt="" class="payment-type__logo payment-type__logo__zapper"></img></ul> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default footer;
