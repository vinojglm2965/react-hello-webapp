import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import getState from "./store/flux.js";
import injectContext from "./store/appContext";
import StarWarsMenu from "./views/starwars";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { SingleCharacter } from "./views/single_character";
import { SinglePlanet } from "./views/single_planet";
import PlanetMenu from "./views/planets";
import CharacterMenu from "./views/characters";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Favoritos } from "./views/favoritos";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<br />
					<br />
					<br />
					<Switch>
						<Route path="/single_character/:theid" component={SingleCharacter} />
						<Route path="/single_planet/:theid" component={SinglePlanet} />
						<Route path="/single/:theid" component={Single} />
						<Route exact path="/characters" component={CharacterMenu} />
						<Route exact path="/planets" component={PlanetMenu} />
						<Route exact path="/" component={StarWarsMenu} />
						<Route path="/favoritos" component={Favoritos} />
						<Route path="/demo" component={Demo} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
