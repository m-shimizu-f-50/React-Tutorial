import React from "react";
import ReactDom from "react-dom";

import { App } from "./App";

//画面に反映する
//第一引数はAppをコンポーネントとしてレンダリングする
//第二引数はどこに反映させるかを設定する(index.htmlのrootに反映させる)
ReactDom.render(<App />, document.getElementById("root"));
