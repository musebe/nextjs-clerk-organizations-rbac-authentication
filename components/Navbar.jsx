'use client';

import { useState } from 'react';
import Collapse from 'react-collapse';
import { SignedOut, UserButton, SignedIn, useSession } from '@clerk/nextjs';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { userRole} = useAuth();

  console.log(userRole);

  const [links, setLinks] = useState([
    { title: 'Profile', url: '/profile' },
    { title: 'Dashboard', url: '/user' },
    { title: 'Admin Dashboard', url: '/admin', role: 'admin' }, // Add role info for the link
    // Add more placeholder links as needed
  ]);

  const { session } = useSession();

  // Define the role function within the component
  const getRole = () => {
    return sessionStorage.getItem('role');
  };

  if (session === null) {
    sessionStorage.clear(); // This will clear all data stored in sessionStorage
  }

  return (
    <header className='text-gray-600 body-font bg-white shadow'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <div className='flex items-center mb-4 md:mb-0'>
          <a
            href='/'
            className='flex title-font font-medium items-center text-gray-900'
          >
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
            <span className='ml-3 text-xl'>SecureClerk</span>
          </a>
        </div>
        <SignedIn>
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
            {links.map((link) =>
              // If user has admin role or link has no role, show the link
              (link.role === 'admin' && userRole === 'admin') || !link.role ? (
                <a
                  key={link.title}
                  href={link.url}
                  className='mr-5 hover:text-gray-900'
                >
                  {link.title}
                </a>
              ) : null
            )}
          </nav>
        </SignedIn>

        <SignedOut>
          <div className='md:ml-auto md:mr-0 flex items-center'>
            <a href='/sign-in'>
              <button className='text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base mr-4'>
                Login
              </button>
            </a>
            <a href='/sign-up'>
              <button className='text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base'>
                Sign Up
              </button>
            </a>
          </div>
        </SignedOut>
        <SignedIn>
          <div className='ml-4'>
            <UserButton afterSignOutUrl='/' />
          </div>
        </SignedIn>

        <Collapse className='w-full md:hidden'>
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
