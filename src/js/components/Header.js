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
                            <li className="nav__element"><a href="/" className="nav__link">Strona główna</a></li>
                            <li className="nav__element"><a href="/courses" className="nav__link">Szkolenia</a></li>
                            <li className="nav__element"><a href="/signup" className="nav__link">Zapisz się!</a></li>
                        </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header