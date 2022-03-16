import React, { useEffect, useState } from 'react'
import {useGetCoinNewsQuery} from "../services/cryptoNews"
import { Card, Row, Col, Input, Typography, Select, Avatar } from "antd";
import moment from 'moment';
import { useGetcyptoQuery } from '../services/cyptoAPI';
const { Text, Title } = Typography;
const { Option } = Select;


const demoimg = `https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News`;

const News = ({ simplified, hidesearch }) => {
  

  const [newsCategory , setnewsCate] = useState("Cryptocurrency");
  
  const count = simplified === "10?" ? 8 : 20;
  const sibal = newsCategory
  const {data : coinNewsdata , isLoading } = useGetCoinNewsQuery({count , sibal});
  const {data : crytosList , isFetching} = useGetcyptoQuery(100);
  
  
  
  if(isLoading) return "Loading..."
  
  return (
  
    <div >
      {!simplified && <Col span={24} style={{marginBottom : "30px"}}>
        <Select showSearch className='select-news' placeholder="Select a Crypto"
          onChange={(event)=>setnewsCate(event)}
        >
          <Option value="Cryptocurency">Cryptocurency</Option>
          {crytosList?.data?.coins?.map((coins)=>{
             return <Option value={coins.name}>
                {coins.name}
             </Option>
          })}
        </Select>
      </Col>}
      <Row gutter={[24,24]}>
        {coinNewsdata?.value.map((news , i)=>{
          return <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card' >
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className='news-image-container'>
                  <Title className='news-title' level={4}>{news.name}</Title>
                  <img src={news.image?.thumbnail?.contentUrl || demoimg}/>
                </div>
                <p>{news.description.length > 100 ? news.description.slice(0,100) : news.description }...</p>
              </a>
              <div className='provider-container'>
                <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl}/>
                <Text>{moment(news.datePublished).startOf("ss").fromNow()}</Text>
              </div>
              <Text className='provider-name'>{news.provider[0]?.name}</Text>
            </Card>
          </Col>
        })}
       
      </Row>
      
    </div>
  )
}

export default News