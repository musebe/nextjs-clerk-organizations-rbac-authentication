'use client';
// Import necessary modules and components
import { useState } from 'react';
import Link from 'next/link'
import { SignedOut, UserButton, SignedIn, useSession } from '@clerk/nextjs';
import { checkUserRole } from '../utils/userUtils';

// Navbar component
const Navbar = () => {
  // Get the user session using Clerk's useSession hook
  const { session } = useSession();

  // Define the navigation links with their titles, URLs, and optional roles
  const [links, setLinks] = useState([
    { title: 'Profile', url: '/profile' },
    { title: 'Dashboard', url: '/user' },
    { title: 'Admin Dashboard', url: '/admin', role: 'admin' }, // Add role info for the link
    // Add more placeholder links as needed
  ]);

  // Get the user's role using the checkUserRole utility function
  const userRole = checkUserRole(session);

  return (
    <header className='text-gray-600 body-font bg-white shadow'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <div className='flex items-center mb-4 md:mb-0'>
          {/* Brand logo and name */}
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
          {/* Navigation links for signed-in users */}
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
            {links.map((link) =>
              // If user has admin role or link has no role, show the link
              (link.role === 'admin' && userRole === 'admin') || !link.role ? (
                <Link key={link.title} href={link.url}>
                  {/* Wrap the content inside the Link component */}
                  <div className='mr-5 hover:text-gray-900'>{link.title}</div>
                </Link>
              ) : null
            )}
          </nav>
        </SignedIn>

        <SignedOut>
          {/* Buttons for signed-out users */}
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
          {/* User button for signed-in users */}
          <div className='ml-4'>
            <UserButton afterSignOutUrl='/' />
          </div>
        </SignedIn>
      </div>
    </header>
  );
};

export default Navbar;
