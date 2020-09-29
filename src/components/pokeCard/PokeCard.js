import React from "react";
import "./PokeCard.scss";
import ProgressBar from "../progressBar/ProgressBar";
const PokeCard = ({ pokeData, data, setPokeData }) => {
	const deletePokemonHandler = () => {
		setPokeData(pokeData.filter((element) => element.id !== data.id));
	};
	return (
		<div className={`poke-card poke-card-${data.types[0].type.name}`}>
			<div className="poke-card-img">
				<img
					src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`}
					className="poke-card-img-poke"
					alt=""
				/>
			</div>
			<i onClick={deletePokemonHandler} class="fas fa-minus-circle"></i>

			{/* {console.log(data.types[0].type.name)} */}
			<div className="poke-card-info">
				<p className="poke-card-info-name">{data.name}</p>
				<div className="poke-card-info-type">
					{data.types.map((typ, index) => (
						<p className="poke-card-info-type-bubble" key={index}>
							{typ.type.name}
						</p>
					))}
				</div>
				<h5 className="poke-card-info-data">Exp -</h5>
				<ProgressBar
					completed={data.base_experience}
					bgcolor={"rgba(0, 0, 0, 0.7)"}
				/>
				<h5 className="poke-card-info-data">Height -</h5>
				<ProgressBar completed={data.height} bgcolor={"rgba(0, 0, 0, 0.7)"} />
				<h5 className="poke-card-info-data">Weight - </h5>
				<ProgressBar completed={data.weight} bgcolor={"rgba(0, 0, 0, 0.7)"} />
				{/* {console.log(data.weight)} */}
			</div>
		</div>
	);
};

export default PokeCard;
