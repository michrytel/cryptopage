import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <a href="/" className="logo">CryptoKurs</a>
                <nav>
                    <input type="checkbox" className="menu__btn" id="menu__btn"/>
                        <label htmlFor="menu__btn" className="menu__toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <ul className="header__nav">
                            <li className="nav__element"><a href="#why-us" className="nav__link">O nas</a></li>
                            <li className="nav__element"><a href="#benefits" className="nav__link">Korzyści</a></li>
                            <li className="nav__element"><a href="#prices" className="nav__link">Cennik</a></li>
                            <li className="nav__element"><a href="#contact" className="nav__link">Kontakt</a></li>
                        </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header