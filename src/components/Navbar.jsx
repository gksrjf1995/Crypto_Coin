import React , { useState , useEffect }from 'react';

import { Button , Menu , Typography , Avatar} from "antd";
import { Link } from 'react-router-dom';
import { HomeOutlined , 
    FundFilled , 
    MenuOutlined ,  
    MoneyCollectOutlined , 
    BulbOutlined, 
    FundOutlined} from '@ant-design/icons';


const Navbar = ({widthtrue}) => {
  const [activemenu , setactivemenu] = useState(true);
  const [screenSize , setsscreenSize] = useState(null);

  useEffect(()=>{
    const handleresize = () => setsscreenSize(window.innerWidth);

    window.addEventListener('resize',handleresize);

    handleresize();

    return () => window.removeEventListener('resize' , handleresize);
  },[]);

  useEffect(()=>{
    
    if(screenSize < 768){
        setactivemenu(false);
    }else{
        setactivemenu(true);
    }
  },[screenSize]);
  console.log(widthtrue);
  return (
    <div className='nav-container' style={{position :  widthtrue ? "fixed" :"absolute" ,  top : widthtrue ? null : 0 }} >
        <div className='logo-container'>
            <Avatar src={"https://i.ibb.co/Z11pcGG/cryptocurrency.png"} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to="/">Crytoverse</Link>    
            </Typography.Title>
            <Button className='menu-control-container' onClick={e=>setactivemenu(!activemenu)}>
                <MenuOutlined/>
            </Button>
        </div>
        {activemenu && <Menu theme='dark' >
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to="/">Home</Link>    
            </Menu.Item>
            <Menu.Item icon={<FundOutlined/>}>
                <Link to="/crytocurrenceies">Crytocurrenceies</Link>    
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined/>}>
                <Link to="/exchanges">Exchanges</Link>    
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to="/news">News</Link>    
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
                <Link to="/test">test</Link>    
            </Menu.Item>
        </Menu>}
    </div>
  )
}

export default Navbar