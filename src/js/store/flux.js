const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character:{},
			planets:{},
			starships:{},
			films:{},

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
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://swapi.dev/api/people/")
				.then(resp=>resp.json())
				.then(data=>{
					console.log(data)
					setStore({character:data})
				})
				.catch(error=>console.log(error))

				fetch("https://swapi.dev/api/planets/")
				.then(resp=>resp.json())
				.then(data=>{
					console.log(data)
					setStore({planets:data})
				})
				.catch(error=>console.log(error))

				fetch("https://swapi.dev/api/starships/")
				.then(resp=>resp.json())
				.then(data=>{
					console.log(data)
					setStore({starships:data})
				})
				.catch(error=>console.log(error))

				fetch("https://swapi.dev/api/films/")
				.then(resp=>resp.json())
				.then(data=>{
					console.log(data)
					setStore({films:data})

				})
				.catch(error=>console.log(error))



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
			}
		}
	};
};

export default getState;
