import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io();

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));

    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Panel użytkownika</h1>
      {stats && <p className="mt-4">Liczba użytkowników: {stats.totalUsers}</p>}
      {messages.map((msg, i) => (
        <p key={i}>{msg}</p>
      ))}
    </div>
  );
}
