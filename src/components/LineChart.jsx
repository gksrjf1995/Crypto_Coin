import React from 'react'

import {Col, Row , Typography} from "antd"
import {useGethistoryQuery} from "../services/cyptoAPI"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js'
  import { Line } from 'react-chartjs-2'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  )






const { Title } = Typography;



const LineChart = ({History , price , name ,uuid}) => {
  const coinprice = [];
  const coinTimeStamp = [];
  const {data : coindata} = useGethistoryQuery({coins : uuid , timePeriod : History});
 
  console.log(new Date(coindata?.data?.history[0].timestamp));
  for(let i=0; i < coindata?.data?.history.length; i += 1){
    coinprice.push(coindata?.data?.history[i].price);
    coinTimeStamp.push(new Date(coindata?.data?.history[i].timestamp).toLocaleDateString());
}
const data = {
    labels: coinTimeStamp,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: coinprice,
      fill : false,
    }]
  };

 const options = {
    scales: {
        yAxes: [
            {
                ticks : {
                    beginAtZero: true
                }
            }
        ]
    }
}
    
  return (
    <>
    <Row className='chart-header'>
        <Title level={2} className="chart-title">price Chart</Title>
        <Col className='price-container'>
            <Title level={5} className="price-charg">{coindata?.data?.change}%</Title>
            <Title level={5} className="current-price">{name} price : $ {price}</Title>
        </Col>
        <Line data={data} options={options}/>
    </Row>
    </>
  )
}

export default LineChart