import "./styles.css";
import React, { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const [num, setNum] = useState(0);

  return (
    <>
      <ColorfulMessage color="blue" message="こんにちは" />
      <p>{num}</p>
      <button onClick={onClickCountUp}>カウントアップ</button>
    </>
  );
};
