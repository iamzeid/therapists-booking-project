import React, { useState } from "react";

const DateTimePicker = ({ availability }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [error, setError] = useState("");

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
      console.log("Date and time are valid:", selectedDate, selectedTime);
      // Add your logic here for handling the valid date and time
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

export default DateTimePicker;
