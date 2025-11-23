import React from "react";
import Logo from "../../img/logoIES.png";

class Header extends React.Component {
    render() {
        return (
            <div className="bg-dark text-white text-center p-3">
                <img src={Logo} alt="Logo del IES" width="100px" />
                <h3>Bienvenido a la página de incidencias</h3>
            </div>
        );
    }
}

export default Header;
