import React from "react";
import "./PokeGrid.scss";
import PokeCard from "../pokeCard/PokeCard";

const PokeGrid = ({ pokeData ,setPokeData}) => {
	
	return (
		<div className="poke-grid">
			{pokeData.map((item) => (
				<PokeCard
					data={item}
					key={item.id}
					setPokeData={setPokeData}
					pokeData={pokeData}
				/>
			))}
		</div>
	);
};

export default PokeGrid;
