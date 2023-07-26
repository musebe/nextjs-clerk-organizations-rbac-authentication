
import Link from 'next/link';

const ForbiddenPage = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-md max-w-md w-full'>
        <h1 className='text-3xl font-semibold mb-4'>403 - Forbidden</h1>
        <p className='text-gray-600 mb-6'>
          Only admins are allowed to access this page.
        </p>
        <div className='flex justify-between'>
          <Link href='/user'>
            <a className='px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600'>
              User Dashboard
            </a>
          </Link>
          <Link href='/'>
            <a className='px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600'>
              Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForbiddenPage;
