import React, { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import IncidentPage from "./pages/IncidentPage";

import { jwtDecode } from "jwt-decode";
import { Routes, Route } from "react-router-dom";

import IncidentListPage from "./pages/IncidentListPage";
import IncidentCreatePage from "./pages/IncidentCreatePage";
import MenuNav from "./components/features/nav/MenuNav";

function App() {
  const LOGIN_API_URL = "http://localhost:3004/login";
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);

  const onLogin = async (email, password) => {
    try {
      const response = await fetch(LOGIN_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();

        localStorage.setItem("authToken", userData.accessToken);
        setUsuarioLogueado(userData.user);
      } else {
        alert("Error login");
      }
    } catch {
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
      } catch {
        localStorage.removeItem("authToken");
      }
    }
  }, []);

  return (
    <div>
      {!usuarioLogueado ? (
        <LoginPage onLogin={onLogin} />
      ) : (
        <>
          <MenuNav setUsuarioLogueado={setUsuarioLogueado} onLogout={onLogout} />

          <Routes>
            <Route
              path="/"
              element={<IncidentPage />}
            >
              <Route path="incidencias" element={<IncidentListPage />} />
              <Route path="registrar" element={<IncidentCreatePage />} />
            </Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;