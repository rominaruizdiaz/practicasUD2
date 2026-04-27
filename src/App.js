import React, { useState, useEffect } from "react";
import IncidentPage from "./pages/IncidentPage";
import LoginPage from "./pages/LoginPage";

import { jwtDecode } from "jwt-decode";

function App() {
  const LOGIN_API_URL = "http://localhost:3004/login";
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);

  const onLogin = async (email, password) => {
    try {
      const response = await fetch(LOGIN_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();

        localStorage.setItem("authToken", userData.accessToken);

        setUsuarioLogueado(userData.user);
      } else {
        const errorData = await response.json();
        alert(`Error ${response.status}: ${JSON.stringify(errorData)}`);
      }
    } catch (error) {
      alert("No se puede conectar con el servidor");
    }
  };

  const onLogout = () => {
    localStorage.removeItem("authToken");
    setUsuarioLogueado(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        const decoded = jwtDecode(token);

        setUsuarioLogueado({
          email: decoded.email,
          id: decoded.sub,
        });
      } catch (e) {
        console.error("Token inválido");
        localStorage.removeItem("authToken");
      }
    }
  }, []);

  return (
    <div>
      {!usuarioLogueado ? (
        <aside>
          <LoginPage onLogin={onLogin} />
        </aside>
      ) : (
        <IncidentPage onLogout={onLogout} />
      )}
    </div>
  );
}

export default App;