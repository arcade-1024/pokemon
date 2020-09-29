import React from "react";
import "./Search.scss";
const Search = ({ text, setText, pokeData, setPokeData }) => {
	const onChange = (q) => {
		console.log(text);
		setText(q);
		setPokeData(pokeData.filter((ele) => ele.name.includes(`${text}`)));
	};
	return (
		<section className="search">
			<form>
				<input
					type="text"
					className="form-control"
					placeholder="Search Pokemon"
					autoFocus
					onChange={(e) => onChange(e.target.value.toLowerCase())}
				/>
			</form>
		</section>
	);
};

export default Search;
