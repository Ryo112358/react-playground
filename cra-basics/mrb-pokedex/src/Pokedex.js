import React, { Component } from "react";
import './Pokedex.css';
import Pokecard from "./Pokecard";

class Pokedex extends Component {

    render() {
        return (
            <div className="Pokedex">
                <h3 className={this.props.isWinner ? "Pokedex-winner" : "Pokedex-loser"}>
                    {this.props.isWinner ? 'You win!!!' : 'Welp X.x'}
                </h3>
                <p>Total experience: {this.props.exp}</p>
                <ul className="Pokedex-list">
                    { this.props.pokeHand.map( pokemon => 
                        <li key={pokemon.id}>
                            <Pokecard 
                                id={pokemon.id}
                                name={pokemon.name}
                                type={pokemon.type}
                                exp={pokemon.base_experience}
                            />
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Pokedex;