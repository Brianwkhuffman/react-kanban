import React from 'react';

import styles from './Card.module.css'

const Card = function (props) {
    return (
        <div className={styles.card}>
            <span className={styles.title}>
                {props.title}
            </span>
            <br></br>
            <span>
                {props.body}
            </span>
            <br></br>
            <span>
                Priority: {props.priorities}
            </span>
            <br></br>
            <span>
                Status: {props.statuses}
            </span>
            <br></br>
            <span>
                Created by: {props.created_by}
            </span>
            <br></br>
            <span>
                Assigned to: {props.assigned_to}
            </span>
        </div>
    )
}

export default Card;