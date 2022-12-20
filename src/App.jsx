import { useState } from "react";
import "./App.css";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const [status, setStatus] = useState("");

  fetch(url, { headers })
    .then((res) => res.json())
    .then((json) => setStatus(json.description));

  return <>{status && <p>Status : {status}</p>}</>;
}

export default App;
