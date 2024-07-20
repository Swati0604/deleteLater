import React, { useEffect, useState } from "react";
import { section } from "../../utils/helperFunction";

const Navbar = (props) => {

  const {data, attributes} = props;

  const {rightSection, leftSection} = data ?? {}

  return (
    <div style={attributes?.styles}>
      <div className="wrapper valign-wrapper vspace-between">
        <div style={leftSection?.attributes.styles}>
          {leftSection && section(leftSection)}
        </div>
        <div style={rightSection?.attributes.styles}>
          {rightSection && section(rightSection)}
        </div>
      </div>
    </div>
  )
};

export default Navbar;
