import React,{useState,useContext} from 'react';

// import icon
import {RiHome5Line,RiArrowDownSLine,RiArrowUpLine} from 'react-icons/ri'

// import headless ui
import { Menu } from '@headlessui/react'

// import House context
import  { HouseContext } from './HouseContext'
const PropertyDropdown = () => {
  const {property,setProperty,properties}=useContext(HouseContext)
  
  const [isOpen,setOpen]= useState(false)
  return( 
  <Menu as='div' className='dropdown relative'>
    <Menu.Button onClick={()=> setOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <RiHome5Line className='dropdown-icon-primary'/>
    <div className='text-[15px] font-medium leading-tight'>{property}</div>
    <div className='text-[13px]'>Select Your Place</div>
    {
      isOpen ? (
        <RiArrowUpLine className='dropdown-icon-secondary'/>
        
      ) : (
        <RiArrowDownSLine className='dropdown-icon-secondary'/>
      )
    }
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {properties.map((property,index)=>{
        return<Menu.Items onClick={()=> setProperty(property)}  as='li' key={index} className='cursor-pointer hover:text-violet-700 transition'>
          {property}
        </Menu.Items>
        
      })}
    </Menu.Items>
  </Menu>
  );
};

export default PropertyDropdown;
