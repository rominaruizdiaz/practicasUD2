import React from 'react';
import './MiLista.css';

class MiLista extends React.Component {
  render(){
    return (
      <div className='lista'>
        <h3>Mi lista de {this.props.titulo}:</h3>
        <ul>
          <li>{this.props.nombre1}</li>
          <li>{this.props.nombre2}</li>
          <li>{this.props.nombre3}</li>
          <li>{this.props.nombre4}</li>
        </ul>
      </div>
    );
  }
}

export default MiLista;
