import useSWR from "swr";
import "./App.css";

const url = "http://localhost:3001/200?sleep=2000";
const headers = { Accept: "application/json" };
const fetcher = async (url) => {
  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`Error, status: ${res.status}`);
  }
  return res.json();
};

function App() {
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <p>Failed to load.</p>;
  if (isLoading) return <p>Loading...</p>;
  return <>{data && <p>Status: {data.description}</p>}</>;
}

export default App;
