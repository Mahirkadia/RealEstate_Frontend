import React,{useState,useContext} from 'react';

// import icon
import {RiWallet3Fill,RiArrowDownSLine,RiArrowUpLine} from 'react-icons/ri'

// import headless ui
import { Menu } from '@headlessui/react'

// import House context
import  { HouseContext } from './HouseContext'
const PriceRangeDropdown = () => {
  const {price,setPrice}=useContext(HouseContext)
  // console.log(properties)
  const [isOpen,setOpen]= useState(false)

  const prices=[
    {
      value:'Price Range (any)',
    },
    {
      value:'100000-130000',
    },
    {
      value:'130000-160000',
    },
    {
      value:'160000-190000',
    },
    {
      value:'190000-220000',
    },
    {
      value:'10000-30000',
    },
    {
      value:'30000-40000',
    },
  ]

  return( 
  <Menu as='div' className='dropdown relative'>
    <Menu.Button onClick={()=> setOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <RiWallet3Fill className='dropdown-icon-primary'/>
    <div className='text-[15px] font-medium leading-tight'>{price}</div>
    <div className='text-[13px]'>Choose Price Range</div>
    {
      isOpen ? (
        <RiArrowUpLine className='dropdown-icon-secondary'/>
        
      ) : (
        <RiArrowDownSLine className='dropdown-icon-secondary'/>
      )
    }
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {prices.map((price,index)=>{
        return<Menu.Items onClick={()=> setPrice(price.value)}  as='li' key={index} className='cursor-pointer hover:text-violet-700 transition'>
          {price.value}
        </Menu.Items>
        
      })}
    </Menu.Items>
  </Menu>
  );
};

export default PriceRangeDropdown;
