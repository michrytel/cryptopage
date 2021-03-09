import React, {useEffect, useState} from "react";
import axios from "axios";
const CurrencyCalculator = () => {
    const [coins, setCoins] = useState([])
    const [selected, setSelected] = useState(0)
    const [input, setInput] = useState(0)
    const [output, setOutput] = useState(0)
    const [fromPLN, setFromPLN] = useState(true)
    const [result, setResult] = useState(0)
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&ids=bitcoin%2C%20ethereum%2C%20dogecoin%2C%20chainlink%2C%20ripple&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
            .then(res => {
                setCoins(res.data);
                setSelected(res.data[0].current_price)
            }).catch(error => console.log(error))
    }, [])
    let selectHandler = (e) => {
        setSelected(e.target.value)
        setInput("")
        setOutput("")
        setResult("")
    }
    let inputHandler = (e) => {
        setInput(+e.target.value)
        resultHandler(e)

    }
    let outputHandler = (e) => {
        setOutput(+e.target.value)
        resultHandler(e)

    }
    let resultHandler = (e) => {
        if (fromPLN) {
            setResult((+e.target.value * +selected).toFixed(3))
        } else {
            setResult((+e.target.value * (1 / selected)).toFixed(5))
        }
    }
    return (
        <div className="calculator">
            <p>Przelicznik</p>
            <div className="calc__box">
                {fromPLN ?
                    <input
                        className="calc__input"
                        type="number"
                        step="0.01"
                        min={0}
                        value={input}
                        onChange={inputHandler}
                        onSelect={(e) => {
                            e.target.value = "";
                            setInput("");
                            setResult("");
                            setFromPLN(true)
                        }}
                    /> :
                    <input
                        className="calc__input"
                        type="number"
                        step="0.01"
                        min={0}
                        value={result}
                        onChange={inputHandler}
                        onSelect={(e) => {
                            e.target.value = "";
                            setInput("");
                            setResult("");
                            setFromPLN(true)
                        }}
                    />}
                <div className="calc__select">
                    <select value={selected} onChange={selectHandler}>
                        {coins.map((single, key) => <option key={key}
                                                            value={single.current_price}>{single.name}</option>)}
                    </select>
                </div>
                <span>=</span>
                {fromPLN ?
                    <input
                        type="number"
                        step="0.01"
                        min={0}
                        className="calc__input"
                        value={result}
                        onChange={outputHandler}
                        onSelect={(e) => {
                            e.target.value = "";
                            setOutput("");
                            setResult("");
                            setFromPLN(false)
                        }}

                    /> :
                    <input
                        type="number"
                        step="0.01"
                        min={0}
                        className="calc__input"
                        value={output}
                        onChange={outputHandler}
                        onSelect={(e) => {
                            e.target.value = "";
                            setOutput("");
                            setResult("");
                            setFromPLN(false)
                        }}

                    />}
                <span>zł</span>
            </div>
        </div>
    );
};
export default CurrencyCalculator;
