import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import Header from "./components/header/header";
import { config } from "./components/config-options/configData";
import ConfigOptions from "./components/config-options/config-options";
import AlertComp from "./components/alert/alert-comp";
import LayoutOptions from "./components/layout-options/layout-options";
import { layoutData } from "./components/layout-options/layoutData";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [currentConfig, setCurrentConfig] = useState(() => config);
  const [currentLayout, setCurrentLayout] = useState(() => layoutData);
  const [errorQueue, setErrorQueue] = useState([]);
  const [showConfigOptions, setShowConfigOptions] = useState(false);
  const [showLayoutOptions, setShowLayoutOptions] = useState(false);
  const api = "https://linkpreview-backend.herokuapp.com/parse-link"

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const updateConfig = (newConfig) => {
    setCurrentConfig(newConfig);
  };

  const updateLayout = (newLayout) => {
    console.log({ newLayout });
    setCurrentLayout(newLayout);
  };

  useEffect(() => {
    // console.log({ errorQueue });
  }, [errorQueue]);

  const toggleShowConfig = () => {
    setShowConfigOptions((prev) => !prev);
  };

  const toggleShowLayout = () => {
    setShowLayoutOptions((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResults([]);
    const queries = searchQuery.split(",");
    setLoading(true);
    queries.forEach(async (q) => {
      q = q.trim();
      try {
        const response = await fetch(
          api + "?link=" + q
        );
        const data = await response.json();
        setResults((prevResult) => [...prevResult, { ...data }]);
      } catch (e) {
        setErrorQueue([
          ...errorQueue,
          {
            message: "Could not generate preview for link " + searchQuery,
            color: "#FF6961",
          },
        ]);

        setTimeout(() => {
          setErrorQueue((prev) => prev.slice(1));
        }, 3000);
      }
    });
    setLoading(false);
  };

  return (
    <div className="App">
      <Header
        {...{
          searchQuery,
          handleInputChange,
          handleSubmit,
        }}
      />
      <ConfigOptions
        {...{
          currentConfig,
          updateConfig,
          showConfigOptions,
          toggleShowConfig,
        }}
      />
      {/* <LayoutOptions
        {...{
          currentLayout,
          updateLayout,
          showLayoutOptions,
          toggleShowLayout,
        }}
      /> */}
      {errorQueue.map((e, id) => (
        <AlertComp key={id} alertMsg={e.message} alertColor={e.color} />
      ))}
      <CardList
        cards={results}
        loading={loading}
        currentConfig={currentConfig}
        currentLayout={currentLayout}
      />
    </div>
  );
}

export default App;
