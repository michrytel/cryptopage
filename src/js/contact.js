import React from "react"

const Contact = () => {



    return (
        <section className="contact" id="contact">
            <div className="contact__column">
                <h2 className="contact__title">Masz jakieś pytania lub chcesz się zapisać na kurs?</h2>
                <p className="contact__instruction">
                    Napisz wiadomość lub zostaw swój adres e-mail, skontaktujemy się w ciągu 24 godzin
                </p>
                <div className="contact__details">
                    <a href="mailto:info@bestshop.xyz" className="details__item">
                        <img src="assets/Mail%20Icon.svg" alt="mail"/>
                        info@cryptokurs.xyz
                    </a>

                    <a href="tel:123456789" className="details__item">
                        <img src="assets/Phone%20Icon.svg" alt="phone"/>
                        123 456 789
                    </a>
                </div>
            </div>

            <div className="contact__column">
                <form className="form">
                    <div className="form__field">
                        <label className="form__label" htmlFor="name">Imie</label>
                        <input type="text" className="form__input-name" id="name"/>
                    </div>

                    <div className="form__field">
                        <label className="form__label" htmlFor="email">Mail</label>
                        <input type="email" className="form__input-email" id="email"/>
                    </div>

                    <div className="form__checkbox-container">
                        <label className="form__checkbox">
                            <input type="checkbox"/>
                            <span className="checkbox"></span>
                            <p className="consent__text">
                                I hereby give consent for my personal data included in my
                                application to be processed for the purposes of the recruitment
                                process under the European Parliament’s and Council of the
                                European Union Regulation on the Protection of Natural Persons as
                                of 27 April 2016, with regard to the processing of personal data
                                and on the free movement of such data, and repealing Directive
                                95/46/EC (Data Protection Directive)
                            </p>
                        </label>
                    </div>
                    <button type="submit" className="contact__submit">Wyślij</button>
                </form>
            </div>
        </section>
    )
}

export default Contact