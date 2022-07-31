import React from 'react';
import { Link } from 'react-router-dom';
import Coin from "./Routes/Coin"
import "./Coins.css"

const Coins = ({coins}) => {
  const coinDisplay = coins.map((coin)=>{
    return(
      <Link to={`/coin/${coin.id}`} key={coin.id} element={<Coin/>}>
           <div className='coin-row' >
            <p>{coin.market_cap_rank}</p>
            <div className='img-symbol'>
                <img src={coin.image} alt={coin.id}/>
                <p>{coin.symbol.toUpperCase()}</p>
            </div>
  
            <p>${coin.current_price.toLocaleString()}</p>
            <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='hide-mobile'>${coin.total_volume.toLocaleString()}</p>
            <p className='hide-mobile'>{coin.market_cap.toLocaleString()}</p>
      </div>
      </Link>
        
      
    )
  })


  return (
    <div className='container'>
      <div className='heading'>
        <p>#</p>
        <p>Coin</p>
        <p>Price</p>
        <p>24h</p>
        <p className='hide-mobile'>Volume</p>
        <p className='hide-mobile'>Mkt Cap</p>

      </div>
      {coinDisplay}
      
    </div>
  );
}

export default Coins;
