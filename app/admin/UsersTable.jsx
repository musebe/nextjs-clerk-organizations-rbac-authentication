// UsersTable.js
import React from 'react';

const UsersTable = ({ users, deleteUser }) => {
  return (
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
    </div>
  );
};

export default UsersTable;
