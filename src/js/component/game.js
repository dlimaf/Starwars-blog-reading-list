import React from "react";
import "../../styles/navbar.css";
import gamesImage from "../../img/videojuegos.png";
import { JumbotronVistas } from "./jumbotronvistas";


export const Game = () => {
    return (
        <div>
            <JumbotronVistas
            titulo1="Videogames"
            imagen1={gamesImage}
            />
        </div>
    )
}