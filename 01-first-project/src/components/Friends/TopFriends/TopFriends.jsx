import React from 'react';
import styles from './TopFriends.module.css'

function TopFriends(props) {

    const {
        friendsPage: {
            topThree
        }
    } = props;
    return (
        <div>
            <h3>Top 3 friends:</h3>
            <div className={styles.friendContainer}>
                {topThree.map(({id, name, logo}) => <div key={id} className={styles.friend}>{logo} {name}</div>)}
            </div>
        </div>
    );
}

export default TopFriends;