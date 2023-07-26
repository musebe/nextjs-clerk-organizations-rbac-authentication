import { UserProfile } from '@clerk/nextjs';

const Profile = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='my-8'>
        <UserProfile />
      </div>
    </div>
  );
};

export default Profile;
