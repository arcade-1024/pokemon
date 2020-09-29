import React, { useState, useEffect } from "react";
import axios from "axios";
import pokeball from "./assets/img/pokeball.png";
import egg from "./assets/img/egg.svg";
import "./App.scss";

//components
import PokeGrid from "./components/pokeGrid/PokeGrid";
import Search from "./components/search/Search";
function App() {
	const [pokeData, setPokeData] = useState([]);
	const [text, setText] = useState("");
	const [isLoading,setIsLoading] = useState(true);
	let tempArray = [];
	useEffect(() => {
		const fetchPokemon = async () => {
			for (let i = 1; i <= 200; i++) {
				tempArray.push(await getPokemon(i));
			}
			console.log(tempArray[0]);

			setPokeData(tempArray);
			setIsLoading(false);
		};

		const getPokemon = async (id) => {
			const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
			return result.data;
		};

		fetchPokemon();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// console.log(pokeData);
	return (
		<div className="App">
			<h1 className="App-title">Pokedex</h1>
			<Search
				pokeData={pokeData}
				setPokeData={setPokeData}
				text={text}
				setText={setText}
			/>
			<div className="App-div-ball">
				<img src={pokeball} alt="" />
			</div>
			<div className="App-div-egg">
				<img src={egg} alt="" />
			</div>
			<PokeGrid pokeData={pokeData} setPokeData={setPokeData} isLoading={isLoading}/>
		</div>
	);
}

export default App;
