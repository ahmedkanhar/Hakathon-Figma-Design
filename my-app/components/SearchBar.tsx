"use client";

import React, { useState } from "react";
interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Pass the query to the parent component
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full max-w-xs">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="w-full px-2 py-1 text-gray-700"
        placeholder="Search products..."
      />
    </div>
  );
};
export default SearchBar;
