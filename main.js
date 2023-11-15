const pokemonData = [
    {
        name: "Pikachu",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        type: "Electric"
    },
    {
        name: "Bulbasaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        type: "Grass, Poison"
    },
    {
        name: "Charmander",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        type: "Fire"
    }
];

window.onload = function () {
    const pokemonCards = document.querySelectorAll('.pokemon-card');

    pokemonData.forEach((pokemon, index) => {
        const card = pokemonCards[index];
        card.querySelector('.pokemon-name').textContent = pokemon.name;
        card.querySelector('.pokemon-image').src = pokemon.image;
        card.querySelector('.pokemon-type').textContent = `Type: ${pokemon.type}`;
    });
};
