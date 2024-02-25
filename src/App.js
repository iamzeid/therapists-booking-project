import Cancel from "./Components/Cancel";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Register from "./Components/Register";
import Search from "./Components/Search";
import Success from "./Components/Success";
import Error from "./Components/Error";
import Appointments from "./Components/Appointments";
import Profile from "./Components/Profile";
import { TherapistProfile } from "./Components/TherapistProfile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<> <Header /> <Landing /> <Footer /> </>} />
          <Route path="/login" element={<> <Header /> <Login /> <Footer /> </>} />
          <Route path="/logout" element={<> <Header /> <Logout /> <Footer /> </>} />.
          <Route path="/register" element={<> <Header /> <Register /> <Footer /> </>} />
          <Route path="/search" element={<> <Header /> <Search /> <Footer /> </>} />
          <Route path="/therapists/:id" element={<> <Header /> <TherapistProfile /> <Footer /> </>} />
          <Route path="/success" element={<> <Header /> <Success /> <Footer /> </>} />
          <Route path="/cancel" element={<> <Header /> <Cancel /> <Footer /> </>} />
          <Route path="/appointments" element={<> <Header /> <Appointments /> <Footer /> </>} />
          <Route path="/profile" element={<> <Header /> <Profile /> <Footer /> </>} />
          <Route path="*" element={<> <Header /> <Error /> <Footer /> </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
