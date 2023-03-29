import React from "react";
import { Jumbotron } from "./jumbotrom";
import navesImage from "../../img/naves.png";


export const Starship = () => {
    return (
        <div>
            <Jumbotron
            titulo1="Starchips"
            imagen1={navesImage}
            />
        </div>
    )
}