import React from "react";
import "./index.scss";

export default function App() {
  return (
    <div className="app">
      <section className="catchThatEye">
        <img className="catchThatEye__backgroundImage" src="./Background.png" alt="Background"/>
        <div className="catchThatEye__backgroundImageOverlayOne"></div>
        <div className="catchThatEye__backgroundImageOverlayTwo"></div>
      </section>
    </div>
  );
}
