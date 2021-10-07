import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  // ボタンを押した時に実行する関数を定義
  const onClickButton = () => {
    alert();
  }
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage />
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
}