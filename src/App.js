import React from "react";
import "./App.css"; // Ensure you create and style this CSS file

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>OandoVisuals by NEUTRON DAVIS</h1>
      </header>
      <main className="dashboard-container">
        <iframe
          title="OandoVisuals"
          width="1140"
          height="541.25"
          src="https://app.powerbi.com/reportEmbed?reportId=9fe3cdfc-6923-4aeb-a4db-696b5c866db6&autoAuth=true&ctid=19014f1e-8ba7-4b05-bbe4-b98d7a7c9e73"
          frameBorder="0"
          allowFullScreen="true"
        ></iframe>
      </main>
      <footer className="app-footer">
        <p>© 2025 Oando Visuals. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;