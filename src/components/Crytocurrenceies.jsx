import React from 'react'
import { useState } from 'react';
import millify from 'millify'
import { Link } from 'react-router-dom'
import {Card , Row , Col , Input} from "antd";
import { useGetcyptoQuery } from '../services/cyptoAPI';
import { useEffect } from 'react';

const Crytocurrenceies = ({ simplified  , hidesearch  }) => {
  
  const count = simplified==="10?" ? 10 : 100;
  const {data : crytosList , isFetching} = useGetcyptoQuery(count);
  const [cryptoLists , setcryptoLists] = useState(crytosList?.data?.coins);
  const [onchage , setonchange] = useState("");
  
  useEffect(()=>{
    

    const filterdate = crytosList?.data?.coins.filter((coin)=>
    coin.name.toLowerCase().includes(onchage.toLocaleLowerCase()));
    
    setcryptoLists(filterdate);
  }, [crytosList,onchage , hidesearch]);
  
  
  if(isFetching) return "Loading...";
  return (
    <>
    <div className='search-crypto' >
      {hidesearch === undefined ? <Input placeholder='Search cryptocurrency' onChange={(e)=>setonchange(e.target.value)}/> : "" }
    </div>
    <div style={{marginLeft :"250px"}}>
      <Row gutter={[32,32]} className="crypto-card-container">
        {cryptoLists?.map((item , index)=>{
          return <Col xs={24} sm={12} lg={6} className="crypto-card" key={item.id}>
            <Link to={`/crypto/${item.id}`}>
              <Card title={`${item.rank} . ${item.name}`} 
                    extra={<img className='crypto-image' src={item.iconUrl}/>} hoverable>
                    <p>Price {millify(item.price)}</p>
                    <p>Price {millify(item.marketCap)}</p>
                    <p>Price {millify(item.change)}</p>
              </Card>
            </Link>
            </Col>
        })}
      </Row>  
      
    </div>
    </>
  )
}

export default Crytocurrenceies