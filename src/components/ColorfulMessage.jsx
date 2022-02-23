import React from "react";

export const ColorfulMessage = (props) => {
  const { color, message } = props;
  const styleContent = {
    color: color,
    fontSize: "33px"
  };

  return <h1 style={styleContent}>{message}</h1>;
};
