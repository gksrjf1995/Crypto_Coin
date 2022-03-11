import React, { useEffect, useState } from 'react'
import {useGetcyptoNewsQuery} from "../services/cryptoNews"
import {useGetcyptoQuery} from "../services/cyptoAPI"
import {Card , Row , Col , Input, Typography, Select , Avatar} from "antd";
import moment from 'moment';
import { current } from '@reduxjs/toolkit';
const {Text ,Title} = Typography;
const {Option} = Select;

const demoimg = `https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News`;
const News = ({simplified  , hidesearch , count}) => {
  const [newsCategory , setnewscate] = useState("Cryptocurrency");

  const {data : cryptonews , isLoading} = useGetcyptoNewsQuery({ newsCategory , count : simplified ? 5 : 15  });
  const { data } = useGetcyptoQuery(count);

 
  



  if(isLoading) return "Loading..."
  return (
    <div style={{marginLeft :"250px"}}>
      
    
     <Row gutter={[24,24]}>
        {cryptonews.value.map((news , i)=>{
          return <Col xs={24} sm={12} lg={12} key={i}>
            <Card hoverable className='news-card'>
              <a href={news.url} target="_blank" rel='noreferrer'>
                <div className='news-image-container'>
                  <Title className='news-title' level={4}>{news.name}</Title>
                  <img src={news?.image?.thumbnail?.contentUrl || demoimg} />
                </div>
                <p>
                  {news.description > 100 ? `${news.description}` : news.description}
                  {news.description.length  > 100 ? `${news.description.substring(0,200)}` : news.description }
                </p>
                <div className='provider-container'>
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoimg} alt="news" />
                    <Text className='provider-name'>{news.provider[0]?.name}</Text>
                  </div>
                </div>
                <Text>{moment(news.datePublished).startOf("ss").fromNow()}</Text>
              </a>
            </Card>
          </Col>
        })}
     </Row>
    </div>
  )
}

export default News