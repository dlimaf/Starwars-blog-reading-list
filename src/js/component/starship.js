import React, {useContext} from "react";
import { JumbotronVistas } from "./jumbotronvistas";
import navesImage from "../../img/naves.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CardStarships } from "./card";


export const Starship = () => {

    const {store,actions} = useContext(Context)

    return (
        <div>
            <JumbotronVistas
            titulo1="Starships"
            imagen1={navesImage}
            />
            <div className="container mt-3">
		
                {store.starships?.results?.map((starships,index)=>{ 
                    return (
                    <Link to={`/planets/details/${index}`}>
                        <div className="mt-2" key={index}>
                            <CardStarships 
                            title={starships.name} 
                            image={`${"https://starwars-visualguide.com/assets/img/starships/"}${index}${".jpg"}`} 
                            starships={starships} 
                            id={index} />
                        </div>
                    </Link>
                    )
                })}
            </div>
        </div>
    )
}