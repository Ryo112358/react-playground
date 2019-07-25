import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
    static defaultProps = {
        id: 1,
        name : "Species",
        type : "None",
        exp : 10
    }

    convertToNDigit(number, desiredLength) {
        return ("0".repeat(Math.max(desiredLength - number.toString().length)) + number);
    }

    generatePokemonImageUrl(pokeid) {
        return "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + this.convertToNDigit(pokeid, 3) + ".png";
    }

    render() {
        return (
            <div className="Pokecard">
                <h3>{this.props.name}</h3>
                <img src={this.generatePokemonImageUrl(this.props.id)} alt="pokemon"></img>
                <p>Type: {this.props.type}</p>
                <p>EXP: {this.props.exp}</p>
            </div>
        );
    }
}

export default Pokecard;