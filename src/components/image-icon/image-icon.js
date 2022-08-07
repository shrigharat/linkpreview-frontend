import React from "react";

export default function ImageIcon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="204"
      height="204"
      fill={color}
    >
      <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"></path>
      <path d="m10 14-1-1-3 4h12l-5-7z"></path>
    </svg>
  );
}
