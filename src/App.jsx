import "./styles.css";

export const App = () => {
  const onClickButton = () => {
    alert("イベントが発火されました。");
  };
  return (
    <>
      <h1>こんにちは</h1>
      <p>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
