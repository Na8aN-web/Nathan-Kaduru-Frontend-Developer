import React from 'react';

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }, (_, index) => (
        <button
          key={index}
          className={`mx-2 px-4 py-2 rounded-md font-mont mb-8 ${
            currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
