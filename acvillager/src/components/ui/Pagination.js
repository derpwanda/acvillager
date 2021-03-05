import React from 'react'
import './Pagination'

const Pagination = ({ villagersPerPage, totalVillagers, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalVillagers / villagersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <div className="page-table">
                <ul className="page-list">
                    {pageNumbers.map(number => (
                        <li className="page" key={number}>
                            <a onClick={() => paginate(number)} href="!#">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Pagination
