// import React, { useState, useEffect } from "react";
// import { auth, provider } from "./config";
// import { signInWithPopup, signOut } from "firebase/auth";
// import * as Icon from "react-bootstrap-icons";

// function Login() {
//   const [value, setValue] = useState(null);
//   const handleClick = () => {
//     signInWithPopup(auth, provider).then((data) => {
//       setValue(data.user.email);
//       localStorage.setItem("email", data.user.email);
//     });
//   };

//   const handleSignOut = () => {
//     signOut(auth);
//     localStorage.removeItem("email");
//     setValue(null);
//   };

//   useEffect(() => {
//     setValue(localStorage.getItem("email"));
//   });

//   return (
//     <>
//       {value ? (
//         <div>
//           <h2>Welcome {value}</h2>
//           <p>You are now signed in!</p>

//           <h3>Do you want to sign out?</h3>
//           <button className="btn btn-danger" onClick={handleSignOut}>
//             <Icon.BoxArrowRight /> Sign Out
//           </button>
//           <button
//             className="btn btn-primary"
//             onClick={() => (window.location.href = "/")}
//           >
//             <Icon.ArrowLeft /> Go Back
//           </button>
//         </div>
//       ) : (
//         <button
//           className="btn btn-primary mt-2 mb-2 w-100"
//           onClick={handleClick}
//         >
//           <Icon.Google /> Sign In With Google
//         </button>
//       )}
//     </>
//   );
// }

// export default Login;

// SignIn.js
import React, { useState, useEffect } from "react";
import { auth, provider } from "./config"; // Ensure these are correctly imported from your Firebase config file
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/"); // Redirects to Home if user is detected
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }
    
    try {
      await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        const tokenRespone = userCredential._tokenResponse;
        localStorage.setItem("user", JSON.stringify(user)); // Store user in local storage
        localStorage.setItem("token", JSON.stringify(tokenRespone)); // Store token in local storage
        navigate("/"); // Navigate to home if sign-in is successful
      });
    } catch (error) {
      setError(error.message); // Stay on the login page and show error
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/"); // Navigate to home if Google sign-in is successful
    } catch (error) {
      setError(error.message); // Stay on the login page and show error
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Sign In with Email</h2>
      {error && <p className="alert alert-danger text-danger mt-2 text-center">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Sign In
        </button>
      </form>
      <hr />
      <button onClick={signInWithGoogle} className="btn btn-danger mt-3 w-100">
        <Icon.Google /> Continue with Google
      </button>
    </div>
  );
}

export default Login;
