import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Icône personnalisée pour les marqueurs
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Localisation = () => {
  // Styles en ligne
  const styles = {
    body: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#f3f4f6",
      color: "#333",
      margin: 0,
      padding: 0,
      lineHeight: 1.6,
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
    },
    header: {
      textAlign: "center",
      color: "#1e293b",
      margin: "20px 0",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      margin: "20px 0",
    },
    map: {
      width: "100%",
      height: "500px",
      borderRadius: "8px",
      border: "2px solid #10b981",
      overflow: "hidden",
    },
    filter: {
      marginBottom: "15px",
      padding: "10px",
      backgroundColor: "#f1f5f9",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    select: {
      padding: "8px 12px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ccc",
    },
  };

  // Emplacements statiques des poubelles
  const allPoubelles = [
    { id: 1, position: [48.8566, 2.3522], quartier: "Centre-ville", statut: "Plein" }, // Paris
    { id: 2, position: [48.864716, 2.349014], quartier: "Quartier Nord", statut: "Vide" }, // Quartier nord
    { id: 3, position: [48.858844, 2.294351], quartier: "Zone Industrielle", statut: "Maintenance nécessaire" }, // Tour Eiffel
  ];

  // State pour gérer le filtre
  const [filter, setFilter] = useState("Tous");

  // Fonction pour filtrer les poubelles selon le statut sélectionné
  const filteredPoubelles =
    filter === "Tous"
      ? allPoubelles
      : allPoubelles.filter((poubelle) => poubelle.statut === filter);

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.header}>Localisation et Cartographie</h1>
        <div style={styles.card}>
          <h2>Carte interactive</h2>

          {/* Barre de filtre */}
          <div style={styles.filter}>
            <label htmlFor="status-filter" style={{ marginRight: "10px" }}>
              Filtrer par statut :
            </label>
            <select
              id="status-filter"
              style={styles.select}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="Tous">Tous</option>
              <option value="Plein">Plein</option>
              <option value="Vide">Vide</option>
              <option value="Maintenance nécessaire">Maintenance nécessaire</option>
            </select>
          </div>

          {/* Carte */}
          <div style={styles.map}>
            <MapContainer
              center={[48.8566, 2.3522]} // Coordonnées pour centrer la carte (Paris)
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {filteredPoubelles.map((poubelle) => (
                <Marker
                  key={poubelle.id}
                  position={poubelle.position}
                  icon={customIcon}
                >
                  <Popup>
                    <strong>Quartier:</strong> {poubelle.quartier}
                    <br />
                    <strong>Statut:</strong> {poubelle.statut}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Localisation;
