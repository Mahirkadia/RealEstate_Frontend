import React, { useState } from 'react';
// import components
import Banner from '../components/Banner'
import HouseList from '../components/HouseList'
const Home = () => {
  const [data, setData] = useState({});
  fetch("http://127.0.0.1:8000/api/hello-world")
  .then((r) => {
    setData(JSON.parse(r.text()))
  })
  .catch(err => console.log("chaa mudi" + err))
  return (
    <div className='min-h-[1800px]'>
      <h1>{data.msg}</h1>
      <Banner/>
      <HouseList/>
    </div>
  );
};

export default Home;
