'use client';
// useUsers.js
import { useState } from 'react';

const useUsers = (initialUsers) => {
  const [users, setUsers] = useState(initialUsers);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return { users, addUser, deleteUser };
};

export default useUsers;
