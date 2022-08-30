import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <span className="nav-logo">THE ZAHRA FOUNDATION</span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a className="active" href="/home">Home</a>
                <a href="/events">Events</a>
                <a href="/about">About</a>
                <a ><button class="button-donate" role="button">Donate</button></a>

            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
    );
};

export default Navbar;