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
    content: "Programar"
  }
];

const json2 = [
  {
    id: 2,
    content: "Secuencia de pasos"
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
    //const numberOfPairs = this.state.level === 'junior' ? 6 : 8;
    const numberOfPairs = 2;
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
      selected,
      cards: []
    };
  }

  componentDidMount() {
    const content1 = [];
    const content2 = [];
    const numberOfPairs = 2;
    for (let index = 0; index < numberOfPairs; index++) {
      content1.push({
        id: json1[index].id,
        pair: index,
        content: json1[index].content,
        isTitle: true
      });
      content2.push({
        id: json2[index].id,
        pair: index,
        content: json2[index].content,
        isTitle: false
      });
    }
    const cards = content1.concat(content2);
    shuffle(cards);
    this.setState({ cards });
  }

  onChooseCard = (id, pair) => {
    const selected = this.state.selected.slice();
    selected[id] = true;
    this.setState({ selected });
  }

  render() {
    return (
      <div className="board-container" >
        {this.state.cards.map(item => (
          <Card
            key={item.id} id={item.id} pair={item.pair}
            pairChosen={this.state.pairs[item.pair].chosen}
            pairDiscovered={this.state.pairs[item.pair].discovered}
            selected={this.state.selected[item.id]}
            content={item.content}
            onChoose={(key, pair) => this.onChooseCard(key, pair)}
            isTitle={item.isTitle}
          />
        ))}
        <button onClick={() => this.props.onIncrementStep()}>Volver</button>
      </div>
    );
  }
}

Board.propTypes = {
  finalNumber: PropTypes.string,
  level: PropTypes.string,
  onIncrementStep: PropTypes.func
}

export default Board;
