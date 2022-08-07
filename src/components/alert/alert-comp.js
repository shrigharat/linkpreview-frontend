import React from "react";
import "./alert-comp.css";

export default function AlertComp({ alertMsg, alertColor }) {
  return (
    <div className="alert-comp" style={{ backgroundColor: alertColor }}>
      {alertMsg}
    </div>
  );
}
