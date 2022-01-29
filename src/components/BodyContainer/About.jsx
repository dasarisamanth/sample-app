import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import axios from "axios";
import "./index.css";
export default function About() {
  const [state, setState] = useState({});

  async function getData() {
    let response = await axios.get(
      "https://run.mocky.io/v3/86344593-32e6-4525-a225-1f0df23dd90d"
    );
    // console.log(response.data, response.data.body.split("\n\n"));
    setState(response.data);
  }
  useEffect(() => {
    getData();
  }, []);
  if (!Object.keys(state).length) {
    return null;
  }
  return (
    <div className="about-container">
      <Row gutter={[8, 8]}>
        <Col span={12}>
          <div>
            <h2 className="content-heading">{state.title}</h2>
            <div>
              {state.body.split("\n\n").map((text, i) => {
                return <p key={i}>{text}</p>;
              })}
            </div>
          </div>
        </Col>
        <Col span={12}>
          <img className="about-image" src={state.img} alt="ol" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div>
            <h2 className="content-heading">{state.sub_title}</h2>
            <p>{state.sub_body}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
