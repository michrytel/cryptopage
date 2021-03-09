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
                    <p className="coin__price">{price} zł</p>
                    {priceChange < 0 ? (<p className="coin-percent red">Zmiana w ciągu 24h: {priceChange.toFixed(2)}%</p>) :
                        (<p className="coin-percent green">Zmiana w ciągu 24h: {priceChange.toFixed(2)}%</p>)}
                    <p className="coin__marketcap">Całkowity wolumen handlowy: {marketcap} zł</p>

                </div>
            </div>
        </div>
    )
}
export default Coin