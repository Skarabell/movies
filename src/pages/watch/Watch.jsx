import React from 'react';
import {ArrowBackOutlined} from "@material-ui/icons";
import "./watch.scss"
import {NavLink} from "react-router-dom";

function Watch(props) {
    return (
        <div className="watch">
            <NavLink to="/">
            <div className="back">
                <ArrowBackOutlined/>
                Home
            </div>
            </NavLink>
            <video className="video" autoPlay progress controls/>
        </div>
    );
}

export default Watch;