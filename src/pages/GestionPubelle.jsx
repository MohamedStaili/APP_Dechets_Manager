import React from "react";

const GestionPoubelle = () => {
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
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    },
    tableHeader: {
      backgroundColor: "#10b981",
      color: "#ffffff",
      textAlign: "left",
      padding: "10px",
    },
    tableRow: {
      borderBottom: "1px solid #e5e7eb",
    },
    tableData: {
      padding: "10px",
      textAlign: "left",
    },
    button: {
      backgroundColor: "#10b981",
      color: "#ffffff",
      border: "none",
      borderRadius: "4px",
      padding: "8px 12px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#059669",
    },
  };

  // Données statiques
  const poubelles = [
    {
      id: 1,
      emplacement: "Rue Principale",
      etat: "Plein",
    },
    {
      id: 2,
      emplacement: "Parc Central",
      etat: "Vide",
    },
    {
      id: 3,
      emplacement: "Zone Industrielle",
      etat: "Maintenance nécessaire",
    },
  ];

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.header}>Gestion des Poubelles</h1>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Fonctionnalités</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>ID</th>
                <th style={styles.tableHeader}>Emplacement</th>
                <th style={styles.tableHeader}>État</th>
                <th style={styles.tableHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {poubelles.map((poubelle) => (
                <tr key={poubelle.id} style={styles.tableRow}>
                  <td style={styles.tableData}>{poubelle.id}</td>
                  <td style={styles.tableData}>{poubelle.emplacement}</td>
                  <td style={styles.tableData}>{poubelle.etat}</td>
                  <td style={styles.tableData}>
                    <button
                      style={styles.button}
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor =
                          styles.buttonHover.backgroundColor)
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor =
                          styles.button.backgroundColor)
                      }
                    >
                      Gérer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GestionPoubelle;
