import useSWR from "swr";
import "./App.css";

const url = "http://localhost:3001/200?sleep=2000";
const headers = { Accept: "application/json" };
const fecther = async (url) => {
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`Error, status: ${res.status}`);
  }
  return res.json();
};

function App() {}

export default App;
