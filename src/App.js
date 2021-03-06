import './App.css';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import {
  Homepage, Navbar, Crytocurrenceies,
  CryptoDetails,
  Exchanges,
  News,

} from "./components/index"
import { Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd"






function App() {

const [checkwidth , setcheckwidth] = useState();
const [widthtrue , setwidthtrue] = useState(true);

useEffect(()=>{
  const handleresize = () => setcheckwidth(window.innerWidth);
  
  window.addEventListener('resize',handleresize);
  

  handleresize();
  console.log(widthtrue);
  if(checkwidth > 768){
    return setwidthtrue(true);
  }else{
    return setwidthtrue(false);
  }
},[checkwidth]);
  


  return (
    <div className="App" style={{marginLeft : widthtrue ? "250px" : ""}} >
      <div className='navbar'>
        <Navbar widthtrue={widthtrue}/>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/crytocurrenceies' element={<Crytocurrenceies />} />
              <Route path='/crypto/:rank' element={<CryptoDetails />} />
              <Route path='/exchanges' element={<Exchanges />} />
              <Route path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer" level={5} style={{ textAlign: "center" }}>
          <Typography.Title style={{ color: "white", }}>
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;


