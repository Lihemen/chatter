import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Join.css";

function Join() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    room: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const signIn = (e) => {
    e.preventDefault();
    navigate(`/chat?name=${details.name}&room=${details.room}`);
  };

  return (
    <div className="joinOuterContainer">
      <form className="joinInnerContainer">
        <h1 className="heading">Let's Go</h1>
        <input
          placeholder="Name"
          name="name"
          className="joinInput"
          type="text"
          onChange={handleChange}
          value={details.name}
        />
        <input
          placeholder="Room"
          name="room"
          className="joinInput"
          type="text"
          onChange={handleChange}
          value={details.room}
        />

        <button
          disabled={!details.name || !details.room}
          className="button mt-20"
          onClick={signIn}
        >
          Join
        </button>
      </form>
    </div>
  );
}

export default Join;
