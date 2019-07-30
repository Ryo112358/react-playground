import React, { Component } from 'react';

class Coin extends Component {
  static defaultProps = {
    imgSrcHeads: "https://upload.wikimedia.org/wikipedia/commons/0/0a/George_Washington_Presidential_%241_Coin_obverse.png",
    imgSrcTails: "https://s3.amazonaws.com/ngccoin-production/us-coin-explorer/2053109-002rr_San_Fran_Goldr.jpg",
    sideHeads: true
  }

  display() {
    if(this.props.sideHeads)
      return this.props.imgSrcHeads;
    else
      return this.props.imgSrcTails;
  }

  render() {
    const imgSrc = this.display();

    return (
      <div className="Coin">
        <img 
          src={imgSrc} 
          alt={this.props.sideHeads ? 'heads' : 'tails'} 
          width="250px"
        />
      </div>
    );
  }
}

export default Coin;