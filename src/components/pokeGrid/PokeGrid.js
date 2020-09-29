import React from "react";
import "./PokeGrid.scss";
import PokeCard from "../pokeCard/PokeCard";
import Spinner from "../Spinner/Spinner";
const PokeGrid = ({ isLoading, pokeData, setPokeData }) => {
	return isLoading ? (
		<Spinner />
	) : (
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
