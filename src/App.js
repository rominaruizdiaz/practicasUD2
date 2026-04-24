import React, { useState, useEffect } from "react";
import IncidentPage from "./pages/IncidentPage";

import LoginPage from "./pages/LoginPage"
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
        console.log(userData);

        setUsuarioLogueado(userData.user);

        localStorage.setItem("user", JSON.stringify(userData.user));

      } else {
        const errorData = await response.json();
        alert(`Error ${response.status}: ${JSON.stringify(errorData)}`);
      }
    } catch (error) {
      alert("No se puede conectar con el servidor");
    }
  };

  useEffect(() => {
    const userGuardado = localStorage.getItem("user");
    if (userGuardado) {
      setUsuarioLogueado(JSON.parse(userGuardado));
    }
  }, []);

  return (
    <div>
      {!usuarioLogueado ? (
        <aside>
          <LoginPage onLogin={onLogin} />
        </aside>
      ) : (
        <>
          <IncidentPage />
        </>
      )}
    </div>
  );
}

export default App;