import { useState } from "react";
// import reactLogo from "../../assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Header from "../Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="page__content"></div>
      <Header></Header>
    </div>
  );
}

export default App;
