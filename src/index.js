import React from "react";
import ReactDOM from "react-dom/client"; // Use the correct import for React 18
import App from "./App"; // Assuming App.js is your main component
import "./styles.css"; // Ensure your styles are correctly imported

// StrictMode helps with identifying potential issues in the app during development
const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);