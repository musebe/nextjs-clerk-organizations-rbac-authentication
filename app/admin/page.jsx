'use client';

// Import the necessary modules
import React, { useState} from 'react';
import { useSession } from '@clerk/nextjs';

const Admin = () => {

  // Dummy user data for the user table
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'User',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
    },
    // Add more dummy user data as needed
  ]);

  // Function to add a new user
  const addUser = (user) => {
    setUsers([...users, user]);
  };

  // Function to delete a user
  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  // Function to handle form submission for adding a user
  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name: e.target.name.value,
      email: e.target.email.value,
      role: 'User', // Set default role as 'User'
    };
    addUser(newUser);
    e.target.reset();
  };
  return (
    <div className='flex flex-col md:flex-row bg-indigo-100 min-h-screen'>
      {/* Side Navbar */}
      <nav className='bg-blue-200 w-full md:w-1/6 p-4'>
        <h2 className='text-2xl font-bold mb-4 text-white'>Admin Panel</h2>
        <ul className='text-lg'>
          <li className='my-2'>
            <a href='#'>Dashboard</a>
          </li>
          <li className='my-2'>
            <a href='#'>Users</a>
          </li>
          <li className='my-2'>
            <a href='#'>Inventory</a>
          </li>
        </ul>
      </nav>

      <div className='flex flex-col w-full md:w-5/6 items-center justify-center'>
        {/* Admin Image */}
        <div className='mb-8'>
          <img
            className='object-cover object-center w-32 h-32 rounded-full'
            src='/admin.jpeg' // Replace with actual admin image URL
            alt='Admin'
          />
        </div>

        {/* Users Table */}
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl font-bold mb-4'>Users Table</h2>
          <div className='overflow-x-auto'>
            <table className='table-auto w-full'>
              <thead>
                <tr className='bg-indigo-200'>
                  <th className='px-4 py-2'>ID</th>
                  <th className='px-4 py-2'>Name</th>
                  <th className='px-4 py-2'>Email</th>
                  <th className='px-4 py-2'>Role</th>
                  <th className='px-4 py-2'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className='bg-white'>
                    <td className='border px-4 py-2'>{user.id}</td>
                    <td className='border px-4 py-2'>{user.name}</td>
                    <td className='border px-4 py-2'>{user.email}</td>
                    <td className='border px-4 py-2'>{user.role}</td>
                    <td className='border px-4 py-2'>
                      <button
                        className='text-white bg-red-500 px-2 py-1 rounded'
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Add User Form */}
          <form onSubmit={handleAddUser} className='mt-4'>
            <h3 className='text-lg font-bold mb-2'>Add New User</h3>
            <input
              type='text'
              name='name'
              placeholder='Name'
              className='border rounded px-4 py-2 mr-2'
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='border rounded px-4 py-2 mr-2'
              required
            />
            <button
              type='submit'
              className='text-white bg-indigo-500 px-4 py-2 rounded'
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
