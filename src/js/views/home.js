import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import jumbotromHomeImage from "../../img/home.png";
import "../../styles/home.css";
import { Jumbotron } from "../component/jumbotrom";

export const Home = () => (
	<div className="text-center mt-5">
		<Jumbotron
		    titulo1="Bienvenido, "
			titulo2="Joven Padawan"
			parrafo1="Lorem ipsum is simply dummy text of the printing and typesetting industry."
			imagen1={jumbotromHomeImage}

		
		/>
	</div>
);
