import "./styles.css";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const onClickButton = () => {
    alert("イベントが発火されました。");
  };

  return (
    <>
      <ColorfulMessage color="blue" message="こんにちは" />
      <p>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
