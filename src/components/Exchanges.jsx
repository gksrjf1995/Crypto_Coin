import React, { useEffect, useState } from 'react'
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar  } from 'antd';
import HTMLReactParser from 'html-react-parser';
import { useGetexchangeQuery } from '../services/cyptoAPI';

const { Text } = Typography;
const { Panel } = Collapse;



const Exchanges = () => {
  const {data , isFetching} = useGetexchangeQuery();
  const [search , setsearch] = useState("");
  const [searchresult , setsearchresult] = useState(data?.data?.exchanges);
  const startvalue = "bit"
  
  
 
  useEffect(()=>{
    setsearchresult(data?.data?.exchanges);
    const result = data?.data?.exchanges?.filter((item)=>{
      return item.name.toLowerCase().includes(search);
    });
    setsearchresult(result);
    
  },[search ]);

 



  if(isFetching) return <div >Loading...</div>
 



  return (
    <div >
      <div>
        <input type="text" placeholder='Search coin ex)bit'  onChange={e=>setsearch(e.target.value)} />
      </div>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>btcPrice</Col>
        <Col span={6}>numberOfMarkets</Col>
        <Col span={6}>uuid(고유식별자)</Col>
      </Row>
      <Row>
        {searchresult?.map((exchange, index) => (
          <Col span={24} key={Date.now()+index}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={(
                 <div style={{display: "flex" , justifyContent : "flex-start", justifyContent : "space-between" , width : "100%"}}>
                   <div style={{flex : "0 0 25%"}} >
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                   </div>
                   <div style={{flex : "0 0 25%"}}>${millify(exchange.price)}</div>
                   <div style={{flex : "0 0 25%"}}>{exchange.numberOfMarkets}</div>
                   <div style={{flex : "0 0 25%"}}>{exchange.uuid}</div>
                 </div>
                  )}
                  
              >
              <div>
              <p>coinrankingUrl : <a href={exchange.coinrankingUrl}>{exchange.coinrankingUrl}</a></p>
              <p>iconUrl : <a href={exchange.iconUrl}>{exchange.iconUrl}</a></p>
              <p>rank : {exchange.rank}</p>
              </div>
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Exchanges