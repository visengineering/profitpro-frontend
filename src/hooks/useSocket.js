import { useEffect, useState } from "react";

const webSocket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);

const userIds = [103, 102, 272];

function getRandomUserId(userIdsArray) {
  const randomIndex = Math.floor(Math.random() * userIdsArray.length);
  const userId = userIdsArray[randomIndex];

  localStorage.setItem("userId", userId);

  return userId;
}

export function useSocket() {
  const [isConnected, setIsConnected] = useState(false);
  const [newWebSocketData, setNewWebSocketData] = useState();
  const [newActiveUser, setNewActiveUser] = useState({});
  const [newActiveConversation, setNewActiveConversation] = useState({});

  const randomUserId =
    localStorage.getItem("userId") || getRandomUserId(userIds);

  const data = {
    client_type: "frontend",
    room_name: "Innovative Insights",
    newUser: randomUserId,
  };

  webSocket.onopen = () => {
    setIsConnected(true);
    webSocket.send(JSON.stringify(data));
  };

  webSocket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    setNewWebSocketData(data);
    if (data.event_type === "new_active_user") {
      setNewActiveUser(data.user);
    } else {
      setNewActiveConversation(data);
    }
  };

  webSocket.onclose = () => {
    setIsConnected(false);
    webSocket.close();
  };

  useEffect(() => {}, [newWebSocketData]);

  function connectWithWebSocket() {
    if (!isConnected) return;
    webSocket.send(JSON.stringify(data));
  }

  return {
    webSocket,
    connectWithWebSocket,
    newActiveUser,
    newActiveConversation,
  };
}
