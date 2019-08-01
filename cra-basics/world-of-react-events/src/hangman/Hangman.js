import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import { occurrences } from './helpers';
import { randomWord } from './words';

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };

  constructor(props) {
    super(props);
    this.state = { 
      nWrong: 0, 
      guessed: new Set(), 
      answer: "placeholder", 
      nRemaining: 0 // Number of letters left to guess
    };

    this.resetGame = this.resetGame.bind(this);
    this.handleGuess = this.handleGuess.bind(this);
  }

  componentDidMount() {
    this.resetGame();
  }

  resetGame() {
    this.setState(st => {
      return {
        nWrong: 0,
        guessed: new Set(),
        answer: randomWord(),
      }
    });
    this.setState(st => {
      return { nRemaining: st.answer.length }
    });
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    const defeat = this.state.nWrong >= this.props.maxWrong;

    if(defeat) {
      return this.state.answer;
    } 
    else {
      return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_")
      );
    }
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => {
      let ltrCount = occurrences(st.answer, ltr);
      return {
        guessed: st.guessed.add(ltr),
        nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
        nRemaining: st.nRemaining - ltrCount
      }
    });
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        className="Hangman-letter-button"
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  genResetButton() {
    return (
      <button className="Hangman-reset-button" onClick={this.resetGame}>Play again?</button>
    );
  }

  genLowerRegion() {
    const victory = this.state.nRemaining === 0;
    const defeat = this.state.nWrong >= this.props.maxWrong;

    let region;
    if(victory) {
      region = 
      <div className="Hangman-gameOver">
        <p className="Hangman-winMsg">You win! ^.^</p>
        {this.genResetButton()}
      </div>;
    } 
    else {
      if(defeat) {
        region = 
        <div className="Hangman-gameOver">
          <p className="Hangman-loseMsg">Game Over X.x</p>
          {this.genResetButton()}
        </div>;
      } else {
        region = this.generateButtons();
      }
    }
    return region;
  }

  /** render: render game */
  render() {
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img 
          src={this.props.images[this.state.nWrong]} 
          width="150px" 
          alt={this.state.nWrong + " out of " + this.props.maxWrong} 
        />
        <p className='Hangman-guesscount'>Number wrong: {this.state.nWrong}</p>
        <p className='Hangman-word'>{this.guessedWord()}</p>
        <div className='Hangman-btns'>{this.genLowerRegion()}</div>
      </div>
    );
  }
}

export default Hangman;
