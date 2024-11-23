import React, { useState } from "react";
import "./styles.css";

const content = [
  {
    title: "Overview",
    items: [
      "Welcome to SetPlayWinApp, the platform that brings together FunFart Games, DigitalKnuckles, and LazerPixel Dev.",
      "Explore games, NFTs, tokens, and community utilities in one place!",
    ],
  },
  {
    title: "Features",
    items: [
      "Interactive Gaming Hub: Play and discover new games, track progress, and compete with others.",
      "Web3 Integration: Experience blockchain-powered gaming, NFT trading, and token utilities.",
      "Community-Driven Platform: Connect with enthusiasts, join events, and contribute to projects.",
    ],
  },
  {
    title: "Projects",
    items: [
      "FunFart Games: Quirky and innovative games like SneakyPoot’s Adventures and Toothless Zoo Tycoon.",
      "DigitalKnuckles: Exclusive NFTs and utilities to enhance your gaming experience.",
      "LazerPixel Dev: Experimental projects, tutorials, and tools for game developers.",
    ],
  },
  {
    title: "Roadmap",
    items: [
      "Phase 1: Launch the gaming hub and NFT marketplace.",
      "Phase 2: Introduce token utilities and staking rewards.",
      "Phase 3: Expand community features and co-op gaming modes.",
      "Phase 4: Launch the SetPlayWin MemeCoin ecosystem.",
    ],
  },
  {
    title: "Contact",
    items: [
      "Email: support@setplaywinapp.com",
      "Discord: Join the FunFart Community",
      "Website: SetPlayWinApp.com",
    ],
  },
];

export default function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>SetPlayWinApp</h1>
          <p>Your Hub for Games, Web3, and Community</p>
        </div>
      </header>
      <div id="tabs">
        <menu>
          {content.map((tab, index) => (
            <button
              key={index}
              className={activeTabIndex === index ? "active" : ""}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab.title}
            </button>
          ))}
        </menu>
        <div id="tab-content">
          <h2>{content[activeTabIndex].title}</h2>
          <ul>
            {content[activeTabIndex].items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
