import React from "react";
import Header from "../header/Header";
import Announcement from "../announcement/Announcement";
import Form from "../form/Form";
import SideIcons from "../sideIcons/SideIcons";
import "./FormComponents.scss";

const FormComponent = () => {
  return (
    <div className="form-container">
      <div className="ellipse top-left"></div>
      <div className="ellipse top-right"></div>
      <div className="content-wrapper">
        <Header />
        <div className="form_announcement_container">
          <Announcement />
          <Form />
          <SideIcons />
        </div>
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default FormComponent;
