import React from "react";
import { Link } from "react-router-dom";
import botonprincipal from "../../img/maytheforce.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg mb-4 pe-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img id="logotipostarwars" src={botonprincipal}/>
				</span>
			</Link>
			<button className="navbar-toggler text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end me-5 " id="navbarNav">
                <ul className="navbar-nav me-5">
                    <Link to="/">
					    <li className="nav-item ">
                            <p className="nav-link active text-secondary fs-5 " aria-current="page" >Home</p>
                        </li>
					</Link>
					<Link to="/characters/all">
                        <li className="nav-item">
                            <p className="nav-link text-secondary fs-5">Characters</p>
                        </li>
					</Link>
					<Link to="/planets/all">
                        <li className="nav-item">
                            <p className="nav-link text-secondary fs-5" >Planets</p>
                        </li>
					</Link>
					<Link to="/starships/all">
					    <li className="nav-item">
                            <p className="nav-link text-secondary fs-5">Starships</p>
                        </li>
					</Link>
					<Link to="/games">
					    <li className="nav-item">
                            <p className="nav-link text-secondary fs-5">Games</p>
                        </li>
					</Link>
					<Link to="/films/all">
					    <li className="nav-item">
                            <p className="nav-link text-secondary fs-5">Films and Series</p>
                        </li>
					</Link>
					<Link to="/philosophy">
					    <li className="nav-item">
                            <p className="nav-link text-secondary fs-5">Philosophy</p>
                        </li>
					</Link>
                    
                </ul>
            </div>

		</nav>
	);
};
