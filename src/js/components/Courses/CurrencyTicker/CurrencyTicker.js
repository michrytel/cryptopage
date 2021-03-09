import React, {useEffect, useState} from "react";
import axios from "axios";
import CurrencyCalculator from "./CurrencyCalculator";
import CurrencyTable from "./CurrencyTable";
const CurrencyTicker = () => {
    const [coins, setCoins] = useState([])
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&ids=bitcoin%2C%20ethereum%2C%20dogecoin%2C%20chainlink%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
            .then(res => {
                setCoins(res.data);
            }).catch(error => console.log(error))
    }, [])
    return (
        <div className="currency__ticker">
            <h3 className="ticker__main-title">Aktualne kursy najpopularniejszych kryptowalut:</h3>
            <div className="ticker">
                {
                coins.map((single, key) => {
                    return  (
                        <div className="ticker__single" key={key}>
                            <h6 className="ticker__title">{single.name}</h6>
                            <img src={single.image} alt="coin logo" className="ticker__img"/>
                            <span className="ticker__price-text">Aktualna cena:</span>
                            <span className="ticker__price">{single.current_price} zł</span>
                            <p className="ticker__price-text">Zmiana w ciągu 24h:</p>
                            {single.price_change_24h > 0 ? <p className="ticker__price">{single.price_change_percentage_24h.toFixed(2)}%</p> : <p className="ticker__price-red">{single.price_change_percentage_24h.toFixed(2)}%</p>}
                    </div>
                )
                })}
            </div>
            <CurrencyCalculator/>
            <CurrencyTable/>
        </div>
    );
};
export default CurrencyTicker
