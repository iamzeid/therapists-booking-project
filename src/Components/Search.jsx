import React, { useState, useEffect } from "react";

const TherapistSearch = () => {
  const [therapists, setTherapists] = useState([]);
  useEffect(() => {
    // Fetch therapists from API
    fetch("http://localhost:3000/therapists")
      .then((response) => response.json())
      .then((data) => {
        // Sort therapists by rating in descending order
        const sortedTherapists = data.sort((a, b) => b.rating - a.rating);
        // Set the top therapists to the searchResults state
        setSearchResults(sortedTherapists);
        // Set all therapists to the therapists state
        setTherapists(sortedTherapists);
      });
  }, []);
  const [searchCriteria, setSearchCriteria] = useState({
    name: "",
    specialty: "",
    rating: "",
    interests: "",
    availability: "",
    district: "",
    city: "",
    price: "",
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleSearch = () => {
    // Filter therapists based on search criteria
    const filteredTherapists = therapists?.filter((therapist) => {
      return (
        (therapist.name
          .toLowerCase()
          .includes(searchCriteria.name.toLowerCase()) ||
          searchCriteria.name === "") &&
        (therapist.specialty
          .toLowerCase()
          .includes(searchCriteria.specialty.toLowerCase()) ||
          searchCriteria.specialty === "") &&
        (therapist.rating >= parseFloat(searchCriteria.rating) ||
          searchCriteria.rating === "") &&
        (therapist.interests.includes(searchCriteria.interests) ||
          searchCriteria.interests === "") &&
        (therapist.availability.some(
          (slot) => slot.day === searchCriteria.availability
        ) ||
          searchCriteria.availability === "") &&
        (therapist.location.district.toLowerCase() ===
          searchCriteria.district.toLowerCase() ||
          searchCriteria.district === "") &&
        (therapist.location.city.toLowerCase() ===
          searchCriteria.city.toLowerCase() ||
          searchCriteria.city === "") &&
        (therapist.price.some(
          (option) => option.amount <= parseFloat(searchCriteria.price)
        ) ||
          searchCriteria.price === "")
      );
    });

    setSearchResults(filteredTherapists);
  };

  return (
    <div>
      <h2>Therapist Search</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={searchCriteria.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="specialty"
          placeholder="Specialty"
          value={searchCriteria.specialty}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Minimum Rating"
          value={searchCriteria.rating}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="interests"
          placeholder="Interests"
          value={searchCriteria.interests}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="availability"
          placeholder="Availability"
          value={searchCriteria.availability}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="district"
          placeholder="District"
          value={searchCriteria.district}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={searchCriteria.city}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Maximum Price"
          value={searchCriteria.price}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {searchResults?.map((therapist) => (
          <div key={therapist.id}>
            <h3>{therapist.name}</h3>
            <p>Specialty: {therapist.specialty}</p>
            <p>Rating: {therapist.rating}</p>
            <p>Interests: {therapist.interests.join(", ")}</p>
            <p>
              Availability:{" "}
              {therapist.availability
                ?.map((slot) => `${slot.day} ${slot.from}-${slot.to}`)
                .join(", ")}
            </p>
            <p>District: {therapist.location.district}</p>
            <p>City: {therapist.location.city}</p>
            <p>
              Price:{" "}
              {therapist.price
                ?.map(
                  (option) => `$${option.amount} for ${option.duration} minutes`
                )
                .join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TherapistSearch;
