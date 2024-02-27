'use client'
import React from "react";
import "./styles.css";
import PlayerCard from "./playerCard.js"

export default function Home() {
  const [text, setText] = React.useState("input some text");

  return (
    <div>

      <div>
        <h1 className = "title">Aeon's End Builder</h1>
        <h2 className = "subTitle">A little unofficial project</h2>
      </div>

        <nav className = "navbar">
        <div className = "navbar-container">
          <div className = "navbar-buttons">
            <button className = "navbar-button">Mage Cards</button>
            <button className = "navbar-button">Mage Mats</button>
            <button className = "navbar-button">Nemesis Cards</button>
            <button className = "navbar-button">Nemesis Mats</button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div  className = "control">
          <input
            className = "input"
            type="text"
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div>
          <p>{text}</p> {/* Display the value */}
        </div>
        
        <PlayerCard imageUrl="https://i.imgur.com/Dk44mf6.png" text={text} />

      </div>
    </div>
  );
}