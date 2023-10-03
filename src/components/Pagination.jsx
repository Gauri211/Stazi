import React from 'react';
// import {Link} from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Pagination = ({postsPerPage, paginate}) => {
    const pageNos = [];

    for(let i = 1; i <=10; i++) {
        pageNos.push(i);
    }
    return (
       <nav>
            <div className="flex justify-end">
                {pageNos.map(number => {
                    return (
                    <div key={number} className="m-1">
                        <a className="bg-white rounded pr-2 pl-2 p-1 cursor-pointer" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </div>
                    )
                })}
            </div>
        </nav>
        )
}

export default Pagination;