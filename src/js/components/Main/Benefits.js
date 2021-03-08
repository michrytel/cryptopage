import blockchain from "../../../assets/icons/blockchain.svg"
import chart from "../../../assets/icons/chart.svg"
import btc from "../../../assets/icons/bitcoin.svg"

const Benefits = () => {
    return (
        <section className="benefits">
            <div className="container">
                <h2 className="benefits__header">Przekazujemy kompleksową wiedzę potrzebną do rozsądnego
                    inwestowania</h2>
                <p className="benefits__header">Nasi kursanci poznają od podszewki:</p>
                <div className="benefits__container">
                    <div className="benefits__single">
                        <img src={blockchain} alt="blockchain" className="benefits__img"/>
                        <div className="benefits__title">Technologie blockchain</div>
                        <div className="benefits__description">Bitcoin i niemal wszystkie pozostałe kryptowaluty są
                            oparte na technologii blockchain. Na czym ona polega? Jak działa? Jakie może mieć
                            zastosowanie w codziennym życiu? Zrozum blockchain, zanim zainwestujesz w kryptowaluty.
                        </div>
                    </div>
                    <div className="benefits__single">
                        <img src={chart} alt="trading" className="benefits__img"/>
                        <div className="benefits__title">Tajniki analizy technicznej</div>
                        <div className="benefits__description">Analiza techniczna, to ponad stuletnia szkoła analizy
                            instrumentów finansowych, formacji świecowych i cen za pomocą różnych metod technicznych. AT
                            w przypadku kryptowalut jest nadzwyczaj efektywna. Jak jej użyć?
                        </div>
                    </div>
                    <div className="benefits__single">
                        <img src={btc} alt="bitcoin" className="benefits__img"/>
                        <div className="benefits__title">Świat kryptowalut</div>
                        <div className="benefits__description">Czym są kryptowaluty? Sposobem na zarabianie w
                            internecie? Oszustwem? A może rewolucją w świecie finansów, która dotknie tradycyjną
                            bankowość i giełdę? Skąd się bierze ich wartość i popularność?
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits