import React, { useState } from "react";
import { section } from "../../utils/helperFunction";
import "./styles.css";

const Slider = (props) => {

  const {attributes, data} = props;

  return (
    <div style={attributes.styles}>
      
      {section(data)}
    </div>
  );
};

export default Slider;
