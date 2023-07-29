import { auth, currentUser } from '@clerk/nextjs';

const User = async () => {
  const { userId } = auth();

  const user = await currentUser();

  // Real-time user data
  const users = [
    {
      id: 1,
      name: `${user.firstName} ${user.lastName}`,
      email: user.emailAddresses[0].emailAddress,
      role: 'User', // You can update this based on your application's logic
      image: user.imageUrl,
    },
    // Add more users as needed
  ];

  // You can add more user data as needed from the "user" object.

  return (
    <div className='bg-indigo-100 min-h-screen flex flex-col justify-between'>
      <div className='container mx-auto px-4 py-8'>
        {/* User Image */}
        <div className='w-32 h-32 mx-auto rounded-full overflow-hidden'>
          <img
            className='object-cover object-center w-full h-full'
            src={users[0].image}
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
              {/* Display the real-time user data */}
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
          {/* <pre>{JSON.stringify({ userId, user }, null, 2)}</pre> */}
        </div>
      </div>
    </div>
  );
};

export default User;
