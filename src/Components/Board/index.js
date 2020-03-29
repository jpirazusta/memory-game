import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import './styles.css';
import shuffle from '../../helpers';

const json1 = [
  {
    id: 0,
    content: "Algoritmo"
  },
  {
    id: 1,
    content: "Secuencia de pasos"
  }
];

const json2 = [
  {
    id: 2,
    content: "Programar"
  },
  {
    id: 3,
    content: "Escribir en un lenguaje que la computadora entienda"
  }
];

class Board extends React.Component {
  constructor(props) {
    super(props);
    const pairs = [];
    const selected = [];
    const numberOfPairs = parseInt(props.numberOfPairs);
    for (let index = 0; index < numberOfPairs; index++) {
      pairs.push({
        chosen: false,
        discovered: false
      });
      selected.push(false);
    };
    for (let index = numberOfPairs; index < numberOfPairs * 2; index++) {
      selected.push(false);
    }
    this.state = {
      pairs,
      selected
    };
  }

  onChooseCard = (key, index) => {
    
  }

  render() {
    console.log("Board props:", this.props);
    const cards1 = [];
    const cards2 = [];
    for (let index = 0; index < parseInt(this.props.numberOfPairs); index++) {
      cards1.push(<Card
        key={json1[index].id} pair={index}
        pairChosen={this.state.pairs[index].chosen} pairDiscovered={this.state.pairs[index].discovered}
        selected={this.state.selected[index]}
        content={json1[index].content}
        onChoose={(key, pair) => this.onChooseCard(key, pair)}
        isTitle
      />);
      cards2.push(<Card
        key={json2[index].id} pair={index}
        pairChosen={this.state.pairs[index].chosen} pairDiscovered={this.state.pairs[index].discovered}
        selected={this.state.selected[index]}
        content={json2[index].content}
        onChoose={(key, pair) => this.onChooseCard(key, pair)}
        isTitle={false}
      />);
    }
    const cards = cards1.concat(cards2);
    shuffle(cards);
    return (
      <div className="board-container" >
        {cards}
        <button onClick={() => this.props.onIncrementStep()}>Volver</button>
      </div>
    );
  }
}

Board.propTypes = {
  finalNumber: PropTypes.string,
  numberOfPairs: PropTypes.string,
  onIncrementStep: PropTypes.func
}

export default Board;
