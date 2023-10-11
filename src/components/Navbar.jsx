import React from 'react';
import { Router } from 'react-router-dom'
import dpimg from '../assets/dpimg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <div className="bg-gray-900 p-4 flex justify-between items-center">
      {/* Left Side */}
      <div className="flex items-center space-x-4">
        <div className="relative group">
      
           <div>
    <button type="button" class="inline-flex justify-center items-center px-4 py-1 border border-gray-300 rounded-md shadow-sm bg-gray-900 text-sm font-medium text-gray-100 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
      Please Select
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
         
        </div>
        <span className="text-sm font-semibold text-white">10/10/2023 | Tuesday</span>
      </div>

      {/* Middle */}
      <div className="text-white  text-center text-2xl font-semibold mr-10">STOREMATE</div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
      <span className="text-white font-semibold">Sahan</span>
        <img
          src={dpimg} 
          alt="User Profile"
          className="h-8 w-8 rounded-full"
        />
      
      </div>
    </div>
  );
};

export default Navbar;
