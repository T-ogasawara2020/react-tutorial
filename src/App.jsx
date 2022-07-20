import React, { useEffect, useState } from "react";
import ColorFulMessage from "./components/ColorfulMessage";
const App = () => {
  console.log("サイショ");
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlug] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlg = () => {
    setFaceShowFlug(!faceShowFlg);
  };
  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlg || setFaceShowFlug(true);
    } else {
      faceShowFlg && setFaceShowFlug(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorFulMessage color="blue">お元気ですか？</ColorFulMessage>

      <ColorFulMessage color="red">元気です！</ColorFulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlg}>on/off</button>
      <p>{num}</p>
      {faceShowFlg && <p>^_^</p>}
    </>
  );
};

export default App;
