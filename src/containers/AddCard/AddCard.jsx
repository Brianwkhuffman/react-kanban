import React, { Component } from 'react';

import styles from './AddCard.module.css'

class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleInput: '',
            bodyInput: '',
            priorityInput: '',
            statusInput: '',
            createdByInput: '',
            assignedToInput: '',
        }
    }

    handleTitleInput = (e) => {
        const { value } = e.target
        this.setState({ titleInput: value })
    }
    handleBodyInput = (e) => {
        const { value } = e.target
        this.setState({ bodyInput: value })
    }
    handlePriorityInput = (e) => {
        const { value } = e.target
        this.setState({ priorityInput: value })
    }
    handleStatusInput = (e) => {
        const { value } = e.target
        this.setState({ statusInput: value })
    }
    handleCreateInput = (e) => {
        const { value } = e.target
        this.setState({ createdByInput: value })
    }
    handleAssignedInput = (e) => {
        const { value } = e.target
        this.setState({ assignedToInput: value })
    }
    handleSubmitCard = () => {
        const { titleInput, bodyInput, priorityInput, statusInput, createdByInput, assignedToInput } = this.state;

        this.props.addCard({ title: titleInput, body: bodyInput, priorities: priorityInput, status: statusInput, created_by: createdByInput, assigned_to: assignedToInput });

        this.setState({
            titleInput: '',
            bodyInput: '',
            priorityInput: '',
            statusInput: '',
            createdByInput: '',
            assignedToInput: '',
        });
    }

    render() {
        return (
            <div className={styles.cardField}>
                <h1 className={styles.header}>Add New Card</h1>

                <div>
                    <input
                        type="text"
                        placeholder='Title'
                        value={this.state.titleInput}
                        onChange={this.handleTitleInput}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Body'
                        value={this.state.bodyInput}
                        onChange={this.handleBodyInput}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Priority'
                        value={this.state.priorityInput}
                        onChange={this.handlePriorityInput}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Status'
                        value={this.state.statusInput}
                        onChange={this.handleStatusInput}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Created By'
                        value={this.state.createdByInput} onChange={this.handleCreateInput}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder='Assigned To'
                        value={this.state.assignedToInput}
                        onChange={this.handleAssignedInput}
                    />
                </div>
                <div>
                    <input type="submit" onClick={this.handleSubmitCard} />
                </div>
            </div>
        );
    }
}

export default AddCard;