import React from "react";
import "../../styles/navbar.css";
import characterImage from "../../img/personajes.png";
import { Jumbotron } from "./jumbotrom";


export const Character = () => {
    return (
        <div>
            <Jumbotron
            titulo1="Characters"
            imagen1={characterImage}
            />
        </div>
    )
}