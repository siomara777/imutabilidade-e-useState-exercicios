import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'

const PokemonCard = ({ pokemon, evoluir, listaPokemons }) => {
  
  const { name, type, evolves, weight, color, image} = pokemon;

  const evoluirPokemon = () => {
    if (evolves) {
      const evolucaoPokemon = listaPokemons.filter((evolucao) => {
        return evolucao.name === evolves;
      });
      evoluir(evolucaoPokemon[0]);
    } else {
      alert(`${name} não tem evolução!`);
    }
  };

  return (
    <Card color={color}>
      <img src={image} alt={`Pokemon`} />
      <PokemonName>{name}</PokemonName>
      <PokemonType>{type}</PokemonType>
      <p>{weight}kg</p>

      <EvolveButton onClick={evoluirPokemon}>Evoluir!</EvolveButton>
    </Card>
  );
};

export default PokemonCard;



// const PokemonCard = (props) => {

//     const evoluirPokemon = () => {
//         console.log("Cliquei no botão de evoluir")
//     }
    
//   return (
//     <Card color={""}>
//         <img src={""} alt={`Pokemon`}/>
//         <PokemonName>{}</PokemonName>
//         <PokemonType>{}</PokemonType>
//         <p>{}kg</p>

//         <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
//     </Card>
//   )
// }

// export default PokemonCard