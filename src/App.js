import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { TherapistProfile } from "./Components/TherapistProfile";
import Search from "./Components/Search";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import BookingComponent from "./BookingComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./Success";
import Cancel from "./Cancel";

const stripePromise = loadStripe(
  "pk_test_51Om0ZiBPXRYAP6UnkFREwdkub6ktho8pkLyFv1EZNBZ4u6EfoBMtO6gcA8IN34iTFMtbgMje2NsY3Xb2RgKg7e1d002uH8ouJy"
);

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Search /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Home /> */}
      {/* <TherapistProfile id={1} /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Elements stripe={stripePromise}>
                <BookingComponent />
              </Elements>
            }
          />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
