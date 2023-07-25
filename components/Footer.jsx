import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white text-center py-4'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
         © {new Date().getFullYear()} SecureClerk. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;;