import React from "react";
import { Jumbotron } from "./jumbotrom";
import planetsImage from "../../img/planetas.png"


export const Planet = () => {
    return (
        <div>
            <Jumbotron
            titulo1="Planets"
            imagen1={planetsImage}
            />
        </div>
    )
}