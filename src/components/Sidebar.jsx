import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaMapMarkedAlt,
  FaCog,
  FaTrashAlt,
  FaUsers,
  FaHistory,
  FaChartLine,
  FaQuestionCircle,
  FaClipboardList,
  FaSignOutAlt
} from "react-icons/fa";
import "./css/sidebar.css";
import { useContext } from "react";
import AuthContext from "../contexteAPI/AuthContext/AuthContext";

const Sidebar = (props) => {
  const { logout } = useContext(AuthContext);
  const { isOpen, toggleSidebar } = props;

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Gestion Déchets", path: "/dashboard/gestiondeshets", icon: <FaTrashAlt /> },
    { name: "Gestion Points", path: "/dashboard/gestionpoints", icon: <FaMapMarkedAlt /> },
    { name: "Gestion Poubelles", path: "/dashboard/gestionpubelle", icon: <FaClipboardList /> },
    { name: "Gestion Utilisateurs", path: "/dashboard/gestionusers", icon: <FaUsers /> },
    { name: "Historique Collecte", path: "/dashboard/historique", icon: <FaHistory /> },
    { name: "Localisation", path: "/dashboard/localisation", icon: <FaMapMarkedAlt /> },
    { name: "Paramètres", path: "/dashboard/parametres", icon: <FaCog /> },
    { name: "Rapports", path: "/dashboard/report", icon: <FaChartLine /> },
    { name: "Support & FAQ", path: "/dashboard/support", icon: <FaQuestionCircle /> },
    { name: "Flux Utilisateurs", path: "/dashboard/fluxusers", icon: <FaUsers /> },
  ];

  // Partie du composant Sidebar à modifier
return (
  <>
    {/* Toggle Button reste identique */}
    <button
      className={`toggle-btn ${isOpen ? "open" : ""}`}
      onClick={toggleSidebar}
      aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>

    {/* Sidebar */}
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-logo">
        <p>
          <img src="logo-removebg-preview.png" alt="logo" width="50px" height="50px" />
          WasteWise
        </p>
      </div>
      <nav className="sidebar-menu">
        {/* Conteneur pour les items de navigation */}
        <div className="nav-items">
          {menuItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              className={({ isActive }) =>
                `sidebar-menu-item ${isActive ? "active" : ""}`
              }
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Bouton de déconnexion */}
        <button onClick={logout} className="logout-button">
          <span className="icon">
            <FaSignOutAlt />
          </span>
          <span className="label">Se déconnecter</span>
        </button>
      </nav>
    </div>

    {/* Overlay reste identique */}
    {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
  </>
);
};

export default Sidebar;