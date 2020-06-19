import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

export const CardsCharacters = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="container">
				{!!store.characters &&
					store.characters.results.map((item, index) => {
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
										<Link to={"/single_character/" + index}>
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
				<button
					onClick={() => {
						actions.aumentarCharacters();
					}}>
					mas
				</button>
				<button
					onClick={() => {
						actions.disminuirCharacters();
					}}>
					menos
				</button>
			</div>
		</>
	);
};
export default CardsCharacters;

/*				{!!store.charactersTwo &&
					store.charactersTwo.results.map((item, index) => {
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
										<Link to={"/single_character/" + index}>
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
				{!!store.charactersThree &&
					store.charactersThree.results.map((item, index) => {
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
										<Link to={"/single_character/" + index}>
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
				{!!store.charactersFour &&
					store.charactersFour.results.map((item, index) => {
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
										<Link to={"/single_character/" + index}>
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
				{!!store.charactersFive &&
					store.charactersFive.results.map((item, index) => {
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
										<Link to={"/single_character/" + index}>
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
				{!!store.charactersSix &&
					store.charactersSix.results.map((item, index) => {
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
										<Link to={"/single_character/" + index}>
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
*/
