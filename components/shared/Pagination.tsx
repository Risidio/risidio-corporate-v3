"use client"
import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface PaginationProps {
   totalItems: number;
   itemsPerPage: number;
   currentPage: number;
   onPageChange: (newPage: number) => void;
 }

 const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) => {
   const totalPages = Math.ceil(totalItems / itemsPerPage);
   const handlePageChange = (newPage: number) => {
     if (newPage >= 1 && newPage <= totalPages) {
        onPageChange(newPage);
     }
   };

   const renderPageNumbers = () => {
      const pageNumbers = [];
      pageNumbers.push(<li key={0}>
                           <button 
                             className="rounded-full p-3 border border-risidio-yellow"
                             onClick={() => handlePageChange(currentPage - 1)}> 
                             <FaChevronLeft color={` ${currentPage - 1 <= 0  ? "#f5e8c4" : "#f9b807"}`} />                     
                           </button>
                       </li> 
                     );
    
      for (let i = 1; i <= totalPages; i++) {
         pageNumbers.push( <li
            key={i} 
            className={`flex items-center justify-center px-4 h-10 leading-tight text-risidio-yellow hover:bg-gray-100 hover:text-orange-500
                      ${i === currentPage ? 'font-bold ' : ''} `}
              >
           <button onClick={() => handlePageChange(i)}>{i}</button>
        </li>);

      }
      pageNumbers.push(<li key={totalPages + 1}>
         <button 
            className="rounded-full p-3 border border-risidio-yellow"
            onClick={() => handlePageChange(currentPage + 1)}
            > 
            <FaChevronRight color={` ${currentPage + 1 > totalPages  ? "#f5e8c4" : "#f9b807"}`} />                     
           </button>
          </li> 
     )
     
      return pageNumbers;
    };
  
    return (
       <div className="pagination">
           <ul className="flex items-center -space-x-px h-10 text-base">
              {renderPageNumbers()}
           </ul>
       </div>
    );
  };
  
  export default Pagination;