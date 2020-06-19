import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CardsHomePlanets from "./microviews/cards_home_planets";
import CardsHomecharacters from "./microviews/cards_home_character";
import { Context } from "../store/appContext";

export const StarWarsMenu = () => {
	const ActionFetch = () => {
		const [actions] = useContext(Context);
	};
	return (
		<>
			<div className="container-fluid">
				<div className="container-fluid">
					<h1 className="title">
						<Link to="../planets">PLANETS</Link>
					</h1>
					<CardsHomePlanets />
				</div>

				<div className="container-fluid">
					<h1 className="title">
						<Link to="../characters">CHARACTERS</Link>
					</h1>
					<CardsHomecharacters />
				</div>
			</div>
		</>
	);
};

export default StarWarsMenu;
