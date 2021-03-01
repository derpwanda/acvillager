import React from 'react'

const Pagination = ({ villagersPerPage, totalVillagers, paginate }) => {
    const pageNumbers = []

        for(let i = 1; i <= Math.ceil(totalVillagers / villagersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)}href="!#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
