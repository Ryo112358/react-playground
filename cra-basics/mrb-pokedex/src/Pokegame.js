import React, { Component } from 'react';
import './Pokegame.css';
import Pokedex from './Pokedex';

class Pokegame extends Component {
    static defaultProps = {
      pokemonList : [
          {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
          {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
          {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
          {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
          {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
          {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
          {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
          {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }
  
    pickRandCards(assignToHand, numCards) {
      for(let i=0; i<numCards; ++i) {
        let randIdx = Math.floor(Math.random() * this.props.pokemonList.length);
        assignToHand.push(this.props.pokemonList[randIdx]);
        this.props.pokemonList.splice(randIdx, 1);
      }
    }
    
    calcHandScore(pokeHand) {
        let score = 0;
        pokeHand.forEach(pokemon => { score += pokemon.base_experience });
        return score;
    }
  
    render() {
      let pokeHand1 = []; this.pickRandCards(pokeHand1, 4);
      let pokeHand2 = []; this.pickRandCards(pokeHand2, 4);

      let exp = [];
      exp.push(this.calcHandScore(pokeHand1));
      exp.push(pokeHand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0));
  
      return (
        <div className="Pokegame">
          <h2 className="Pokegame-title">Pokedex</h2>
          <Pokedex pokeHand={pokeHand1} exp={exp[0]} isWinner={exp[0]>exp[1]} />
          <Pokedex pokeHand={pokeHand2} exp={exp[1]} isWinner={exp[1]>exp[0]} />
        </div>
      );
    }
  }
  
  export default Pokegame;