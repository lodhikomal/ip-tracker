import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import InfoCard from "./components/InfoCard";
import MapView from "./components/MapView";
import { fetchGeo } from "./services/geoServices";
import Loader from "./components/Loader";


function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load user's IP on first render
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await fetchGeo("");
        setData(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter an IP address or domain");
      return;
    }
    try {
      setLoading(true);
      setError("");
      const response = await fetchGeo(query);
      setData(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>IP Address Tracker</h1>

      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
      />

      {error && <p className="error">{error}</p>}
      {loading && <p className="loading"><Loader /></p>}

      <InfoCard data={data} />

      <div className="map-box">
        {data && <MapView lat={data.lat} lon={data.lon} label={data.query} />}
      </div>
    </div>
  );
}

export default App;
