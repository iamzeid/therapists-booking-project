import React, { useEffect, useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';

const BookingComponent = () => {
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
          doctorId: '1',
        name: "Dr. John Doe",
        specialty: "Psychologist",
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

  return (
    <div>
      <h1>Book Now</h1>
      <button onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default BookingComponent;
