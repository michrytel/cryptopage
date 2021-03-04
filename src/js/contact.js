import React, {useState} from "react"
import mail from "../assets/Mail Icon.svg"
import phone from "../assets/Phone Icon.svg"


const Contact = () => {
        const [form, setForm] = useState({ name: "", mail: "" });
        const [data, setData] = useState([])
        const handleChange = (e) => {
            const {name, value} = e.target;
            setForm(prevState => {
                return {
                    ...prevState,
                    [name]: value
                }
            });
        };
        const sendBtn = (e) => {
            e.preventDefault()
            setData(prev => [...prev, form])
            console.log(data);
        }

    return (
        <section className="contact" id="contact">
            <div className="contact__column">
                <h2 className="contact__title">Masz jakieś pytania lub chcesz się zapisać na kurs?</h2>
                <p className="contact__instruction">
                    Napisz wiadomość lub zostaw swój adres e-mail, skontaktujemy się w ciągu 24 godzin
                </p>
                <div className="contact__details">
                    <a href="mailto:info@cryptokurs.xyz" className="details__item">
                        <img src={mail} alt="mail"/>
                        info@cryptokurs.xyz
                    </a>

                    <a href="tel:123456789" className="details__item">
                        <img src={phone} alt="phone"/>
                        123 456 789
                    </a>
                </div>
            </div>
            <div className="contact__column">
                <form className="form">
                    <div className="form__field">
                        <label className="form__label" htmlFor="name">Imię</label>
                        <input type="text" className="form__input-name" id="name" name="name" value={form.name} onChange={handleChange}/>
                    </div>

                    <div className="form__field">
                        <label className="form__label" htmlFor="email">Mail</label>
                        <input type="email" className="form__input-email" id="email" name="mail" value={form.mail} onChange={handleChange}/>
                    </div>
                    <button type="submit" className="contact__submit" onClick={sendBtn}>Wyślij</button>
                </form>
            </div>
        </section>
    )
}

export default Contact