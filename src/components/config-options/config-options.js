import React from "react";
import CheckIcon from "../check-icon/check-icon";
import "./config-options.css";

export default function ConfigOptions({
  showConfigOptions,
  toggleShowConfig,
  currentConfig,
  updateConfig,
}) {
  const handleOptionClick = (key) => {
    updateConfig({
      ...currentConfig,
      [key]: { ...currentConfig[key], value: !currentConfig[key].value },
    });
  };

  return (
    <div className="config-container">
      <div className="headline">
        <div
          className={`config-title ${showConfigOptions ? "active" : ""}`}
          onClick={toggleShowConfig}
        >
          <span>Show config options</span>
          <span
            style={{
              transform: showConfigOptions ? "rotate(180deg)" : "rotate(0)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="18"
              fill="var(--body-text)"
            >
              <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
            </svg>
          </span>
        </div>
        <span className="tooltip">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="var(--accent)"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
            <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
          </svg>
          <div className="tooltip-body">
            You can enter multiple links in the search bar by seperating each
            link with a comma.
          </div>
        </span>
      </div>
      {showConfigOptions && (
        <div className="config-wrapper">
          {Object.keys(currentConfig).map((key, id) => (
            <div
              key={id}
              className="config-button"
              onClick={() => handleOptionClick(key)}
            >
              <span>{currentConfig[key].text}</span>{" "}
              {currentConfig[key].value && <CheckIcon color="var(--accent)" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
