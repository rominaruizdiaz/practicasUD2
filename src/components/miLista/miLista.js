import './miLista.css';

//función que siempre retorna un único componente
function miLista(props){
    return(
        //se puede poner <></> que se llaman fragmentos, o dentro de un <div></div>
        <>
            <h4>Mi lista de {props.titulo}</h4>
            <ul>
                <li>{props.nombre1}</li>
                <li>{props.nombre2}</li>
                <li>{props.nombre3}</li>
                <li>{props.nombre4}</li>
            </ul>
        </>
    )
}

//por defecto debe tener
export default miLista