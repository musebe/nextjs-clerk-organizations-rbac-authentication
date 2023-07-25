import React from 'react';

const User = () => {
  // Dummy user data for demonstration
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'User',
      image: '/user.webp', 
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      image: '/user.webp', 
    },
    // Add more dummy user data as needed
  ];

  return (
    <div className='bg-indigo-100 min-h-screen flex flex-col justify-between'>
      <div className='container mx-auto px-4 py-8'>
        {/* User Image */}
        <div className='w-32 h-32 mx-auto rounded-full overflow-hidden'>
          <img
            className='object-cover object-center w-full h-full'
            src={users[0].image} // Displaying the image of the first user, change as needed
            alt='User'
          />
        </div>

        {/* User Details */}
        <div className='my-8 text-center'>
          <h2 className='text-3xl font-bold text-gray-800'>{users[0].name}</h2>
          <p className='text-xl text-gray-600'>{users[0].email}</p>
          <p className='text-lg text-indigo-500'>Role: {users[0].role}</p>
          <p className='mt-4 text-gray-700'>
            Add any additional information about the user here...
          </p>
        </div>

        {/* User Table */}
        <div className='overflow-x-auto'>
          <table className='table-auto w-full'>
            <thead>
              <tr className='bg-indigo-200'>
                <th className='px-4 py-2'>ID</th>
                <th className='px-4 py-2'>Name</th>
                <th className='px-4 py-2'>Email</th>
                <th className='px-4 py-2'>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className='bg-white'>
                  <td className='border px-4 py-2'>{user.id}</td>
                  <td className='border px-4 py-2'>{user.name}</td>
                  <td className='border px-4 py-2'>{user.email}</td>
                  <td className='border px-4 py-2'>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    
    </div>
  );
};

export default User;
