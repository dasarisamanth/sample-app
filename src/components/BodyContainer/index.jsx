import React from "react";
import About from "./About";
import Featured from "./Featured";
import "./index.css";
export default function BodyContainer() {
  return (
    <div className="body-container">
      <About />
      <Featured />
    </div>
  );
}
