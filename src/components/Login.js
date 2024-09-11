import React from 'react'
import { useState } from 'react';
export default function Login() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        
        const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { email, password });
        };   
        
  return (
    <div>
    {/* <form onSubmit={handleSubmit} className='border grid-x-4 py-4 '>
    <label typeof='email'>Email:</label>
    <input type="email" id="email" placeholder='Enter a Email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br/>
    <label typeof="password">Password:</label>
    <input type="password" id="password" placeholder='Enter a Password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br/>
    <button type="submit">Login</button>
    </form>   */}
    <form action='' method='post' className='flex flex-col gap-y-4'>
            <input className='border  border-gray-300 focus:border-violet-700 outline-none rounded w-full
            px-4 h-14 text-lg' type='text' placeholder='Name* ' required/> 
            <input className='border  border-gray-300 focus:border-violet-700 outline-none rounded w-full
            px-4 h-14 text-lg' type='email' placeholder='Email* ' required/>
            <input className='border  border-gray-300 focus:border-violet-700 outline-none rounded w-full
            px-4 h-14 text-lg' type='password' placeholder='Password*' required maxLength={8} />
             <input className='border  border-gray-300 focus:border-violet-700 outline-none rounded w-full
            px-4 h-14 text-lg' type='tel' placeholder='Phone* ' required maxLength={10}/>
            <div className='flex gap-x-2'>
              <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm
              w-full transition' type='submit'>Login </button>
              <button className='border-red-700 text-white bg-red-600
              hover:border-red-700 hover:text-black-500 rounded p-4 w-full text-sm transition'type='submit'>SignUp</button>
            </div>
          </form>
    </div>
  );
}