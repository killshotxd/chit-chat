import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Killshot Chit-Chat</span>
        <span className="title">Sign In</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button>Sign In</button>
        </form>
        <p>Don't have an account? Sign Up</p>
      </div>
    </div>
  );
};

export default Login;
