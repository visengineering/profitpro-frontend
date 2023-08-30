import { useState } from "react";

const webSocket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);

const userIds = [103, 102, 272];

function getRandomUserId(userIdsArray) {
  const randomIndex = Math.floor(Math.random() * userIdsArray.length);
  const userId = userIdsArray[randomIndex];

  localStorage.setItem("userId", userId);

  return;
}

export function useSocket() {
  const [isConnected, setIsConnected] = useState(false);
  const [message, setMessage] = useState();

  const randomUserId =
    localStorage.getItem("userId") || getRandomUserId(userIds);

  const data = {
    action: "join",
    client_type: "frontend",
    room_name: "Innovative Insights",
    newUser: randomUserId,
  };

  webSocket.onopen = () => {
    setIsConnected(true);

    webSocket.send(JSON.stringify(data));
  };

  webSocket.onmessage = (event) => {
    setMessage(event.data);
  };

  webSocket.onclose = () => console.log("isClosed");

  function connectWithWebSocket() {
    if (!isConnected) return;

    webSocket.send(JSON.stringify(data));
  }

  return { webSocket, connectWithWebSocket, message };
}
