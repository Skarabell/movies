import React from 'react';
import "./login.scss"
import {NavLink} from "react-router-dom";

function Login() {

    return (
        <div className="login">
            <div className="top">
                <NavLink to="/">
                <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                />
                </NavLink>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number"/>
                    <input type="password" placeholder="password"/>
                    <button className="loginButton">Sign In</button>
                    <span>
                        Now to Netflix?
                        <b>
                            Sign up now
                        </b>
                    </span>
                    <small>
                        Lorem ipsum dolor sit amet.
                        <b>
                            Learn more
                        </b>
                    </small>
                </form>
            </div>
        </div>
    );
}

export default Login;