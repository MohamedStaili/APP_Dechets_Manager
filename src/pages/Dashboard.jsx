import React from "react";
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import "./css/Dashboard.css"; // Styles

// Enregistrement des composants nécessaires de Chart.js
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Données pour le graphique circulaire
  const pieData = {
    labels: ["Plastique", "Papier", "Métaux", "Verre"],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  // Données pour le graphique à barres
  const barData = {
    labels: ["Janvier", "Février", "Mars", "Avril"],
    datasets: [
      {
        label: "Déchets Recyclés (kg)",
        data: [500, 700, 900, 800],
        backgroundColor: "#36A2EB",
      },
    ],
  };

  return (
    <div className="dashboard-container">
      <h1>WasteWise Dashboard</h1>
      <p>Analyse intelligente et supervision de la gestion des déchets</p>

      <div className="stats-grid">
        <div className="card">
          <h3>Total Déchets Recyclés</h3>
          <p>1,234 kg</p>
        </div>
        <div className="card">
          <h3>Participants Actifs</h3>
          <p>256</p>
        </div>
        <div className="card">
          <h3>Taux de Remplissage</h3>
          <p>78%</p>
        </div>
        <div className="card">
          <h3>Impact CO2</h3>
          <p>-240 kg</p>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Répartition des Déchets</h3>
          <Pie data={pieData} />
        </div>
        <div className="chart-card">
          <h3>Évolution Mensuelle</h3>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
