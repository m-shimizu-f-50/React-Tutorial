import "./styles.css";

export const App = () => {
  const onClickButton = () => {
    alert("イベントが発火されました。");
  };

  const styleContent = {
    color: "blue",
    fontSize: "33px"
  };
  return (
    <>
      <h1 style={styleContent}>こんにちは</h1>
      <p>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
