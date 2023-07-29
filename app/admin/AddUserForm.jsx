// AddUserForm.js
import React, { useState } from 'react';

const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: new Date().getTime(), // Use a unique ID (can be generated differently in production)
      name: name,
      email: email,
      role: 'User', // Set default role as 'User'
    };
    addUser(newUser);
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className='mt-4'>
      <h3 className='text-lg font-bold mb-2'>Add New User</h3>
      <div className='flex flex-col'>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border rounded px-4 py-2 mb-2'
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border rounded px-4 py-2 mb-2'
          required
        />
        <button
          type='submit'
          className='text-white bg-indigo-500 px-4 py-2 rounded'
        >
          Add User
        </button>
      </div>
    
    </form>
  );
};

export default AddUserForm;
