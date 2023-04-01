import React from "react";
import jumbotromHomeImage from "../../img/home.png";
import characterImage from "../../img/personajes.png";
import planetsImage from "../../img/planetas.png"
import navesImage from "../../img/naves.png";
import filmsImage from "../../img/peliculas-series.png";
import gamesImage from "../../img/videojuegos.png";
import philosophyImage from "../../img/filosofia.png";
import "../../styles/home.css";
import { Jumbotron } from "../component/jumbotrom";
import { Homecard } from "../component/homecard";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<Jumbotron
		    titulo1="Bienvenido, "
			titulo2="Joven Padawan"
			parrafo1="Lorem ipsum is simply dummy text of the printing and typesetting industry."
			imagen1={jumbotromHomeImage}
		/>
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-6 mt-3">
						<Link to="/characters/all" style={{textDecoration:"none"}}>
						    <Homecard
							image1={characterImage}
							titulo1="Characters"
						    />
						</Link>
					</div>
					<div className="col-md-6 mt-3">
					    <Link to="/starships/all" style={{textDecoration:"none"}}>
						<Homecard
							image1={navesImage}
							titulo1="Starships"
						/>
						</Link>
					</div>
					<div className="col-md-6 mt-3">
					    <Link to="/planets/all" style={{textDecoration:"none"}}>
						<Homecard
							image1={planetsImage}
							titulo1="Planets"
						/>
						</Link>
					</div>
					<div className="col-md-6 mt-3">
					    <Link to="/games" style={{textDecoration:"none"}}>
						<Homecard
							image1={gamesImage}
							titulo1="Videogames"
						/>
						</Link>
					</div>
					<div className="col-md-6 mt-3">
					    <Link to="/philosophy" style={{textDecoration:"none"}}>
						<Homecard
							image1={philosophyImage}
							titulo1="Philosophy"
						/>
						</Link>
					</div>
					<div className="col-md-6 mt-3">
					    <Link to="/films/all" style={{textDecoration:"none"}}>
						<Homecard
							image1={filmsImage}
							titulo1="Films&Series"
						/>
						</Link>
					</div>
				</div>

			</div>
		</>		
	</div>
);
