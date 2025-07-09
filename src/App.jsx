import { useState, useEffect } from "react";
import "./App.css";

const url = "http://localhost:3001/200?sleep=2000";
const headers = { Accept: "application/json" };

function App() {
  const [status, setStatus] = useState("");
  
  useEffect(() => {
    fetch(url, { headers })
      .then((res) => res.json())
      .then((json) => setStatus(json.description))
  }, []);

  return <>{status && <p>Status : {status}</p>}</>;
}

export default App;
