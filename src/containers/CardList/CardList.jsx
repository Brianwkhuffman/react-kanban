import React, { Component } from 'react';
import Card from '../../components/Card'

import styles from './CardList.module.css'

class CardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
        this.handleKeyPress = this.handleKeyPress.bind(this);
    };

    handleKeyPress(e) {
        this.setState({ searchTerm: e.target.value })
    };

    render() {
        return (
            <>
                <div>
                    <input
                        className={styles.search}
                        type='text'
                        value={this.state.searchTerm} placeholder='Search cards...'
                        onChange={this.handleKeyPress}
                    />
                </div>

                <ul>
                    {
                        this.props.cards
                            .filter((card) => {
                                const { searchTerm } = this.state;
                                return card.title.toLowerCase().includes(searchTerm.toLowerCase())
                            })
                            .map((card) => {
                                return (
                                    <Card
                                        key={card.title}
                                        title={card.title}
                                        body={card.body}
                                        priorities={card.priorities}
                                        statuses={card.statuses}
                                        created_by={card.created_by}
                                        assigned_to={card.assigned_to}
                                    />
                                )
                            })
                    }
                </ul>
            </>
        )
    }
}
export default CardList;