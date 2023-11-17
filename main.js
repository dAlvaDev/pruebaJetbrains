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
    },
    {
        name: "Squirtle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        type: "Water"
    },
    {
        name: "Jigglypuff",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
        type: "Normal, Fairy"
    },
    {
        name: "Snorlax",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
        type: "Normal"
    },
    {
        name: "Gengar",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
        type: "Ghost, Poison"
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
    const pokemonList = document.querySelector('.pokemon-list');

    pokemonData.forEach(pokemon => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');

        const name = document.createElement('h2');
        name.classList.add('pokemon-name');
        name.textContent = pokemon.name;

        const image = document.createElement('img');
        image.classList.add('pokemon-image');
        image.src = pokemon.image;
        image.alt = pokemon.name;

        const type = document.createElement('p');
        type.classList.add('pokemon-type');
        type.textContent = `Type: ${pokemon.type}`;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(type);

        pokemonList.appendChild(card);
    });
};
