import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from "react-router-dom";
import { useGetcyptoQuery } from '../services/cyptoAPI';
import Crytocurrenceies from './Crytocurrenceies';
import News from "./News";
import { useSelector, useDispatch } from 'react-redux'
import {stateopposite} from "../services/globalstate"


const { Title } = Typography;


const Homepage = () => {
  const {data , isFetching } = useGetcyptoQuery(10);
  const dispatch = useDispatch();

  const count = useSelector((state)=>state);
  const globalstate = data?.data?.stats;
  const [checkdevice , setcheckdevice] = useState(); 
  const {activemenu} = count.stateopposite
  useEffect(()=>{
    const handleresize = () => setcheckdevice(window.innerWidth);
    window.addEventListener('resize',handleresize);
    handleresize();
  },[checkdevice]);

  useEffect(()=>{
    if(checkdevice > 768){
      console.log()
      dispatch(stateopposite(false));
    }else{
      dispatch(stateopposite(true));
    }
  },[checkdevice]);


  if(isFetching) return "Loading...";
  
  return (
    <>
      <div >
        <Title level={2} className={"heading"}>Global Cypto Stats</Title>
        <Row>
          <Col span={12}><Statistic title="Total Cyptoocuurencies" value={globalstate.total} /></Col>
          <Col span={12}><Statistic title="Total Exchanges" value={millify(globalstate.totalExchanges)} /></Col>
          <Col span={12}><Statistic title="Total Market Cap" value={millify(globalstate.totalMarketCap)} /></Col>
          <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalstate.total24hVolume)} /></Col>
          <Col span={12}><Statistic title="Total Market" value={millify(globalstate.totalMarkets)} /></Col>
        </Row>
      </div>
      
      <div className='home-heading-container'>
        <Title level={2} className="home-title" style={{marginLeft :"250px"}}>Top 10 Crypto </Title>
        <Title level={2} className="show-more"><Link to="/crytocurrenceies">Show more</Link></Title>
      </div>
      <Crytocurrenceies simplified={"10?"} hidesearch />
      <div className='home-heading-container'>
        <Title level={2} className="home-title" style={{marginLeft :"250px"}}>Latest Crypto News </Title>
        <Title level={2} className="show-more"><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified={"10?"} hidesearch/>
    
    </>


  )
}

export default Homepage