import React from "react";
import CheckIcon from "../check-icon/check-icon";
import "./layout-options.css";

export default function LayoutOptions({
  showLayoutOptions,
  toggleShowLayout,
  currentLayout,
  updateLayout,
}) {
  const handleOptionClick = (key) => {
    const newLayout = {};
    Object.keys(currentLayout).forEach((k) => {
      let currObj = currentLayout[k];
      newLayout[k] = {...currObj, value: false};
    });
    newLayout[key] = { ...currentLayout[key], value: true };
    updateLayout(newLayout);
  };

  return (
    <div className="config-container">
      <div
        className={`config-title ${showLayoutOptions ? "active" : ""}`}
        onClick={toggleShowLayout}
      >
        <span>Show layout options</span>
        <span
          style={{
            transform: showLayoutOptions ? "rotate(180deg)" : "rotate(0)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            fill="var(--body-text)"
          >
            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
          </svg>
        </span>
      </div>
      {showLayoutOptions && (
        <div className="config-wrapper">
          {Object.keys(currentLayout).map((key, id) => (
            <div
              key={id}
              className="config-button"
              onClick={() => handleOptionClick(key)}
            >
              <span>{currentLayout[key].text}</span>{" "}
              {currentLayout[key].value && <CheckIcon color="var(--accent)" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
