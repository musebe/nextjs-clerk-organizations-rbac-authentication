import React from 'react';

const Sidebar = () => {
  return (
    <nav className='bg-blue-200 w-full md:w-1/6 p-4'>
      <h2 className='text-2xl font-bold mb-4 text-white'>Admin Panel</h2>
      <ul className='text-lg'>
        <li className='my-2'>
          <a
            href='#'
            className='block text-white hover:bg-blue-300 p-2 rounded'
          >
            Dashboard
          </a>
        </li>
        <li className='my-2'>
          <a
            href='#'
            className='block text-white hover:bg-blue-300 p-2 rounded'
          >
            Users
          </a>
        </li>
        <li className='my-2'>
          <a
            href='#'
            className='block text-white hover:bg-blue-300 p-2 rounded'
          >
            Inventory
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
