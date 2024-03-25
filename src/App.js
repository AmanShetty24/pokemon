import React, { useState } from 'react';
import PokemonCard from './Components/PokemonCard';
import Navbar from './Components/Navbar';
import './Components/Style.css';

import img1 from './image/img1.png';
import img2 from './image/img2.png';
import img3 from './image/img3.png';
import img4 from './image/img4.png';
import img5 from './image/img5.png';
import img6 from './image/img6.png';
import img7 from './image/img7.png';
import img8 from './image/img8.png';
import img9 from './image/img9.png';
import img10 from './image/img10.png';
import img11 from './image/img11.png';
import img12 from './image/img12.png';
import img13 from './image/img13.png';
import img14 from './image/img14.png';
import img15 from './image/img15.png';
import img16 from './image/img16.png';
import img17 from './image/img17.png';
import img18 from './image/img18.png';
import img19 from './image/img19.png';
import img20 from './image/img20.png';
import img21 from './image/img21.png';
import img22 from './image/img22.png';

const allPokemonData = [
  {
    name: 'Pikachu',
    image: img1,
    type: 'Electric',
    description: `
      - Pikachu is an Electric-type Pokemon known for its lightning-fast speed and powerful electrical attacks.
      - It evolves from Pichu when leveled up with high friendship and can further evolve into Raichu when exposed to a Thunder Stone.
    `,
  },
  {
    name: 'Charmander',
    image: img3,
    type: 'Fire',
    description: `
      - Charmander is a Fire-type Pokemon with a flame on its tail.
      - It evolves into Charmeleon at level 16 and later into Charizard starting at level 36.
      - Charizard is the final form of this evolutionary line and is a powerful Fire/Flying-type Pokemon.
    `,
  },
  {
    name: 'Bulbasaur',
    image: img4,
    type: 'Grass',
    description: `
      - Bulbasaur is a Grass/Poison-type Pokemon.
      - It is the first stage of its evolutionary line and can evolve into Ivysaur at level 16, and later into Venusaur at level 32.
      - Bulbasaur is known for the plant bulb on its back that grows into a large flower as it evolves.
    `,
  },
  {
    name: 'Squirtle',
    image: img5,
    type: 'Water',
    description: `
      - Squirtle is a Water-type Pokemon.
      - It is one of the three starter Pokemon in the Kanto region.
      - Squirtle evolves into Wartortle at level 16 and later into Blastoise at level 36, becoming a powerful Water-type Pokemon with powerful attacks.
    `,
  },
  {
    name: 'Togepi',
    image: img6,
    type: 'Fairy',
    description: `
      - Togepi is a small, Fairy-type Pokémon.
      - It has a round body that is mostly light yellow with a white stomach.
      - It has stubby arms and legs and a short, stubby tail.
      - On its forehead is a red and blue triangular pattern.
      - Togepi is known for its eggshell, which is white with red and blue shapes on it.
    `,
  },
  {
    name: 'Meowth',
    image: img7,
    type: 'Normal',
    description: `
      - Meowth is a Normal-type Pokemon known for its mischievous behavior and the ability to use the move Pay Day to earn extra money in battles.
      - It evolves into Persian starting at level 28, becoming a sleek and elegant Pokemon.
    `,
  },
  {
    name: 'Psyduck',
    image: img8,
    type: 'Water',
    description: `
      - Psyduck is a Water-type Pokemon known for its constant headaches, which can trigger its powerful psychic abilities.
      - It evolves into Golduck starting at level 33, becoming a formidable Water-type Pokemon with heightened psychic powers.
    `,
  },
  {
    name: 'Voltorb',
    image: img9,
    type: 'Electric',
    description: `
      - Machop is a Fighting-type Pokemon known for its impressive physical strength.
      - It evolves into Machoke starting at level 28 and later into Machamp when traded.
      - Machamp is a powerful Fighting-type Pokemon with four muscular arms.
    `,
  },
  {
    name: 'Geodude',
    image: img10,
    type: 'Rock',
    description: `
      - Geodude is a Rock/Ground-type Pokemon known for its rocky appearance and durability.
      - It evolves into Graveler starting at level 25 and later into Golem when traded.
      - Golem is a sturdy Rock/Ground-type Pokemon.
    `,
  },
  {
    name: 'Zapdos',
    image: img2,
    type: 'Electric',
    description: `
      - Zapdos is a Legendary Electric/Flying-type Pokemon.
      - It is one of the three Legendary Birds of Kanto and is known for its powerful Electric-type attacks.
      - Zapdos is said to appear during thunderstorms.
    `,
  },
  {
    name: 'Chimchar',
    image: img15,
    type: 'Fire',
    description: `
    - Chimchar is a Fire-type Pokemon that resembles a monkey.
    - It evolves into Monferno starting at level 14, and later into Infernape starting at level 36.
    - Infernape is a powerful Fire/Fighting-type Pokemon known for its speed and agility in battle.
  `,
},
{
  name: 'Clefairy',
  image: img13,
  type: 'Fairy',
  description: `
    - Clefairy is a Fairy-type Pokemon known for its gentle and whimsical nature.
    - It evolves from Cleffa when leveled up with high friendship and can further evolve into Clefable when exposed to a Moon Stone.
  `,
},
{
  name: 'Vulpix(Alolan)',
  image: img16,
  type: 'Ice',
  description: `
    - Vulpix is an Ice-type Pokemon and the Alolan form of Vulpix.
    - It evolves into Ninetales when exposed to a Fire Stone.
    - Ninetales is a majestic and mystical Pokemon with nine elegant tails and powerful Fire-type abilities.
  `,
},
{
  name: 'Gengar',
  image: img14,
  type: 'Ghost',
  description: `
    - Gengar is a Ghost/Poison-type Pokemon known for its mischievous behavior and its ability to hide in shadows.
    - It evolves from Haunter when traded and is the final form of Gastly.
  `,
},
{
  name: 'Kabuto',
  image: img18,
  type: 'Rock',
  description: `
    - Kabuto is a Rock/Water-type Pokemon known for its sturdy shell.
    - It evolves into Kabutops starting at level 40.
    - Kabutops is a swift and powerful Rock/Water-type Pokemon with razor-sharp claws.
  `,
},
{
  name: 'Munchlax',
  image: img22,
  type: 'Normal',
  description: `
    - Munchlax is a Normal-type Pokemon known for its insatiable appetite and its habit of storing food in its fur.
    - It evolves into Snorlax when leveled up with high friendship.
    - Snorlax is a massive and sleepy Normal-type Pokemon known for blocking paths and causing traffic jams when it sleeps in the middle of roads.
  `,
},
{
  name: 'Ekans',
  image: img21,
  type: 'Poison',
  description: `
    - Ekans is a Poison-type Pokemon known for its serpentine appearance and its ability to constrict its prey.
    - It evolves into Arbok starting at level 22.
    - Arbok is a fierce and intimidating Poison-type Pokemon with a hood resembling a cobra.
  `,
},
{
  name: 'Sandshrew',
  image: img20,
  type: 'Ground',
  description: `
    - Sandshrew is a Ground-type Pokemon known for its burrowing abilities and tough sand-covered skin.
    - It evolves into Sandslash starting at level 22.
    - Sandslash is a swift and agile Ground-type Pokemon.
  `,
},
{
  name: 'Oddish',
  image: img19,
  type: 'Grass',
  description: `
    - Oddish is a Grass/Poison-type Pokemon known for its round body and blue leaves.
    - It evolves into Gloom starting at level 21 and later into Vileplume when exposed to a Leaf Stone.
    - Vileplume is a powerful Grass/Poison-type Pokemon with vibrant petals.
  `,
},
{
  name: 'Rattata',
  image: img17,
  type: 'Normal',
  description: `
    - Rattata is a small and quick Normal-type Pokemon known for its sharp teeth and agility in battles.
    - It evolves into Raticate starting at level 20.
  `,
},
// Add descriptions for other Pokemon
];

const App = () => {
const [searchTerm, setSearchTerm] = useState('');
const [typeFilter, setTypeFilter] = useState('');

const handleSearch = (term) => {
  setSearchTerm(term);
};

const handleTypeFilter = (type) => {
  setTypeFilter(type);
};

const filteredPokemon = allPokemonData.filter(
  (pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (typeFilter === '' || pokemon.type === typeFilter)
);

return (
  <div className="app">
    <Navbar onSearch={handleSearch} onTypeFilter={handleTypeFilter} />

    <div className="pokemon-card-container">
      {filteredPokemon.map((pokemon, index) => (
        <PokemonCard key={index} {...pokemon} />
      ))}
    </div>
  </div>
);
};

export default App;

