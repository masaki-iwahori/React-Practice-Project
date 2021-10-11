import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";

export const App = () => {
  console.log("レンダリング");

  // Stateの定義
  const [num, setNum] = useState(0);

  // ボタンを押した時にStateをカウントアップ
  const onClickButton = () => {
    setNum(num + 1);
  }
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage />
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </>
  );
}