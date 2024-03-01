import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
  return (
    <nav className="bg-gray-100 rounded-sm shadow-neomorphic">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">

          <div>
            <a href="#" className="text-xl font-bold text-gray-900">E-commerce store</a>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800"><FontAwesomeIcon icon="fa-solid fa-right-to-bracket"/></a></li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
