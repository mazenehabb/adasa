import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";

import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Hero from "./components/hero/Hero";
import Test from "./components/testComponent/Test";
import Articales from "./components/articales/Articales";
import CardsTest from "./components/testComponent/CardsTest";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Hero />
      <Articales />

      {/* <Test /> */}
    </>
  );
}

export default App;
