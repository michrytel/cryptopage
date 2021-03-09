import React, {useState, useEffect} from 'react';
import axios from "axios";
import Coin from "./Coin";
const CurrencyTable = () => {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
            .then(res => {
                setCoins(res.data);
            }).catch(error => console.log(error))
    }, [])
    const handleChange = e => {
        setSearch(e.target.value)
    }
    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className="currency__table-container">
            <div className="coin__search">
                <h2>Sprawdź na których kryptowalutach uczymy grać</h2>
                <form>
                    <input type="text" placeholder="Wyszukaj" className="coin__search-input" onChange={handleChange}/>
                </form>
            </div>
            <div className="coin__list">
            {filteredCoins.map(coin => {
                return (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        price={coin.current_price}
                        priceChange={coin.price_change_percentage_24h}
                        marketcap={coin.market_cap}
                    />
                )
            })}
            </div>
        </div>
    )
}
export default CurrencyTable