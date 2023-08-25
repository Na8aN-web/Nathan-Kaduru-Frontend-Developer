import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SearchForm from "./components/SearchForm";
import DataGrid from "./components/DataGrid";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";

function App() {
  const [allRockets, setAllRockets] = useState([]);
  const [filteredRockets, setFilteredRockets] = useState([]);
  const [searchFilters, setSearchFilters] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;

  // Fetch all rockets on initial load
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.spacexdata.com/v3/rockets?limit=${itemsPerPage}&offset=0`
      )
      .then((response) => {
        setAllRockets(response.data);
        setFilteredRockets(response.data);
        setTotalItems(response.headers["spacex-api-count"]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    const offset = (pageNumber - 1) * itemsPerPage;
    setCurrentPage(pageNumber);
    setIsLoading(true);
    axios
      .get(
        `https://api.spacexdata.com/v3/rockets?limit=${itemsPerPage}&offset=${offset}`
      )
      .then((response) => {
        setFilteredRockets(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //search filters
  useEffect(() => {
    const filtered = allRockets.filter((rocket) => {
      const countryMatch =
        !searchFilters.country ||
        rocket.country
          .toLowerCase()
          .includes(searchFilters.country.toLowerCase());
      const rocketNameMatch =
        !searchFilters.rocket_name ||
        rocket.rocket_name
          .toLowerCase()
          .includes(searchFilters.rocket_name.toLowerCase());
      const companyMatch =
        !searchFilters.company ||
        rocket.company
          .toLowerCase()
          .includes(searchFilters.company.toLowerCase());

      return countryMatch && rocketNameMatch && companyMatch;
    });

    setFilteredRockets(filtered);
  }, [allRockets, searchFilters]);

  //search functionality
  const handleSearch = (filters) => {
    setIsLoading(true);
    setTimeout(() => {
      setSearchFilters(filters);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <Navbar />
      <Banner />
      <SearchForm onSearch={handleSearch} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <DataGrid data={filteredRockets} />
          <Pagination
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}

export default App;
