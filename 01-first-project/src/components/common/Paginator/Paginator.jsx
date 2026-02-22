import React, {useState} from 'react';
import styles from './Paginator.module.css'
import {Pagination} from '@mui/material';

function Paginator(props) {

    const {
        portionSize, //размер порции
        currentPage, //текущая страница
    } = props;
    const [portionNumber, setPortionNumber] = useState(() => {
        return Math.ceil(currentPage / portionSize);
    });

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const portionCount = Math.ceil(pagesCount / portionSize); // количество порций

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const changePage = (page) => {
        props.onPageChanged(page)

        const newPortionNumber = Math.ceil(page / portionSize);
        setPortionNumber(newPortionNumber)
    };

    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const onClickLeftButton = () => {
        if (portionNumber > 1) {
            setPortionNumber(portionNumber - 1);
        }
    };
    const onClickRightButton = () => {
        if (portionNumber < portionCount) {
            setPortionNumber(portionNumber + 1);
        }
    };

    return (
        <>
            <div className={styles.paginationContainer}>
                <Pagination count={pagesCount}
                            variant="outlined"
                            shape="rounded"
                            color="secondary"
                            page={props.currentPage}
                            onChange={(event, page) => {
                                props.onPageChanged(page)
                            }}
                />
                {portionNumber > 1 && <button onClick={onClickLeftButton}>{"⬅"}</button>}
                {pages.filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber).map(page => (
                    <button className={props.currentPage === page ? styles.currentPage : ''}
                            key={page}
                            onClick={() => changePage(page)}
                    >
                        {page}
                    </button>
                ))}
                {portionNumber < portionCount && <button onClick={onClickRightButton}>{"➡"}</button>}
            </div>
        </>
    );
}

export default Paginator;