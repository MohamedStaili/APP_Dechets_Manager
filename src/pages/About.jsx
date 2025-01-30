import React from 'react';
import { RecycleIcon, Globe, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <>
      <style jsx>{`
        :root {
          --green-light: #e8f5e9;
          --green-medium: #81c784;
          --green-dark: #388e3c;
          --gray-light: #f5f5f5;
          --gray-medium: #9e9e9e;
          --gray-dark: #424242;
        }

        .min-h-screen {
          background: linear-gradient(to bottom, var(--green-light), #ffffff);
          padding: 2rem 1rem;
          font-family: 'Inter', sans-serif;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .header {
          margin-bottom: 2rem;
        }

        .header h1 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--green-dark);
        }

        .header p {
          font-size: 1rem;
          color: var(--gray-medium);
        }

        .icons-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .icon-card {
          background-color: var(--green-light);
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s;
        }

        .icon-card:hover {
          transform: translateY(-5px);
        }

        .icon {
          width: 50px;
          height: 50px;
          margin-bottom: 1rem;
          color: var(--green-medium);
        }

        .icon-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--gray-dark);
          margin-bottom: 0.5rem;
        }

        .icon-desc {
          font-size: 0.875rem;
          color: var(--gray-medium);
        }

        .team-section {
          margin-top: 3rem;
        }

        .team-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--green-dark);
          margin-bottom: 1rem;
        }

        .team-members {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .team-card {
          background-color: var(--gray-light);
          padding: 1.5rem;
          border-radius: 10px;
          text-align: center;
          width: 200px;
        }

        .team-photo {
          width: 80px;
          height: 80px;
          margin: 0 auto 1rem;
          border-radius: 50%;
          background-color: var(--green-light);
        }

        .team-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--gray-dark);
        }

        .team-role {
          font-size: 0.875rem;
          color: var(--gray-medium);
        }
      `}</style>

      <div className="min-h-screen">
        <div className="container">
          <div className="header">
            <img alt="logo" src='logo-removebg-preview.png' width="50px" height="50px" className="icon" />
            <h1>À propos de WasteWise Manager</h1>
            <p>
              Une application dédiée à la gestion intelligente des déchets,
              conçue pour un avenir durable.
            </p>
          </div>

          <div className="icons-section">
            <div className="icon-card">
              <Globe className="icon" />
              <h3 className="icon-title">Impact environnemental</h3>
              <p className="icon-desc">
                Réduisez votre empreinte carbone en optimisant la gestion des
                déchets.
              </p>
            </div>

            <div className="icon-card">
              <Lightbulb className="icon" />
              <h3 className="icon-title">Gestion intelligente</h3>
              <p className="icon-desc">
                Utilisez des solutions intelligentes pour un recyclage efficace.
              </p>
            </div>

            <div className="icon-card">
              <Users className="icon" />
              <h3 className="icon-title">Communauté</h3>
              <p className="icon-desc">
                Travaillez avec une communauté dédiée à un monde meilleur.
              </p>
            </div>
          </div>

          <div className="team-section">
            <h2 className="team-title">Notre équipe</h2>
            <div className="team-members">
              <div className="team-card">
                <div className="team-photo"></div>
                <h3 className="team-name">Alice Dupont</h3>
                <p className="team-role">Fondatrice et PDG</p>
              </div>

              <div className="team-card">
                <div className="team-photo"></div>
                <h3 className="team-name">Jean Martin</h3>
                <p className="team-role">Chef de produit</p>
              </div>

              <div className="team-card">
                <div className="team-photo"></div>
                <h3 className="team-name">Sophie Legrand</h3>
                <p className="team-role">Développeuse</p>
              </div>

              <div className="team-card">
                <div className="team-photo"></div>
                <h3 className="team-name">Hugo Girard</h3>
                <p className="team-role">Designer UX/UI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
