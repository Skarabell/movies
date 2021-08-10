import React from 'react';
import "./featured.scss"
import {InfoOutlined, PlayArrow} from "@material-ui/icons";
import {NavLink} from "react-router-dom";


function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                    </select>
                </div>
            )}
            <img
                src="https://randomwordgenerator.com/img/picture-generator/55e2d3434b54a814f1dc8460962e33791c3ad6e04e507440742a7ad19f45c5_640.jpg"
                alt="logo" width="100%"/>
            <img
                src="https://randomwordgenerator.com/img/picture-generator/55e2d3434b54a814f1dc8460962e33791c3ad6e04e507440742a7ad19f45c5_640.jpg"
                alt="logo" width="100%"/>
            <div className="info">
                <img
                    src="https://source.unsplash.com/random"
                    alt="logo" width="10%"/>
                <span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi esse natus quasi suscipit! Corporis cumque deleniti, dolores eos eum laudantium nam neque nulla, officiis, quam quasi suscipit temporibus unde voluptatum.</span>
                <div className="buttons">
                    <NavLink to="/watch">
                        <button className="playButton">
                            <PlayArrow/>
                        </button>
                    </NavLink>
                    <button className="myListButton">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Featured;