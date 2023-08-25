import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [filters, setFilters] = useState({
    company: '',
    country: '',
    rocket_name: '',
  });

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <div className="flex flex-col md:flex-row gap-4 md:items-center">
        <input
          className="px-4 py-2 bg-white rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300 font-mont mb-4 md:mb-0"
          type="text"
          placeholder="Enter Rocket Name"
          value={filters.rocket_name}
          onChange={(e) => handleFilterChange('rocket_name', e.target.value)}
        />
        <input
          className="px-4 py-2 bg-white rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300 font-mont mb-4 md:mb-0"
          type="text"
          placeholder="Enter Company"
          value={filters.company}
          onChange={(e) => handleFilterChange('company', e.target.value)}
        />
        <input
          className="px-4 py-2 bg-white rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300 font-mont mb-4 md:mb-0"
          type="text"
          placeholder="Enter Country"
          value={filters.country}
          onChange={(e) => handleFilterChange('country', e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 font-mont focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
