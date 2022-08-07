import React from "react";
import Loader from "../loader/loader";
import PreviewCard from "../preview-card/preview-card";
import "./card-list.css";

export default function CardList({
  cards,
  loading,
  currentConfig,
  currentLayout,
}) {
  return (
    <div className="card-list">
      {loading ? (
        <Loader />
      ) : cards.length > 0 ? (
        cards.map((card, id) => (
          <PreviewCard
            key={id}
            cardData={card}
            currentConfig={currentConfig}
            currentLayout={currentLayout}
          />
        ))
      ) : (
        <span className="no-results">No results to show</span>
      )}
    </div>
  );
}
