import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://avatars.githubusercontent.com/u/51280868?v=4"
          alt="IMG"
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://avatars.githubusercontent.com/u/51280868?v=4"
          alt="IMG"
        />
      </div>
    </div>
  );
};

export default Message;
