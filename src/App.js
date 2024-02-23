import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Search from "./Components/Search";
import TherapistProfile from "./Components/TherapistProfile";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      {/* <TherapistProfile id={1} /> */}
      {/* <Search /> */}
      <Footer />
    </div>
  );
}

export default App;
