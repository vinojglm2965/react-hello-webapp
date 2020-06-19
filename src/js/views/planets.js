import React from "react";
import { Link } from "react-router-dom";
import CardsPlanets from "./microviews/cards_de_planets";

const PlanetMenu = () => {
	return (
		<>
			<div className="container-fluid">
				<CardsPlanets />
				<Link to="/" className="btn btn-primary">
					Back Home
				</Link>
			</div>
		</>
	);
};
export default PlanetMenu;
