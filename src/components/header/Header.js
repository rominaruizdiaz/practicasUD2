import React from "react";
import Logo from "../../img/logoIES.png";

class Header extends React.Component {
    render() {
        return (
            <div className="bg-primary text-white text-center p-3 border rounded-pill">
            <img className="border rounded-circle bg-white" src={Logo} alt="Logo del IES" width="150px" />
            <h3>Bienvenido a la página de incidencias</h3>
            </div>
        );
    }
}

export default Header;
