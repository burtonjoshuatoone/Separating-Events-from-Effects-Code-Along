import { useState, useEffect, useCallback } from "react";
import { createConnection, sendMessage } from "./chat.jsx";
import { showNotification } from "./notifications.jsx";

const serverUrl = "https://localhost:1234";

function ChatRoom({ roomId, theme }) {
  const onConnected = useCallback(
    (connectedRoomId) => {
      showNotification("Welcome to " + connectedRoomId, theme);
    },
    [theme], // depends only on theme
  );

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);

    connection.on("connected", () => {
      setTimeout(() => {
        onConnected(roomId);
      }, 2000);
    });

    connection.connect();
    return () => connection.disconnect();
  }, [roomId, onConnected]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>

      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>

      <hr />

      <ChatRoom roomId={roomId} theme={isDark ? "dark" : "light"} />
    </>
  );
}
