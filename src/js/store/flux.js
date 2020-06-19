const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planets: null,
			characters: null,
			lista: [],
			countPlanets: 1,
			countCharacters: 1
		},
		actions: {
			/*FetchApi de Character*/
			getCharacter: () => {
				const store = getStore();
				fetch("https://swapi.dev/api/people/?page=" + store.countCharacters)
					.then(res => {
						return res.json();
					})
					.then(data => setStore({ characters: data }))
					.catch(error => console.error("error ", error));
			},

			/*FetchApi de Planet*/
			getPlanet: () => {
				const store = getStore();
				fetch("https://swapi.dev/api/planets/?page=" + store.countPlanets)
					.then(res => {
						return res.json();
					})
					.then(data => setStore({ planets: data }))
					.catch(error => console.error("error ", error));
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
                fetch().then().then(data => setStore({ "foo": data.bar }))
            */
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			/*Favoritos*/
			getFavoritos: nombre => {
				const store = getStore();

				const newlista = [...store.lista, nombre];
				setStore({ lista: newlista });
			},
			eliminarFavorito: index => {
				const store = getStore();

				if (store.lista !== null) {
					setStore(store.lista.filter(Contenid => Contenid.index == null));
				}
			},

			/*Aumentar*/
			aumentarCharacters: () => {
				const store = getStore();
				if (store.countCharacters < 9) {
					setStore({ countCharacters: store.countCharacters + 1 });
					console.log(store.countCharacters);

					fetch("https://swapi.dev/api/people/?page=" + store.countCharacters)
						.then(res => {
							return res.json();
						})
						.then(data => setStore({ characters: data }))
						.catch(error => console.error("error ", error));
				}
			},
			aumentarPlanets: () => {
				const store = getStore();
				if (store.countPlanets < 6) {
					setStore({ countPlanets: store.countPlanets + 1 });
					console.log(store.countPlanets);

					fetch("https://swapi.dev/api/planets/?page=" + store.countPlanets)
						.then(res => {
							return res.json();
						})
						.then(data => setStore({ planets: data }))
						.catch(error => console.error("error ", error));
				}
			},

			/*Disminuir*/
			disminuirCharacters: () => {
				const store = getStore();
				if (store.countCharacters > 1) {
					setStore({ countCharacters: store.countCharacters - 1 });
					console.log(store.countCharacters);

					fetch("https://swapi.dev/api/people/?page=" + store.countCharacters)
						.then(res => {
							return res.json();
						})
						.then(data => setStore({ characters: data }))
						.catch(error => console.error("error ", error));
				}
			},
			disminuirPlanets: () => {
				const store = getStore();
				if (store.countPlanets > 1) {
					setStore({ countPlanets: store.countPlanets - 1 });
					console.log(store.countPlanets);

					fetch("https://swapi.dev/api/planets/?page=" + store.countPlanets)
						.then(res => {
							return res.json();
						})
						.then(data => setStore({ planets: data }))
						.catch(error => console.error("error ", error));
				}
			}
		}
	};
};

export default getState;
