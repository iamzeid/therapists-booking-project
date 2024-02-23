import React, { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
import DateTimePicker from "./DateTimePicker";

const Stars = ({ rating }) => {
  const [whole, part] = [Math.floor(rating), rating % 1];

  const calcStars = (whole, part) => {
    let stars = [];

    for (let i = 0; i < whole; i++) {
      stars.push(<Icon.StarFill key={i} color="orange" size={20} />);
    }

    if (part > 0) {
      stars.push(
        <Icon.StarFill
          key={whole}
          color="orange"
          size={20}
          style={{
            clipPath: `polygon(0 0, ${part * 100}% 0, ${
              part * 100
            }% 100%, 0 100%)`,
          }}
        />
      );
    }
    return stars;
  };

  return <div>{calcStars(whole, part)}</div>;
};

const Info = ({ info }) => {
  return (
    <div>
      <div className="card-text p-4">
        <h6>
          <Icon.PersonFill /> About {info.name}:
        </h6>
        <p>{info.bio}</p>
        <h6>
          <Icon.BackpackFill /> Education:
        </h6>
        <p>{info.education}</p>
        <h6>
          <Icon.BriefcaseFill /> Experience:
        </h6>
        <p>{info.experience}</p>
        <h6>
          <Icon.Calendar2EventFill /> Availability:
        </h6>
        <p>
          {info.availability?.map((day, index) => (
            <span key={index}>
              <strong>{day.day}</strong>: {day.from} - {day.to}
              <br />
            </span>
          ))}
        </p>
        <h6>
          <Icon.GeoAltFill /> Location:
        </h6>
        <p>
          {info.location?.district}, {info.location?.city}
        </p>
        <h6>
          <Icon.CashStack /> Price:
        </h6>
        <p>
          {info.price?.map((price, index) => (
            <span key={index}>
              {price.amount} EGP for {price.duration} minutes session
              <br />
            </span>
          ))}
        </p>
        <h6>
          <Icon.HeartFill /> Interests:
        </h6>
        <p>
          {info.interests?.map((interest, index) => (
            <span key={index} className="badge bg-success me-1">
              <a href="#" className="text-white text-decoration-none">
                {interest}
              </a>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

const Reviews = ({ info }) => {
  return (
    <div>
      {info.reviews?.map((review, index) => (
        <div key={index} className="card-text p-4">
          <h6>
            <Icon.ChatLeftFill /> {review.userName}:
          </h6>
          <p>
            <Stars rating={review.rating} /> ({review.rating} stars)
            <br />
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

const Rating = ({ info }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [reviewText, setReviewText] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleReviewChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedValue && reviewText) {
      const newReview = {
        userId: info.userId,
        userName: info.userName,
        therapistId: info.id,
        rating: selectedValue,
        comment: reviewText,
      };

      fetch("http://localhost:3000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      fetch(`http://localhost:3000/therapists/${info.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating: (info.rating + parseInt(selectedValue)) / 2,
          reviewsCount: info.reviewsCount + 1,
        }),
      });
    }
  };

  return (
    <div className="m-2">
      <strong>Rate {info.name}:</strong>
      <textarea
        className="form-control mt-2"
        placeholder="Write a review"
        rows="3"
        onChange={handleReviewChange}
      ></textarea>
      <strong>How many stars would you give {info.name}? (1-5 stars)</strong>
      <div className="btn-group mt-2" role="group">
        {[1, 2, 3, 4, 5].map((value) => (
          <div className="form-check" key={value}>
            <input
              type="radio"
              className="btn-check"
              name="options"
              id={`option${value}`}
              value={value}
              autoComplete="off"
              checked={selectedValue === value.toString()}
              onChange={handleRadioChange}
            />
            <label
              className="btn btn-outline-success"
              htmlFor={`option${value}`}
            >
              {value}
            </label>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="btn btn-success w-100 mt-2"
        onClick={handleSubmit}
      >
        Submit review
      </button>
    </div>
  );
};

const TherapistProfile = ({ id }) => {
  const [therapist, setTherapist] = useState({});
  const [reviews, setReviews] = useState([]);

  // 2 api calls to get the therapist and the reviews
  useEffect(() => {
    fetch(`http://localhost:3000/therapists/${id}`)
      .then((response) => response.json())
      .then((data) => setTherapist(data));

    fetch(`http://localhost:3000/reviews`)
      .then((response) => response.json())
      .then((data) => {
        const filteredReviews = data.filter(
          (review) => review.therapistId === id
        );
        setReviews(filteredReviews);
      });
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <img
            src="https://placehold.co/150/orange/white?text=J"
            alt={therapist.name}
            className="rounded-circle mx-auto d-block mb-3"
          />
          <h5 className="card-title text-center">{therapist.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted text-center">
            {therapist.specialty}
          </h6>
          <p className="card-text text-center">
            <Stars rating={therapist.rating} />
          </p>
          <p className="card-text text-center">
            <small className="text-muted">
              {therapist.rating} ({therapist.reviewsCount} reviews)
            </small>
          </p>

          <Info
            info={{
              name: therapist.name,
              bio: therapist.bio,
              education: therapist.education,
              experience: therapist.experience,
              availability: therapist.availability,
              location: therapist.location,
              price: therapist.price,
              interests: therapist.interests,
            }}
          />

          <DateTimePicker availability={therapist.availability} />

          <Reviews
            info={{
              name: therapist.name,
              reviews: reviews,
            }}
          />
          <Rating
            info={{
              userId: 1,
              userName: "John Doe",
              id: therapist.id,
              name: therapist.name,
              rating: therapist.rating,
              comment: therapist.comment,
              reviewsCount: therapist.reviewsCount,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TherapistProfile;
