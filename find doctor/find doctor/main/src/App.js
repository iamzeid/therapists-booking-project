

import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch initial data and handle potential errors
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/doctors');
        setDoctors(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle search input changes
  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);

    if (searchValue !== '') {
      // Case-insensitive search
      const normalizedSearchTerm = searchValue.toLowerCase();
      const filteredData = doctors.filter((item) => {
        // Search across multiple fields (adjust as needed)
        return (
          item.name.toLowerCase().includes(normalizedSearchTerm) ||
          item.location.toLowerCase().includes(normalizedSearchTerm) ||
          item.availability.toLowerCase().includes(normalizedSearchTerm) ||
          item.rating.toString().includes(normalizedSearchTerm) // Convert for string match
        );
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(doctors); // Clear results if search term is empty
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <div className='p-3 w-50 m-auto text-center'>
        <h2>Find Doctor</h2>
        <input
          icon='search'
          placeholder='Search by name, location...'
          onInput={(e) => handleSearch(e.target.value)}
          className='form-control'
        />
      </div>

      {isLoading ? (
        <p>Loading doctors...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="row">
          {/* Display filtered results (if search term) or all doctors (if empty) */}
          {searchTerm ? (
            filteredResults.length > 0 ? (
              filteredResults.map((item, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={item.img} 
                      className="card-img-top"
                      alt={`Dr. ${item.name}`}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Dr. {item.name}</h5>
                      <p className="card-text">Location: {item.location}</p>
                      <p className="card-text">Availability: {item.availability}</p>
                      <p className="card-text">Rating: {item.rating}</p>
                      <a href="#" className="btn btn-primary">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No doctors found matching your search.</p>
            )
          ) : (
            doctors.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  {/* Same card content as above */}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default App;
