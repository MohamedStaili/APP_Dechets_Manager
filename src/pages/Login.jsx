import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/dashboard");
        } catch (err) {
            setError("Email ou mot de passe invalide.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen">
            <style>
                {`
                    :root {
                        --green-light: #e8f5e9;
                        --green-medium: #81c784;
                        --green-dark: #388e3c;
                        --gray-light: #f5f5f5;
                        --gray-medium: #9e9e9e;
                        --gray-dark: #424242;
                        --error-color: #d32f2f;
                    }

                    .min-h-screen {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        padding: 20px;
                        background: linear-gradient(to bottom, var(--green-light), #ffffff);
                    }

                    .container {
                        width: 100%;
                        max-width: 400px;
                        background-color: #ffffff;
                        padding: 2rem;
                        border-radius: 10px;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        border: 1px solid var(--green-light);
                    }

                    .header {
                        text-align: center;
                        margin-bottom: 2rem;
                    }

                    .header img {
                        margin: 0 auto;
                    }

                    .header h2 {
                        font-size: 1.875rem;
                        font-weight: 700;
                        color: var(--gray-dark);
                        margin: 1rem 0;
                    }

                    .header h3 {
                        font-size: 1.25rem;
                        font-weight: 600;
                        color: var(--green-dark);
                        margin: 0.5rem 0;
                    }

                    .header p {
                        font-size: 0.875rem;
                        color: var(--gray-medium);
                    }

                    .input-container {
                        margin-bottom: 1.5rem;
                    }

                    .input-label {
                        font-size: 0.875rem;
                        font-weight: 500;
                        color: var(--gray-dark);
                        margin-bottom: 0.5rem;
                        display: block;
                    }

                    .input {
                        width: 100%;
                        padding: 0.75rem 1rem;
                        border: 1px solid var(--gray-light);
                        border-radius: 5px;
                        font-size: 0.875rem;
                        color: var(--gray-dark);
                        transition: border-color 0.2s, box-shadow 0.2s;
                    }

                    .input:focus {
                        border-color: var(--green-medium);
                        box-shadow: 0 0 0 2px rgba(129, 199, 132, 0.4);
                        outline: none;
                    }

                    .btn-primary {
                        width: 100%;
                        padding: 0.75rem 1rem;
                        background-color: var(--green-medium);
                        color: #ffffff;
                        font-size: 1rem;
                        font-weight: 600;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        transition: background-color 0.2s;
                        position: relative;
                    }

                    .btn-primary:disabled {
                        background-color: var(--gray-medium);
                        cursor: not-allowed;
                    }

                    .btn-primary:not(:disabled):hover {
                        background-color: var(--green-dark);
                    }

                    .error-message {
                        color: var(--error-color);
                        font-size: 0.875rem;
                        margin-top: 1rem;
                        text-align: center;
                    }

                    .register-link {
                        text-align: center;
                        margin-top: 1.5rem;
                        font-size: 0.875rem;
                        color: var(--green-dark);
                        cursor: pointer;
                        transition: color 0.2s;
                    }

                    .register-link:hover {
                        color: var(--green-medium);
                    }
                `}
            </style>

            <div className="container">
                <div className="header">
                    <Link to="/about">
                        <img 
                            alt="logo" 
                            src='logo-removebg-preview.png' 
                            width="50" 
                            height="50" 
                        />
                    </Link>
                    <h2>WasteWise Manager</h2>
                    <h3>Connexion</h3>
                    <p>Accédez à votre tableau de bord de gestion des déchets</p>
                </div>

                <form onSubmit={handleLogin}>
                    <div className="input-container">
                        <label className="input-label">Email professionnel</label>
                        <input
                            type="email"
                            className="input"
                            placeholder="exemple@entreprise.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-container">
                        <label className="input-label">Mot de passe</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button 
                        type="submit" 
                        className="btn-primary"
                        disabled={loading}
                    >
                        {loading ? 'Connexion...' : 'Se connecter'}
                    </button>
                </form>

                <Link to="/register" className="register-link">
                    <div>
                        Nouveau dans la gestion intelligente des déchets ? S'inscrire
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Login;