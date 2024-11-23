import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";

// Content data for each page
const content = {
  home: "Welcome to SetPlayWin - The hub for FunFart Games, DigitalKnuckles, and LazerPixel.",
  features: [
    "Interactive Gaming Hub: Discover and play innovative games.",
    "Web3 Integration: NFTs, token utilities, and blockchain gaming.",
    "Community-Driven: Join events and contribute to projects."
  ],
  projects: [
    "FunFart Games: Quirky games like SneakyPoot's Adventures.",
    "DigitalKnuckles: Exclusive NFTs for gamers.",
    "LazerPixel Dev: Tools for game developers."
  ],
  roadmap: [
    "Phase 1: Launch gaming hub and NFT marketplace.",
    "Phase 2: Introduce staking and token utilities.",
    "Phase 3: Expand co-op gaming and community features.",
    "Phase 4: Launch the SetPlayWin MemeCoin ecosystem."
  ]
};

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <Router>
      <header>
        <img src="/react-logo-xs.png" alt="React Logo" />
        <h1>SetPlayWin</h1>
        <p>The hub for Web3, gaming, and community.</p>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={() => setActiveTab("home")}>Home</Link>
          </li>
          <li>
            <Link to="/features" onClick={() => setActiveTab("features")}>Features</Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setActiveTab("projects")}>Projects</Link>
          </li>
          <li>
            <Link to="/roadmap" onClick={() => setActiveTab("roadmap")}>Roadmap</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home content={content.home} />} />
          <Route path="/features" element={<Features content={content.features} />} />
          <Route path="/projects" element={<Projects content={content.projects} />} />
          <Route path="/roadmap" element={<Roadmap content={content.roadmap} />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2024 SetPlayWin. All rights reserved.</p>
      </footer>
    </Router>
  );
}

// Individual page components
function Home({ content }) {
  return <p>{content}</p>;
}

function Features({ content }) {
  return (
    <ul>
      {content.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  );
}

function Projects({ content }) {
  return (
    <ul>
      {content.map((project, index) => (
        <li key={index}>{project}</li>
      ))}
    </ul>
  );
}

function Roadmap({ content }) {
  return (
    <ul>
      {content.map((phase, index) => (
        <li key={index}>{phase}</li>
      ))}
    </ul>
  );
}
