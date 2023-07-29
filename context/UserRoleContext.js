'use client';


// UserRoleContext.js
import { createContext } from 'react';
import { checkUserRole } from '@/utils/userUtils';

const UserRoleContext = createContext();

const mockSessionData = {
  user: {
    metadata: {
      role: 'user', // Replace with the user role you want to test
      // Other user data as needed
    },
  },
};

const UserRoleProvider = ({ children }) => {
  // For testing purposes, use the mocked session data
  const userRole = checkUserRole(mockSessionData);

  console.log('Mocked User Role:', userRole);

  return (
    <UserRoleContext.Provider value={userRole}>
      {children}
    </UserRoleContext.Provider>
  );
};

export { UserRoleContext, UserRoleProvider };


