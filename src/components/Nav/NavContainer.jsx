import { Dropdown, Menu, Button, Input, Select } from "antd";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import "./nav.css";
const FormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number().required("EW"),
});

const { Option } = Select;
export default function NavContainer() {
  const [active, setActive] = useState("home-tab");
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="nav-container">
      <div className="nav-heading-container">
        <div>
          <img className="nav-logo" src="../../images/uhdLogo.png" alt="logo" />
        </div>
        <h1 className="nav-heading">
          <div className="nav-text">
            {" "}
            Call <span className="nav-number">713-221-8522</span> to speak to an
            Admissions Counsler
          </div>
          <div className="nav-subtext">
            or complete the below to learn more!
          </div>
        </h1>
      </div>
      <div className="hero-container">
        <div className="hero-subcontainer">
          <div className="nav-legend"></div>
          <nav className="nav-bar">
            <div className="nav-content">
              <div
                onClick={() => setActive("home-tab")}
                className={`nav-elements ${
                  active === "home-tab" ? "active" : ""
                }`}
              >
                Home
              </div>
              <div
                onClick={() => setActive("degree-tab")}
                className={`nav-elements ${
                  active === "degree-tab" ? "active" : ""
                }`}
              >
                <Dropdown overlay={menu} trigger={["click"]}>
                  <span>DEGREE PROGRAMS</span>
                </Dropdown>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-footer">
          The First Step In Your Life Exchanging-Experience
        </div>
        <div className="form-container">
          <div className="form-label">REQUEST INFORMATION</div>
          {/* <div style={{ padding: "16px" }}> */}
          <Formik
            validationSchema={FormSchema}
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              programOfInterest: "",
              deliveryType: "",
              communicationType: "",
            }}
            onSubmit={async (values, { resetForm }) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
              resetForm({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                programOfInterest: "",
                deliveryType: "",
                communicationType: "",
              });
            }}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              setFieldValue,
              errors,
              touched,
            }) => (
              <Form onSubmit={handleSubmit}>
                {/* {console.log(values)} */}
                <div className="form-field">
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="First Name*"
                    onChange={handleChange}
                    value={values.firstName}
                    className={
                      errors && errors.firstName && touched.firstName
                        ? "err-des"
                        : ""
                    }
                  />
                </div>
                <div className="form-field">
                  <Input
                    onChange={handleChange}
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name*"
                    value={values.lastName}
                    className={
                      errors && errors.lastName && touched.lastName
                        ? "err-des"
                        : ""
                    }
                  />
                </div>
                <div className="form-field">
                  <Input
                    onChange={handleChange}
                    id="email"
                    name="email"
                    placeholder="Email-Address*"
                    type="email"
                    value={values.email}
                    className={
                      errors && errors.email && touched.email ? "err-des" : ""
                    }
                  />
                </div>
                <div className="form-field">
                  <Input
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="Phone Number*"
                    className={
                      errors && errors.phone && touched.phone ? "err-des" : ""
                    }
                  />
                </div>
                <div className="form-field">
                  <Select
                    style={{ width: 268 }}
                    onChange={(e) => {
                      setFieldValue("programOfInterest", e);
                    }}
                    value={
                      values.programOfInterest
                        ? values.programOfInterest
                        : undefined
                    }
                    placeholder="Program Of Interest"
                  >
                    <Option value="FE">FE</Option>
                    <Option value="BE">BE</Option>
                    <Option value="DEVOPS">DEVOPS</Option>
                  </Select>
                </div>
                <div className="form-field">
                  <Select
                    style={{ width: 268 }}
                    onChange={(e) => {
                      setFieldValue("deliveryType", e);
                    }}
                    placeholder="Program Delivery Type"
                    value={
                      values.deliveryType ? values.deliveryType : undefined
                    }
                  >
                    <Option value="Online">Online</Option>
                    <Option value="Offline">Offline</Option>
                  </Select>
                </div>
                <div className="form-field">
                  <Select
                    style={{ width: 268 }}
                    onChange={(e) => {
                      setFieldValue("communicationType", e);
                    }}
                    value={
                      values.communicationType
                        ? values.communicationType
                        : undefined
                    }
                    placeholder="Program Communication Type"
                  >
                    <Option value="Verbal">Verbal</Option>
                    <Option value="Email">Email</Option>
                  </Select>
                </div>
                <button type="submit">LEARN MORE TODAY!</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
}
