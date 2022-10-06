import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search for a User" />
      </div>
      <div className="userChat">
        <img
          src="https://avatars.githubusercontent.com/u/89957432?v=4"
          alt="avatar"
        />
        <div className="userChatInfo">
          <span>Hassan</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
