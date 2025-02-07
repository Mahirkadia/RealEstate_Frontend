import React from 'react';
// import link
import Login from './Login';
import { Link} from 'react-router-dom';
import {Signup} from './Signup'
// import logo
import Logo from '../assets/img/logo.svg'
const Header = () => {
  return(
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link to='/'>
          <img src={Logo}/>
        </Link>

        {/* banner */}
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/'>Home</Link>
          <Link className='hover:text-violet-900 transition' to='/Login'>Log in</Link>
          <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='/Signup'>Sign Up</Link>
        </div>
      </div>
    </header>

)
};

export default Header;
