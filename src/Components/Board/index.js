import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import './styles.css';
import shuffle from '../../helpers';

class Board extends React.Component {
  constructor(props) {
    super(props);
    const pairs = [];
    const selected = [];
    const numberOfPairs = props.level === 'junior' || props.level === 'senior' ? 6 : 9;
    for (let index = 0; index < numberOfPairs; index++) {
      pairs.push({
        chosen: false,
        discovered: false,
      });
      selected.push(false);
    };
    for (let index = numberOfPairs; index < numberOfPairs * 2; index++) {
      selected.push(false);
    }
    this.state = {
      pairs,
      selected,
      cards: [],
    };
  }

  componentDidMount() {
    let cards = [];
    switch (this.props.level) {
    case 'junior':
      cards = require('../../data/junior.json');
      break;
    case 'semisenior':
      cards = require('../../data/semisenior.json');
      break;
    case 'senior':
      cards = require('../../data/senior.json');
      break;
    default:
      cards = require('../../data/junior.json');
    }
    shuffle(cards);
    this.setState({ cards });
  }

  isFirstCard() {
    let isFirstCard = true;
    let index = 0;
    while (isFirstCard && index < this.state.selected.length) {
      isFirstCard = isFirstCard && this.state.selected[index];
      index++;
    }
    return isFirstCard;
  }

  onChooseCard = (id, pair) => {
    if (this.state.selected[id]) { return; }
    const selected = this.state.selected.slice();
    selected[id] = true;
    if (!this.isFirstCard()) {
      if (this.state.pairs[pair].chosen) {
        // Acierto. Setear discovered.
      } else {
        // Fallo. Esperar 1 segundo y medio y dar vuelta y volver los chosen a false.
      }
    } else {
      // Setear a chosen el pair.
    }
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
            image={item.image}
            onChoose={(key, pair) => this.onChooseCard(key, pair)}
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
  onIncrementStep: PropTypes.func,
}

export default Board;
