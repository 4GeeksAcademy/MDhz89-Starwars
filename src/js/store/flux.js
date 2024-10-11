const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			people: [],
			planets: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			getCharacters: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/people")
					const data = await response.json()
					console.log(data)
					setStore({ people: data.results })
					return true
				} catch (error) {
					console.log(error)
					return false
				}
				
			},

			getPlanets: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/planets")
					const data = await response.json()
					console.log(data)
					setStore({ planets: data.results })
					return true
				} catch (error) {
					console.log(error)
					return false
				}
				
			},
			
		}
	};
};

export default getState;
