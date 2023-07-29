'use client';
// Your main application file

import Sidebar from './Sidebar';
import UsersTable from './UsersTable';
import AddUserForm from './AddUserForm';
import useUsers from './useUsers';

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

  return (
    <div className='flex flex-col md:flex-row bg-indigo-100 min-h-screen'>
      <Sidebar />
      <div className='flex flex-col w-full md:w-5/6 items-center justify-center'>
        <div className='mb-8'>
          {/* Admin Image */}
          <img
            className='object-cover object-center w-32 h-32 rounded-full'
            src='/admin.jpeg' // Replace with actual admin image URL
            alt='Admin'
          />
        </div>
        {/* Users Table */}
        <UsersTable users={users} deleteUser={deleteUser} />
        {/* Add User Form */}
        <AddUserForm addUser={addUser} />
      </div>
    </div>
  );
};

export default Admin;
