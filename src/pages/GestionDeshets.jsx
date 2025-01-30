import React from "react";

const GestionDechets = () => {
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
    cardTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#10b981", // Vert moderne
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    listItem: {
      backgroundColor: "#e5e7eb", // Gris clair
      borderRadius: "4px",
      padding: "10px 15px",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    button: {
      backgroundColor: "#10b981",
      color: "#ffffff",
      border: "none",
      borderRadius: "4px",
      padding: "10px 15px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#059669",
    },
  };

  // Contenu
  const dechets = ["Papier", "Plastique", "Métal", "Verre"];

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.header}>Gestion des Déchets</h1>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Fonctionnalités</h2>
          <ul style={styles.list}>
            {dechets.map((dechet, index) => (
              <li key={index} style={styles.listItem}>
                <span>{dechet}</span>
                <button
                  style={styles.button}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = styles.button.backgroundColor)
                  }
                >
                  Gérer
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GestionDechets;
