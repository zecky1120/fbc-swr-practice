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

function App() {
  const { data, error, isLoading } = useSWR(url, fecther);
  if (error) {
    return <p>Failed to load.</p>;
  } else if (isLoading) {
    return <p>loading...</p>;
  } else {
    return <>{data && <p>Status: {data.description}</p>}</>;
  }
}

export default App;
