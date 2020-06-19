import React from "react";
import CardsCharacters from "./microviews/cards_de_characters";
import { Link } from "react-router-dom";

const CharacterMenu = () => {
	return (
		<>
			<div className="container-fluid">
				<CardsCharacters />
				<Link to="/" className="btn btn-primary">
					Back Home
				</Link>
			</div>
		</>
	);
};
export default CharacterMenu;
