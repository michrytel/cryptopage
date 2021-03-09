import React, {useState} from "react";
import VisibilitySensor from "react-visibility-sensor";
import counterUpData from "../../../data/counter.json";
import CountUp from "react-countup";
const CounterUp = () => {
    const [didViewCountUp, setDidViewCountUp] = useState(false);
    const onVisibilityChange = isVisible => {
        if (isVisible) {
            setDidViewCountUp(true);
        }
    };
    return (
        <div className="counter">
            <h2 className="counter__title">Mamy już dokładnie tyle:</h2>
            <div className="counter__wrapper">
                {counterUpData.map((single) => {
                    return (
                    <div className="counter__list" key={single.id}>
                        <h6 className="counter__element-title">{single.title}</h6>
                        <p className="counter-active">
                            <VisibilitySensor onChange={onVisibilityChange}>
                                <CountUp end={didViewCountUp ? single.number : 0}/>
                            </VisibilitySensor>
                        </p>
                    </div>
                    )})}
            </div>
            <a href="/signup" className="counter__text">Kliknij<span> tu </span> i zacznij swoją przygodę w świecie krypto!</a>
        </div>
    );
};
export default CounterUp;
