import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "./index.css";
import axios from "axios";
export default function Featured() {
  const [state, setState] = useState({});
  const [active, setActive] = useState("education");
  async function getData() {
    let response = await axios.get(
      "https://run.mocky.io/v3/39dd1782-ae4b-4cf8-8e18-a1dea3c8a920"
    );
    console.log(response.data);
    setState(response.data);
  }
  useEffect(() => {
    getData();
  }, []);
  if (!Object.keys(state).length) {
    return null;
  }
  return (
    <div className="featured-container">
      <div className="box">
        {state.categories.map((cat, i) => {
          return (
            <div
              onClick={() => setActive(cat.title.toLowerCase())}
              className={`box-tab ${
                cat.title.toLowerCase() === active ? "active" : ""
              }`}
              key={i}
            >
              {cat.title}
            </div>
          );
        })}
      </div>
      <div className="legend-box">
        <div className="featured-legend">WHY CHOOSE UHD?</div>
        <div className="featured-tips">
          <div className="arrow-down"></div>
          <div className="arrow-down"></div>
          <div className="arrow-down"></div>
        </div>
      </div>
      <div className="featured-reasons">
        {state.categories
          .filter((cat) => cat.title.toLowerCase() === active)[0]
          .section.map((des, i) => {
            return (
              <div className="reason-content" key={i}>
                <h3>{des.name}</h3>
                <p>{des.desc}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
