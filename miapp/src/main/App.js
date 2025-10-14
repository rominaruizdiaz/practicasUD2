import './App.css';
import Header from '../header/Header.js';
import Footer from '../footer/Footer.js';
import MiLista from '../miLista/MiLista.js';

function App() {
  return (
    <>
      <Header/>
      <h1>Hola Mundo</h1>
      <h2>Este es mi primer componente React</h2>
      <div className='parrafo'>
        <p>Bienvenido a mi aplicación, esot fue creado con Javascript en React</p>
      </div>
      <br/>
      <MiLista
      titulo="Clientes"
      nombre1="Deva"
      nombre2="Christian"
      nombre3="Roberto"
      nombre4="Noe"/>
      <br/>
      <MiLista
      titulo="Amigos"
      nombre1="Elisse"
      nombre2="Rocio"
      nombre3="Tomas"
      nombre4="Iker"/>
      <br/>
      <MiLista
      titulo="Familiares"
      nombre1="Nicolas"
      nombre2="Valentina"
      nombre3="Jano"
      nombre4="Gabriel"/>
      <Footer/>

    </>
  );
}

export default App;
