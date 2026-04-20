import React, { useState } from "react";
import IncidentPage from "./pages/IncidentPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const userAuth = useState(false);

  return (
    <div>
      {userAuth ? (
        <IncidentPage />
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;