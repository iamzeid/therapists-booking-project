// import React from "react";
// import { auth, provider } from "./config";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import * as Icon from "react-bootstrap-icons";

// const Register = () => {
//   const handleGoogleRegister = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         const { displayName, email, phoneNumber, photoURL, uid, refreshToken } =
//           result.user;

//         // Add user to json-server
//         fetch("http://localhost:5000/users", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             displayName,
//             email,
//             phoneNumber,
//             photoURL,
//             uid,
//             token,
//             refreshToken,
//           }),
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             console.log("Success:", data);
//             localStorage.setItem("displayName", displayName);
//             localStorage.setItem("email", email);
//             localStorage.setItem("phoneNumber", phoneNumber);
//             localStorage.setItem("photoURL", photoURL);
//             localStorage.setItem("uid", uid);
//             localStorage.setItem("token", token);
//             localStorage.setItem("refreshToken", refreshToken);
//             localStorage.setItem("id", data.id);
//             // window.location.href = "/";
//           })
//           .catch((error) => {
//             // Replace .error() with .catch()
//             console.error("Error:", error);
//           });
//       })
//       .catch((error) => {
//         // Add .catch() to handle errors in the promise chain
//         console.log(error);
//       });
//   };

//   return (
//     <button
//       className="btn btn-primary w-100"
//       type="button"
//       onClick={handleGoogleRegister}
//     >
//       <Icon.Google /> Register with Google
//     </button>
//   );
// };

// export default Register;

// Register.js
import React, { useState } from "react";
import { auth } from "./config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }
    
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const tokenRespone = userCredential._tokenResponse;
          localStorage.setItem("user", JSON.stringify(user)); // Store user in local storage
          localStorage.setItem("token", JSON.stringify(tokenRespone)); // Store token in local storage
          navigate("/login");
        })
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Register</h2>
      {error && <p className="alert alert-danger text-danger mt-2 text-center">{error}</p>}
      <form onSubmit={register}>
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
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
