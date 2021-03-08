import React from 'react';
import ContactMap from "./ContactMap";

const ContactAddress = () => {
    return (
        <div className="contact__address">
            <div className="address__container">
                <p className="address__info">Jeśli chcesz uzyskać więcej informacji, zapraszamy do naszej placówki</p>
                <p className="address__details">Jesteśmy otwarci codziennie od 9 do 21 </p>
            </div>
            <div className="map__container">
                <div className="google__map">
                    <ContactMap/>
                </div>
            </div>
        </div>
    )
}
export default ContactAddress