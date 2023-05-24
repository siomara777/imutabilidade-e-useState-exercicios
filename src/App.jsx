import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

`
const PokemonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ChangePokemonButton = styled.button`
  background-color: #000000;
  color: white;
  padding: 0.5rem;
  margin: 0.8rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  box-shadow: 0 6px 30px -10px #000000;
`;

function App() {
  const listaPokemons = [
    {
      name: "Magikarp",
      type: "water",
      evolves: "Gyarados",
      weight: 10,
      color: "#ED7854",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/d/d1/0129Magikarp.png/250px-0129Magikarp.png",
      id: 129,
    },
    {
      name: "Gyarados",
      type: "water / flying",
      evolves: false,
      weight: 235,
      color: "#2A8CB3",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/b/bc/0130Gyarados.png/250px-0130Gyarados.png",
      id: 130,
    },
    {
      name: "Omanyte",
      type: "rock / water",
      evolves: "Omastar",
      weight: 7.5,
      color: "#B3AA85",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/e/e6/0138Omanyte.png/250px-0138Omanyte.png",
      id: 138,
    },
    {
      name: "Omastar",
      type: "water / flying",
      evolves: false,
      weight: 35,
      color: "#CEC29F",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/6/66/0139Omastar.png/250px-0139Omastar.png",
      id: 139,
    },
    {
      name: "Dratini",
      type: "dragon",
      evolves: "Dragonair",
      weight: 3.3,
      color: "#AFC4E6",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/a/ae/0147Dratini.png/250px-0147Dratini.png",
      id: 147,
    },
    {
      name: "Dragonair",
      type: "dragon",
      evolves: "Dragonite",
      weight: 16.5,
      color: "#729ECB",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/0/0d/0148Dragonair.png/250px-0148Dragonair.png",
      id: 148,
    },
    {
      name: "Dragonite",
      type: "dragon / flying",
      evolves: false,
      weight: 210,
      color: "#F2BC62",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/1/1c/0149Dragonite.png/250px-0149Dragonite.png",
      id: 149,
    },
    {
      name: "Vulpix",
      type: "fire",
      evolves: "Ninetales",
      weight: 9.9,
      color: "#C28771",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/0/06/0037Vulpix.png/250px-0037Vulpix.png",
      id: 37,
    },
    {
      name: "Ninetales",
      type: "fire",
      evolves: false,
      weight: 19.9,
      color: "#E0D299",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/3/3e/0038Ninetales.png/250px-0038Ninetales.png",
      id: 38,
    },
    {
      name: "Farfetch'd",
      type: "normal / flying",
      evolves: false,
      weight: 15,
      color: "#AA978E",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/9/99/0083Farfetch%27d.png/250px-0083Farfetch%27d.png",
      id: 83,
    },
    {
      name: "Cubone",
      type: "ground",
      evolves: 'Marowak',
      weight: 6.5,
      color: "#D4B87E",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/1/19/0104Cubone.png/250px-0104Cubone.png",
      id: 104,
    },
    {
      name: "Marowak",
      type: "ground",
      evolves: false,
      weight: 45,
      color: "#9F8155",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/a/a1/0105Marowak.png/250px-0105Marowak.png",
      id: 105,
    },
  ];

  const [pokemon, setPokemon] = useState(
    listaPokemons[Math.floor(Math.random() * listaPokemons.length)]
  );
  const [pokemon2, setPokemon2] = useState(
    listaPokemons[Math.floor(Math.random() * listaPokemons.length)]
  );

  const trocarPokemon = () => {
    setPokemon(listaPokemons[Math.floor(Math.random() * listaPokemons.length)]);
    setPokemon2(
      listaPokemons[Math.floor(Math.random() * listaPokemons.length)]
    );
  };

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        <ChangePokemonButton onClick={trocarPokemon}>
          Trocar Pokemon!
        </ChangePokemonButton>
        <PokemonsContainer>
          <PokemonCard
            pokemon={pokemon}
            evoluir={setPokemon}
            listaPokemons={listaPokemons}
          />
          <PokemonCard
            pokemon={pokemon2}
            evoluir={setPokemon2}
            listaPokemons={listaPokemons}
          />
        </PokemonsContainer>
      </FlexContainer>
    </>
  );
}

export default App;






  // Para fazer seus próximos pokemons, crie novos estados ultilizando como referência o objeto abaixo:
  /*{
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  }
  
  

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */
{/* <PokemonCard /> */}
      /* Crie aqui seus próximos pokemons! }
</FlexContainer>
</>
 
);
}

export default App;*/
