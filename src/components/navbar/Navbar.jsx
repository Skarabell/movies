import "./navbar.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faGift,
    faBell,
    faSearch,
    faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

function Navbar(props) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    return (
        <nav className={scrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <NavLink to="/">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                            alt="logo"/>
                    </NavLink>
                    <ul className="navbar-nav">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">Tv Shows</li>
                        <li className="nav-item">Movies</li>
                        <li className="nav-item">Latest</li>
                        <li className="nav-item">My list</li>
                    </ul>
                </div>
                <div className="right">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-3">
                            <FontAwesomeIcon icon={faSearch}/>
                        </li>
                        <li className="nav-item mr-3">KIDS</li>
                        <li className="nav-item mr-3">
                            <FontAwesomeIcon icon={faGift}/>
                        </li>
                        <li className="nav-item mr-3">
                            <FontAwesomeIcon icon={faBell}/>
                        </li>
                        <li className="nav-item">
                                 <span className="profile">
                                     <NavLink to="/login">
                            <img
                                src="https://randomwordgenerator.com/img/picture-generator/yns-plt-6dJ4fApKPk8-unsplash.jpg"
                                alt="user"
                            />
                                         </NavLink>
                                <FontAwesomeIcon icon={faCaretDown}/>
                                 <div className="options">
                                    <span>Settings</span>
                                    <span>Logout</span>
                                </div>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
/*

<nav className="navbar">
    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <img src="https://randomwordgenerator.com/img/picture-generator/55e2d3434b54a814f1dc8460962e33791c3ad6e04e507440742a7ad19f45c5_640.jpg"
             alt="logo" height="50px" className="ml-3"/>
        <ul className="navbar-nav">
            <li className="nav-item">Home</li>
            <li className="nav-item">Tv Shows</li>
            <li className="nav-item">Movies</li>
            <li className="nav-item">Latest</li>
            <li className="nav-item">My list</li>
        </ul>
    </div>
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-3">
                <FontAwesomeIcon icon={faSearch}/>
            </li>
            <li className="nav-item mr-3">KIDS</li>
            <li className="nav-item mr-3">
                <FontAwesomeIcon icon={faGift}/>
            </li>
            <li className="nav-item mr-3">
                <FontAwesomeIcon icon={faBell}/>
            </li>
            <li className="nav-item">
                <img
                    src="https://randomwordgenerator.com/img/picture-generator/yns-plt-6dJ4fApKPk8-unsplash.jpg"
                    alt="user"
                    height="25px"
                    className="mr-1"
                />
                <FontAwesomeIcon icon={faCaretDown}/>
            </li>
        </ul>
    </div>
</nav>*/
