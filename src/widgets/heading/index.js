import React from "react";
import "./style.css";

const Heading = (props) => {
  return (
    <h3 classname="heading" style={{ color: props.color }}>
      {props.children}
    </h3>
  );
};

export default Heading;
