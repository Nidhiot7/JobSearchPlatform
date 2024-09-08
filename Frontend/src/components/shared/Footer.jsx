import React from 'react';
import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <footer className="border-t border-t-gray-200">

            <div className="grid lg:grid-cols-2 py-12 container">
                <div className='ml-20'>
                    <div className='flex w-9 h-8 text-[#2567BD]'>
                        <img src={logo} alt="logo" />
                        <h1 className='text-xl font-bold text-[#0CAFFF]'>ob<span className='text-[#2a2a2a]'>Portal</span></h1>
                    </div>
                    <div className='font-bold mt-4 mb-3 space-y-2'>
                        <h1>Connect with us</h1>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="25" viewBox="0 0 30 30">
                                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="25" viewBox="0 0 24 24">
                                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                            </svg>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="23" viewBox="0 0 50 50">
                                <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                            </svg>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="25" viewBox="0 0 30 30">
                                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-3'>
                    <div>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-[#0CAFFF]">About us</a></li>
                            <li><a href="#" className="hover:text-[#0CAFFF]">Careers</a></li>
                            <li><a href="#" className="hover:text-[#0CAFFF]">Contact</a></li>
                            <li><a href="#" className="hover:text-[#0CAFFF]">Press</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-[#0CAFFF]">Help center</a></li>
                            <li><a href="#" className="hover:text-[#0CAFFF]">Report issue</a></li>
                            <li><a href="#" className="hover:text-[#0CAFFF]">Credits</a></li>
                            <li><a href="#" className="hover:text-[#0CAFFF]">Sitemap</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-[#0CAFFF]">Privacy policy</a></li>
                            <li><a href="#" className="hover:text-[#0CAFFF]">Terms & conditions</a></li>
                            <li><a href="#" className="hover:text-[#0CAFFF]">Fraud alert</a></li>
                            <li><a href="#" className="hover:text-[#0CAFFF]">Trust & safety</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;