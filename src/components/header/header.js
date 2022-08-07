import React, { useState } from "react";
import SearchIcon from "../search-icon/search-icon";
import "./header.css";

export default function Header({
  searchQuery,
  handleInputChange,
  handleSubmit,
}) {
  const [inputFocused, setInputFocused] = useState(false);

  const addFocusClass = () => {
    setInputFocused(true);
  };

  const removeFocusClass = () => {
    setInputFocused(false);
  };

  return (
    <header>
      <h1 className="head-text">Link Preview 🧐</h1>
      <form
        onSubmit={handleSubmit}
        className={`${inputFocused ? "accent-border" : ""}`}
      >
        <input
          placeholder="Enter a link"
          type="text"
          onChange={handleInputChange}
          autoComplete="off"
          onFocus={addFocusClass}
          onBlur={removeFocusClass}
          value={searchQuery}
        />
        <span className="search-icon" onClick={handleSubmit}>
          <SearchIcon
            color={`${inputFocused ? "var(--accent)" : "var(--body-text)"}`}
          />
        </span>
      </form>
    </header>
  );
}
