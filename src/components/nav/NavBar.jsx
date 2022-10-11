import React from "react";
import logo from "./logoSportSee.svg";
import icon from "./icon1.svg";
import icon2 from "./icon2.svg";
import icon3 from "./icon3.svg";
import icon4 from "./icon4.svg";
import "./NavBarStyle.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbarHorizontal">
                <img className="logoSportSeeNav" src={logo} alt="logo" />
                <ul className="navItemListHorizontal">
                    <li className="navItem">Home</li>
                    <li className="navItem">Profile</li>
                    <li className="navItem">Réglage</li>
                    <li className="navItem">Communauté</li>
                </ul>
            </div>
            <div className="navbarVertical">
                <ul className="navItemListVertical">
                    <li className="navItemIcon"><img className="IconNav" src={icon} alt="icon" /></li>
                    <li className="navItemIcon"><img className="IconNav" src={icon2} alt="icon" /></li>
                    <li className="navItemIcon"><img className="IconNav" src={icon3} alt="icon" /></li>
                    <li className="navItemIcon"><img className="IconNav" src={icon4} alt="icon" /></li>
                </ul>
                <span className="navItemCopiryght">Copiryght, SportSee 2020</span>
            </div>
        </nav>
    );
};

export default NavBar;