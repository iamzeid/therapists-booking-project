import React, { useState, useEffect } from "react";
import { Stars } from "./TherapistProfile";

const TherapistSearch = () => {
  const [therapists, setTherapists] = useState([]);
  useEffect(() => {
    // Fetch therapists from API
    fetch("http://localhost:5000/therapists")
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
      <div className="container">
        <div className="col">
          <h2>Therapist Search</h2>
          <div className="row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={searchCriteria.name}
              onChange={handleInputChange}
              className="form-control col m-2"
            />
          </div>
          <div className="row">
            <input
              type="text"
              name="specialty"
              placeholder="Specialty"
              value={searchCriteria.specialty}
              onChange={handleInputChange}
              className="form-control col m-2"
            />
            <input
              type="number"
              name="rating"
              placeholder="Min Rating"
              value={searchCriteria.rating}
              onChange={handleInputChange}
              className="form-control col m-2"
            />
            <input
              type="text"
              name="interests"
              placeholder="Interests"
              value={searchCriteria.interests}
              onChange={handleInputChange}
              className="form-control col m-2"
            />
            <input
              type="text"
              name="availability"
              placeholder="Availability"
              value={searchCriteria.availability}
              onChange={handleInputChange}
              className="form-control col m-2"
            />
            <input
              type="text"
              name="district"
              placeholder="District"
              value={searchCriteria.district}
              onChange={handleInputChange}
              className="form-control col m-2"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={searchCriteria.city}
              onChange={handleInputChange}
              className="form-control col m-2"
            />
            <input
              type="number"
              name="price"
              placeholder="Max Price"
              value={searchCriteria.price}
              onChange={handleInputChange}
              className="form-control col m-2"
            />
          </div>
          <div className="row">
            <button
              className="btn btn-success w-100 col mx-2 mt-3 mb-5"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {searchResults?.map((therapist) => (
            <div className="col-md-4 mb-3 card-group" key={therapist.id}>
              <div className="card">
                <img
                  src={
                    "https://placehold.co/150/orange/white?text=" +
                    therapist.name[4]
                  }
                  className="card-img-top img-fluid rounded-circle mt-3 mx-auto w-50"
                  alt={therapist.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{therapist.name}</h5>
                  <p className="card-text">{therapist.specialty}</p>
                  <p className="card-text">
                    <Stars rating={therapist.rating} />
                  </p>
                  <p className="card-text">
                    {therapist.interests?.map((interest) => (
                      <span key={interest} className="badge bg-success me-1">
                        {interest}
                      </span>
                    ))}
                  </p>
                  <p className="card-text">
                    {therapist.availability?.map((slot) => (
                      <span key={slot.day} className="badge bg-info me-1">
                        {slot.day}
                      </span>
                    ))}
                  </p>
                  <p className="card-text">
                    {therapist.location.city}, {therapist.location.district}
                  </p>
                  <p className="card-text">
                    <span className="badge bg-warning m-1">
                      {therapist.price} EGP
                    </span>
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href={`/therapists/${therapist.id}`}
                    className="btn btn-success w-100"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TherapistSearch;
