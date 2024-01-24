import { useState } from "react";
import axios from "axios";

const AuthPage = (props) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("/login", { username, secret }) // Replace with your actual login endpoint using HTTPS
      .then((response) => {
        props.onAuth({ ...response.data, secret }); // NOTE: Overriding secret is not recommended. Instead, consider handling it securely on the server-side.
      })
      .catch((error) => {
        setErrorMessage("Login failed. Please check your credentials."); // Display error message
      });
  };

  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      }) // Replace with your actual sign-up endpoint using HTTPS
      .then((response) => {
        props.onAuth({ ...response.data, secret });
      })
      .catch((error) => {
        setErrorMessage("Sign-up failed. Please try again later.");
      });
  };

  return (
    <div className="login-page">
      <div className="card">
        {/* Display error message */}
        {errorMessage && <div className="error">{errorMessage}</div>}

        {/* Login Form */}
        <form onSubmit={onLogin}>
          <div className="title">Login</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />
          <button type="submit">LOG IN</button>
        </form>

        {/* Sign Up Form */}
        <form onSubmit={onSignup}>
          <div className="title">or Sign Up</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit">SIGN UP</button>
        </form>
      </div>

      <style>{`
        .login-page { width: 100vw; height: 100vh; padding-top: 6vw; background: linear-gradient(180deg, rgba(117,84,160,1) 7%, rgba(117,84,160,1) 17%, rgba(106,95,168,1) 29%, rgba(99,103,174,1) 44%, rgba(87,116,184,1) 66%, rgba(70,135,198,1) 83%, rgba(44,163,219,1) 96%, rgba(22,188,237,1) 100%, rgba(0,212,255,1) 100%); }
        .card { width: 200px; position: relative; left: calc(50vw - 100px); text-align: center; }
        .title { padding-top: 32px; font-size: 22px; color: white; font-weight: 700; }
        input { width: calc(100% - 16px); margin-top: 12px; padding: 8px; background-color: #e6f7ff; outline: none; border: 1px solid #e6f7ff; }
        button { margin-top: 12px; width: 100%; padding: 8px; }
        .error { color: red; margin-top: 12px; }
      `}</style>
    </div>
    
  );
};
export default AuthPage;