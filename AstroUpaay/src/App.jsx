import React from "react";
import FortuneFinder from './components/entries';
import './App.css'; // optional, if you're moving styles to external CSS

function App() {
  return (
    <div className="app-container">
      <div className="content-box">
        <h1>🌟 AstroUpaay 🔮</h1>
        <FortuneFinder />
      </div>
    </div>
  );
}

export default App;
