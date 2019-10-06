import React, { Component } from 'react';
import styles from './App.module.css';

import AddCard from '../containers/AddCard'
import CardList from '../containers/CardList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          title: 'To do 1',
          body: 'Do this shit',
          priorities: 'Low',
          statuses: 2,
          created_by: 'Fucku',
          assigned_to: 'Fuckuuuuu'
        },
        {
          title: 'To do 2',
          body: 'Do more shit',
          priorities: 'Medium',
          statuses: 3,
          created_by: 'Fukyu',
          assigned_to: 'Fukkkkkyuuuuu'
        }
      ]
    }
  }

  addCard = ({ title, body, priorities, statuses, created_by, assigned_to }) => {
    const cards = this.state.cards.concat({ title, body, priorities, statuses, created_by, assigned_to });
    this.setState({ cards });
  }

  render() {
    return (
      <div className={styles.app}>
        <CardList cards={this.state.cards} />
        <AddCard addCard={this.addCard} />
      </div>
    );
  }
}

export default App;
