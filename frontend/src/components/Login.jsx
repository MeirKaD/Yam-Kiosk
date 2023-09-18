import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import loginImg from '../assets/login.png'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const navigate = useNavigate();  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post('http://localhost:8000/send-username', {
        username,
        password: 'yam123', // Use the common password
      });
      if (password === 'yam123') {
        // Redirect to the Welcome component with the username as a parameter
        navigate(`/welcome/${result.data.username}`);
      } else {
        setResponse('Invalid credentials');
      }
      setResponse(`Received username: ${result.data.username}`);
    } catch (error) {
      setResponse('Invalid credentials');
    }
  };
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt='background'/>
      </div>
      <div className='bg-gray-800 flex flex-col justify-center'>
        <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
          <h2 className='text-4xl dark:text-white font-bold text-center'>Sing In</h2>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>User Name</label>
            <input   onChange={(e) => setUsername(e.target.value)} className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"type="text"/>
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} className="p-2 rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"type="password"/>
          </div>
          
          <button className='w-full my-5 py-2 bg-teal-500 rounded-lg shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white text-semibold' type="submit">Sing In</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login