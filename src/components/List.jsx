import { useEffect, useState } from "react";
import Character from "./Character.jsx";

const List = () => {
	const [loading, setLoading] = useState(true);
	const [character, setCharacter] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const data = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=40');
			const { results } = await data.json();

			const characterData = [];
			for (const pokemon of results) {
				const response = await fetch(pokemon.url);
				const characterDetails = await response.json();
				characterData.push(characterDetails);
			}
			setCharacter(characterData);
			setLoading(false);
		}
		fetchData();
	}, []);

	// console.log(character);

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : (
				<div className="grid grid-cols-3 gap-4 justify-center content-center mt-5">
					{character.map((character, index) => (
						<Character key={index} name={character.name} image={character.sprites.front_default} />
					))}
				</div>
			)}
		</div>
	);
};

export default List;
