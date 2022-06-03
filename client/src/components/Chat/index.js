import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

const ENDPOINT = "http://localhost:4000";

function Chat() {
  const location = useLocation();
  const { name, room } = queryString.parse(location.search);

  useEffect(() => {
    const socket = io(ENDPOINT);

    socket.emit("join", { name, room });
  }, [ENDPOINT, location.search]);
  return <div>Chat</div>;
}

export default Chat;
