
const Character = (character) => {
	return (
		<div className="border text-center rounded-lg">
			<h2 className={"text-xl text-white rounded-t-lg bg-amber-600"}>{character.name}</h2>
			<img src={character.image} alt={character.name} width="100%" />
		</div>
	);
};

export default Character;