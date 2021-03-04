import React from 'react';
import Header from "./js/header";
import Hero from "./js/hero";
import Benefits from "./js/benefits";
import CounterUp from "./js/counter";
import Footer from "./js/footer";
import CurrencyTicker from "./js/currencyTicker";
import Contact from "./js/contact";
import TeamContent from "./js/team";

const App = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <CurrencyTicker/>
            <Benefits/>
            <CounterUp/>
            <Contact/>
            <TeamContent/>
            <Footer/>
        </>
    );
}

export default App;


