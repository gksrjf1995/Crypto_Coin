
import React, { useEffect, useState } from 'react'
import {useGetCoinNewsQuery} from "../services/cryptoNews"
import { Card, Row, Col, Input, Typography, Select, Avatar } from "antd";
import moment from 'moment';

const { Text, Title } = Typography;
const { Option } = Select;

const demoimg = `https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News`;

const Newss = ({ simplified, hidesearch }) => {

    const count = simplified==="10?" ? 8 : 20;
   
    const {data : coinNewsdata , isLoading } = useGetCoinNewsQuery(count , {newsCategory : "appropriate"});
    
    console.log(coinNewsdata?.value)
  
    

  return (
    <div style={{ marginLeft: "250px" }}>
       
    </div>
  )
}

export default Newss