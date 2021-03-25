import blockchain from "../../../assets/icons/blockchain.svg"
import chart from "../../../assets/icons/chart.svg"
import btc from "../../../assets/icons/bitcoin.svg"
const Benefits = () => {
    return (
        <section className="benefits">
            <div className="container">
                <h2 className="benefits__header">We provide comprehensive knowledge needed to invest wisely</h2>
                <p className="benefits__header">Our students will learn inside out:</p>
                <div className="benefits__container">
                    <div className="benefits__single">
                        <img src={blockchain} alt="blockchain" className="benefits__img"/>
                        <div className="benefits__title">Technology blockchain</div>
                        <div className="benefits__description">
                            Bitcoin and almost all other cryptocurrencies are based on blockchain technology. What is it about? How it works? How can it apply in everyday life? Understand blockchain before investing in cryptocurrencies.
                        </div>
                    </div>
                    <div className="benefits__single">
                        <img src={chart} alt="trading" className="benefits__img"/>
                        <div className="benefits__title">Secrets of technical analysis</div>
                        <div className="benefits__description">Technical analysis is over a century-old school of analysis
                            financial instruments, candlestick patterns and prices using various technical methods. AT
                            in the case of cryptocurrencies, it is extremely effective. How to use it?
                        </div>
                    </div>
                    <div className="benefits__single">
                        <img src={btc} alt="bitcoin" className="benefits__img"/>
                        <div className="benefits__title">The world of cryptocurrencies</div>
                        <div className="benefits__description">What are cryptocurrencies? A way to earn in
                            on the internet? A scam? Or maybe a revolution in the world of finance that will affect the traditional
                            banking and stock exchange? Where do their value and popularity come from?
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Benefits