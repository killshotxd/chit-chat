import React from "react";
import Add from "../img/addAvatar.png";
const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Killshot Chit-Chat</span>
        <span className="title">SignUp</span>
        <form>
          <input type="text" placeholder="Display Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="avatar" />
            <span>Add an avatar</span>
          </label>
          <button>SignUp</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
