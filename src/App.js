import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header/Header'
import Coin from './components/Coin/Coin'


function App() {
const [coins, setCoins] = useState([])
const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&price_change_percentage=1h')
      .then(res => {
        setCoins(res.data)
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  function handleChange(e) {
      setSearch(e.target.value)
    }


  const filteredCoins = coins.filter(coin => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div className="app">
      <Header />
      <input onChange={handleChange} className='searchBox' type="text" placeholder='Search Crypto Coins'></input>
      <div className="coin__body">
        {filteredCoins.map(coin => {
          return (
            <Coin key={coin.id}
                  rank={coin.market_cap_rank}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  marketCap={coin.market_cap}
                  priceChange1h={coin.price_change_percentage_1h_in_currency}
                  priceChange24h={coin.price_change_percentage_24h}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
