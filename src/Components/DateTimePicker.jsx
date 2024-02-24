import React, { useEffect, useState } from 'react';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Om0ZiBPXRYAP6UnkFREwdkub6ktho8pkLyFv1EZNBZ4u6EfoBMtO6gcA8IN34iTFMtbgMje2NsY3Xb2RgKg7e1d002uH8ouJy');

const DateTimePicker = ({ availability, userId, therapistId }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [error, setError] = useState("");

  const stripe = useStripe();
  const [sessionId, setSessionId] = useState(null);

  const handleBookNow = async () => {
    try {
      const response = await fetch('http://localhost:3001/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          therapistId,
          userId
        }),
      });

      const session = await response.json();
      setSessionId(session.id);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    if (sessionId) {
      stripe.redirectToCheckout({
        sessionId: sessionId,
      }).then(result => {
        if (result.error) {
          console.error(result.error.message);
        }
      });
    }
  }, [sessionId, stripe]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate selected date and time
    const isValid = isValidDateTime(selectedDate, selectedTime);
    if (isValid) {
      setError("");
      // Book appointment
      handleBookNow();
    } else {
      setError("Invalid date or time");
    }
  };

  const isValidDateTime = (date, time) => {
    // Check if date is in the past
    const selectedDateTime = new Date(`${date}T${time}`);
    const now = new Date();
    if (selectedDateTime < now) {
      return false;
    }

    // Check if date is within available ranges
    const dayOfWeek = selectedDateTime.toLocaleDateString("en-US", {
      weekday: "short",
    });
    const availableRange = availability.find((item) => item.day === dayOfWeek);
    if (!availableRange) {
      return false;
    }

    const from = new Date(`1970-01-01T${availableRange.from}`);
    const to = new Date(`1970-01-01T${availableRange.to}`);
    if (selectedDateTime < from || selectedDateTime > to) {
      return false;
    }

    return true;
  };

  return (
    <form
      className="p-4 m-4 bg-light border rounded shadow-sm"
      onSubmit={handleSubmit}
    >
      <div>
        <label className="form-label" htmlFor="datePicker">
          Select Date:
        </label>
        <input
          type="date"
          id="datePicker"
          className="form-control"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <label className="form-label" htmlFor="timePicker">
          Select Time:
        </label>
        <input
          type="time"
          id="timePicker"
          className="form-control"
          value={selectedTime}
          onChange={handleTimeChange}
        />
      </div>
      {error && <p className="text-danger p-2">{error}</p>}
      <button className="btn btn-success w-100 mt-4" type="submit">
        Book
      </button>
    </form>
  );
};

const DateTimePickerWithStripe = (props) => (
  <Elements stripe={stripePromise}>
    <DateTimePicker {...props} />
  </Elements>
);

export default DateTimePickerWithStripe;
