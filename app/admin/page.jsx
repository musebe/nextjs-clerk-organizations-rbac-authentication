'use client';

import React from 'react';
import Sidebar from './Sidebar';
import UsersTable from './UsersTable';
import AddUserForm from './AddUserForm';
import useUsers from './useUsers';
import { useOrganizationList } from '@clerk/nextjs'; // Import the useOrganizationList hook

const Admin = () => {
  // Dummy user data for the user table
  const initialUsers = [
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
  ];

  const { users, addUser, deleteUser } = useUsers(initialUsers);

  // Organization data
  const { organizationList, isLoaded, setActive } = useOrganizationList();

  // Get the organization details of the admin
  const adminOrganization = organizationList.find(
    (org) => org.membership.role === 'admin'
  );

  // Set the admin details
  const adminName = adminOrganization
    ? adminOrganization.organization.name
    : 'N/A';
  const adminRole = adminOrganization
    ? adminOrganization.membership.role
    : 'N/A';
  const adminImageUrl = adminOrganization
    ? adminOrganization.organization.imageUrl
    : '/admin.jpeg'; // Replace with the default admin image URL or any other fallback image

  return (
    <div className='flex flex-col md:flex-row bg-indigo-100 min-h-screen'>
      <Sidebar />
      <div className='flex flex-col w-full md:w-5/6 items-center justify-center mt-12'>
        <div className='mb-4'>
          {/* Organization Name */}
          <h2 className='text-xl font-bold'>Organization: {adminName}</h2>
        </div>
        <div className='mb-4'>
          {/* Admin Role */}
          <p className='text-lg font-semibold'>Role: {adminRole}</p>
        </div>
        {/* Admin Image */}
        <img
          className='object-cover object-center w-32 h-32 rounded-full mb-8'
          src={adminImageUrl}
          alt='Admin'
        />
        {/* Users Table */}
        <UsersTable users={users} deleteUser={deleteUser} />
        {/* Add User Form */}
        <AddUserForm addUser={addUser} />
      </div>
    </div>
  );
};

export default Admin;
