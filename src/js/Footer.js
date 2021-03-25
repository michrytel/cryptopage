import React from "react";
import facebook from "../assets/icons/facebook.svg"
import twitter from "../assets/icons/twitter.svg"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <div className="footer__info">
                    <a href="/" className="logo">CryptoCourse</a>
                    <span className="footer__copy">© 2021 CryptoKurs LTD, All Rights Reserved</span>
                </div>
                <div className="footer__icons">
                    <a href="/"><img src={facebook} alt="twitter"/></a>
                    <a href="/"><img src={twitter} alt="facebook"/></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer