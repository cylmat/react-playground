import { useState } from "react";
import CssSample from "../components/Css/CssSample";
import Loader from "../components/Loader/Loader.tsx";
import Logo from "../components/Logo/Logo";
import Tabs from "../components/Tab/Tabs";
import reactLogo from "../assets/react.svg";
import viteLogo from "/favicon.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Logo
          href="https://vitejs.dev"
          src={viteLogo}
          classname="logo"
          alt="Vite logo"
        />
        <Logo
          href="https://react.dev"
          src={reactLogo}
          classname="logo react"
          alt="React logo"
        />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      { /*Tabs*/ }
      <Tabs />
      <Loader />

      { /*Css*/ }
      <CssSample />
    </>
  );
}

export default App;
