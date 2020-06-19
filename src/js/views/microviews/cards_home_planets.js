import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export const CardsHomePlanets = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container">
				{!!store.planets &&
					store.planets.results.filter((item, index) => index <= 3).map((item, index) => {
						const nombre = item.name;
						return (
							<div className="card carta" id={index} key={item.name}>
								<img
									src="https://3000-c86fe07a-22d9-4251-b94e-c565ed42d4d5.ws-us02.gitpod.io//img/imagen4.jpg"
									className="card-img-top"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">
										<Link to={"/single_planet/" + index}>
											<span>{nombre}</span>
										</Link>
									</h5>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										cards content
									</p>
									<button
										onClick={() => {
											const ejemplo = nombre;
											console.log(ejemplo);
											actions.getFavoritos(nombre);
										}}>
										Fav.
									</button>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};
export default CardsHomePlanets;
