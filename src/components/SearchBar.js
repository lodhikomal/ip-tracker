
import React from "react";
import "./SearchBar.css";

export default function SearchBar({ query, setQuery, onSearch }) {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for any IP address or domain"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={onSearch}>Search</button>
        </div>
    );
}
