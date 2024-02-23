import React from 'react'
import classnames from "classnames";
import "./pagination.scss";
import usePagination from './usePagination';

export default function Pagination(props) {
    const DOTS = "...";
    const {
        className,
        pageSize,   
        currentPage,
        totalCount,
        onPageChange
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        pageSize
    });

    console.log(paginationRange);

    if (currentPage === 0 || paginationRange.length < 2) {
        return;
    }

    const lastPage = paginationRange[paginationRange.length - 1];

    const onLeftClick = () => {
        onPageChange(currentPage - 1);
    }

    const onRightClick = () => {
        onPageChange(currentPage + 1);
    }

    return (
        <ul className={classnames('pagination-container', {[className]: className})}>
            <li className={classnames('pagination-item', {
                disabled: currentPage === 1
            })} onClick={onLeftClick}>
                <div className='arrow left'></div>
            </li>

            {
                paginationRange.map(pageNumber => {
                    if (pageNumber === DOTS) {
                        return ( <li className='pagination-item dots'>&#8230;</li>);
                    }

                    return (
                        <li className={classnames('pagination-item', {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                        >{pageNumber}</li>
                    )
                })
            }
           
            <li className={classnames('pagination-item', {
                disabled: currentPage === lastPage
            })} onClick={onRightClick}>
                <div className='arrow right'></div>
            </li>
        </ul>
    )
}
