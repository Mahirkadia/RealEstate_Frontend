import React from 'react';

import { useEffect,useState,createContext } from 'react';
// import data they show details
import {housesData} from '../data'

//  create context
export const HouseContext=createContext();

const HouseContextProivder = ({children}) => {
  const [houses,setHouses]= useState(housesData)
  const [country,setCountry]= useState('Location (any)')
  const [countries,setCountries]=useState([])
  const [property,setProperty]=useState('Property type(any)')
  const [properties,setProperties]=useState([])
  const [price,setPrice]=useState('Price Range (any)')
  const [loading,setLoading]=useState(false)

// return all country 
useEffect(()=>{
  const allcountry=houses.map((houses)=>{
    return houses.country
  })
  
  // remove duplicate country
  const uniqueCountry=['Location (any)',...new Set(allcountry)]

  // set country state
  setCountries(uniqueCountry)
},[])

// return all property 
useEffect(()=>{
  const allProperties=houses.map((houses)=>{
    return houses.type
  })
  
  // remove duplicate country
  const uniqueProperties=['Location (any)',...new Set(allProperties)]

  // set country state
  setProperties(uniqueProperties)
},[])

// return price
const  handleClick=()=>{
  //  set loading
  setLoading(true)
  // create a function that check if the string  includes '(any)'
  const isDefault=(str)=>{
    return str.split(' ').includes('(any)')
  };

  // get first value of price and parse it to number
  const minprice=parseInt(price.split(' ')[0])
  // get second value of price which  is the  maximum price & parse it number
  const maxprice=parseInt(price.split(' ')[2])

  const newHouses=housesData.filter((house)=>{
    const housePrice=parseInt(house.price)

    // if all value are selected
    if(house.country === country && house.type === property && housePrice >= minprice && housePrice <= maxprice){
      return house;
    }

    // if all value are default
    if(isDefault(country) && isDefault(property) && isDefault(price)){
      return house;
    }

    // if country is not Default
    if(!isDefault(country) && isDefault(property) && isDefault(price)){
        return house.country=== country
    }

    // if property is not Default
    if(!isDefault(property) && isDefault(country) && isDefault(price)){
      return house.type===property
    }

    // if price is not default
    if(!isDefault(price) && isDefault(country) && isDefault(property)){
      if(housePrice>=minprice && housePrice<=maxprice){
        return house
      }
    }
    // if country and property are not default
    if(!isDefault(country) && !isDefault(property) && isDefault(price)){
      return house.country===country && house.type===property
    }
    // if country and price are not default
    if(!isDefault(country) && isDefault(property)&& !isDefault(price)){
      if(housePrice>=minprice && housePrice<=maxprice){
        return house.country==country;
    }
  } 
  // property and price is not default
  if(isDefault(country) && !isDefault(price) && !isDefault(property)){
    if(housePrice>=minprice && housePrice<=maxprice){
      return house.type===property;
    }
  }
  console.log(price)
  })
    setTimeout(()=>{
      return newHouses.length < 1 ? setHouses([]):
      setHouses(newHouses),
      setLoading(false)
    },1000)
};
  return <HouseContext.Provider value={{
     country,
     setCountry,
     countries,
     setCountries,
     property,
     setProperty,
     properties,
     price,
     setPrice,
     houses,
     loading,
     handleClick,
     loading,
  }}>{children}</HouseContext.Provider>;
};

export default HouseContextProivder;
