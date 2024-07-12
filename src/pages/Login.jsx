// import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <form action="">
        <h1>Login</h1>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button>Login</button>
        <p>There is an error</p>
        <span>
          Dont you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
