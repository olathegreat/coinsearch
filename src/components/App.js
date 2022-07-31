import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Coins from './Coins';
import Coin from "./Routes/Coin";
import Navbar from './Navbar';
import Footer from './Footer';
const App = () => {
    const [coins, setCoins] = useState([]);

    useEffect(()=>{
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
        axios.get(url).then((response)=>{
            setCoins(response.data);
            console.log(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])

  return (
    <>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Coins coins={coins}/>}/>
        <Route path='/coin/' element={<Coin/>}>
          <Route path=':coinId' element={<Coin/>}/>

        </Route>
      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
