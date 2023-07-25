"use client"

import React, { useState } from 'react';
import Collapse from 'react-collapse';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className='text-gray-600 body-font bg-white shadow'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <div className='flex items-center mb-4 md:mb-0'>
          <a className='flex title-font font-medium items-center text-gray-900'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
              viewBox='0 0 24 24'
            >
              <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
            </svg>
            <span className='ml-3 text-xl'>Tailblocks</span>
          </a>
        </div>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
          <a href='#' className='mr-5 hover:text-gray-900'>
            First Link
          </a>
          <a href='#' className='mr-5 hover:text-gray-900'>
            Second Link
          </a>
          <a href='#' className='mr-5 hover:text-gray-900'>
            Third Link
          </a>
        </nav>
        <div className='md:ml-auto md:mr-0 flex items-center'>
          <button className='text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base mr-4'>
            Login
          </button>
          <button className='text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base'>
            Sign Up
          </button>
        </div>
        {/* Mobile accordion */}
        {/* <button
          className='block md:hidden mt-4 focus:outline-none'
          onClick={toggleNavbar}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
          >
            <path d='M4 6h16M4 12h16m-7 6h7'></path>
          </svg>
        </button> */}
        <Collapse isOpened={isNavbarOpen} className='w-full md:hidden'>
          {/* Content of the mobile accordion */}
          <nav className='flex flex-col items-center mt-4'>
            <a href='#' className='mb-2 hover:text-gray-900'>
              First Link
            </a>
            <a href='#' className='mb-2 hover:text-gray-900'>
              Second Link
            </a>
            <a href='#' className='mb-2 hover:text-gray-900'>
              Third Link
            </a>
            <button className='mt-4 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base'>
              Login
            </button>
            <button className='mt-2 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base'>
              Sign Up
            </button>
          </nav>
        </Collapse>
      </div>
    </header>
  );
};

export default Navbar;
