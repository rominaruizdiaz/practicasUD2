import Header from "../components/ui/header/Header.js";
import Footer from "../components/ui/footer/Footer.js";
import Fondo from "../assets/fondo.png";
import { Outlet } from "react-router-dom";

function IncidentPage() {
  return (
    <div
      className="card bg-light p-4 position-relative"
      style={{
        backgroundImage: `url(${Fondo})`,
        backgroundSize: "auto",
        backgroundRepeat: "repeat",
        minHeight: "100vh",
      }}
    >
      <Header />

      <h2 className="mb-4 text-center">
        <span className="bg-white text-dark p-2 rounded d-inline-block">
          Mi aplicación
        </span>
      </h2>

      <div className="container-fluid mt-4">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default IncidentPage;