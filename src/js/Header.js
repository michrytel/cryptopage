import React from "react";
const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <a href="/" className="logo">CryptoCourse</a>
                <nav>
                    <input type="checkbox" className="menu__btn" id="menu__btn"/>
                        <label htmlFor="menu__btn" className="menu__toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <ul className="header__nav">
                            <li className="nav__element"><a href="/" className="nav__link">Main</a></li>
                            <li className="nav__element"><a href="/courses" className="nav__link">Courses</a></li>
                            <li className="nav__element"><a href="/signup" className="nav__link">Sign Up!</a></li>
                        </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header