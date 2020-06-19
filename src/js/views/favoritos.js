import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Favoritos = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
				{store.lista.map((item, index) => {
					return (
						<li key={index} className="list-group-item d-flex justify-content-between">
							<Link to={"/single/" + index}>
								<span>Link to: {item}</span>
							</Link>
							<button
								className="btn btn-success"
								onClick={() => {
									actions.eliminarFavorito(index);
									console.log(index);
								}}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
