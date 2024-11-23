import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Assuming App.js is your main component
import "./styles.css"; // Ensure your styles are correctly imported

// StrictMode helps with identifying potential issues in the app during development
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // This will inject the React app into the <div id="root"></div> in index.html
);