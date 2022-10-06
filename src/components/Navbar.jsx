import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Killshot Chat</span>
      <div className="user">
        <img
          src="https://avatars.githubusercontent.com/u/89957432?v=4"
          alt="avatar"
        />
        <span>Hassan</span>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
