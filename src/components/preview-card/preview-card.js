import React, { useState, useEffect, useRef } from "react";
import "./preview-card.css";
import { dummyCard } from "./dummy-card";
import DefaultImage from "../../assets/images/def-img.png";

export default function PreviewCard({
  cardData = {},
  currentConfig,
  currentLayout,
}) {
  const imageRef = useRef(null);
  const [imageLoadError, setImageLoadError] = useState(false);

  const handleImageLoadError = (e) => {
    // console.log("Image load error");
    setImageLoadError(true);
  };

  return (
    <article
      className={`preview-card ${
        currentLayout.vertical.value ? "" : "horizontal"
      }`}
    >
      {currentConfig.showPreviewImage.value &&
        cardData.images &&
        cardData.images.length > 0 && (
          <div className="thumbnail-container">
            {imageLoadError ? (
              <img
                style={{
                  height: 120,
                  width: 120,
                  backgroundColor: "transparent",
                }}
                src={DefaultImage}
              />
            ) : (
              <img
                src={cardData.images[0]}
                ref={imageRef}
                onError={handleImageLoadError}
              />
            )}
          </div>
        )}
      <div className="preview-body">
        <span className="preview-title">
          {cardData.title && (
            <span className="title">
              {cardData.title}{" "}
              {currentConfig.showFaviconInTitle.value &&
                cardData.favicons &&
                cardData.favicons.length > 0 && (
                  <span className="favicon">
                    <img width="16" height="16" src={cardData.favicons[0]} />
                  </span>
                )}
            </span>
          )}
          {currentConfig.showSiteName.value && cardData.siteName && (
            <span className="page-url">{cardData.siteName}</span>
          )}
          {currentConfig.showUrl.value && (
            <span className="page-url">{cardData.url}</span>
          )}
        </span>
        {currentConfig.showDescription.value && (
          <p className="preview-description">{cardData.description}</p>
        )}
      </div>
    </article>
  );
}
