import React from 'react';
import ContactMap from "./ContactMap";
const ContactAddress = () => {
    return (
        <div className="contact__address">
            <div className="address__container">
                <p className="address__info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quisquam.</p>
                <p className="address__details">Lorem ipsum dolor sit amet.</p>
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