import React from 'react'
const Coin = ({name, image, symbol, price, priceChange, marketcap}) => {
    return (
        <div className="coin__container">
            <div className="coin__row">
                <div className="coin">
                    <img src={image} alt="crypto coin"/>
                    <h3>{name}</h3>
                </div>
                <div className="coin__data">
                    <p className="coin__price">{price} PLN</p>
                    {priceChange < 0 ? (<p className="coin-percent red">24h change: {priceChange.toFixed(2)}%</p>) :
                        (<p className="coin-percent green">24h change: {priceChange.toFixed(2)}%</p>)}
                    <p className="coin__marketcap">M-cap: {marketcap} PLN</p>

                </div>
            </div>
        </div>
    )
}
export default Coin