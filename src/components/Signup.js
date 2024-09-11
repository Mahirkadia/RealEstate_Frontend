import React from 'react'

export default function Signup() {
  return (
    <div>
      <form action='' method='post' className='flex flex-col gap-y-4'>
            <input className='border  border-gray-300 focus:border-violet-700 outline-none rounded w-full
            px-4 h-14 text-lg' type='email' placeholder='Email* ' required/>
            <input className='border  border-gray-300 focus:border-violet-700 outline-none rounded w-full
            px-4 h-14 text-lg' type='password' placeholder='Password*' required maxLength={8} />
            <input className='border  border-gray-300 focus:border-violet-700 outline-none rounded w-full
            px-4 h-14 text-lg' type='password' placeholder='Conform Password*' required maxLength={8} />
            <div className='flex gap-x-2'>
              <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm
              w-full transition' type='submit'>Login </button>
              <button className='border-red-700 text-white bg-red-600
              hover:border-red-700 hover:text-black-500 rounded p-4 w-full text-sm transition'type='submit'>SignUp</button>
            </div>
          </form>
    </div>
  )
}
