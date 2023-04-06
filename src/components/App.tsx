import { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Test from "./Test";
import { AppGlobalStyle } from "../styles/App.style";
import Navbar from "./Navbar";


export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <AppGlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
