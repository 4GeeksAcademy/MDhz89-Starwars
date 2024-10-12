import React from "react";

import "../../styles/home.css";

import Characters from "./characters.js";
import Planets from "./Planets.js";
import Starships from "./starships.js";

export const Home = () => {



	return (
		<div>
		<Characters />
		<Planets/> 
		<Starships/>
		</div>
	);

}
