import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [credentials, setcredentialsl] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //   "auth-token":
        //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjMDFhZGEzZmY1MThlZTQ5NzIzODE4In0sImlhdCI6MTYzOTk3OTc5MH0.2LTg9espt18r81Y6UIdkZUt9EoRV7dVL_CeWOd48trQ",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
    } else {
      alert("invalid credentials");
    }
  };

  const onChange = (e) => {
    setcredentialsl({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="my-2" onSubmit={handleSubmit}>
        <div className="form-group my-2">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control my-2"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-groupmy-2">
          <label htmlFor="password1">Password</label>
          <input
            type="password"
            className="form-control my-2"
            id="password1"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
