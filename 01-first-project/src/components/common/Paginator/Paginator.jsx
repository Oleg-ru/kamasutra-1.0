import React from 'react';
import styles from './Paginator.module.css'

function Paginator(props) {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <>
            <div className={styles.paginationContainer}>
                {pages.map(page => (
                    <button className={props.currentPage === page ? styles.currentPage : ''}
                            key={page}
                            onClick={() => props.onPageChanged(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </>
    );
}

export default Paginator;