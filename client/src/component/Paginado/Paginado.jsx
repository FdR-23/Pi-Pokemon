import React from "react";
import s from "../Paginado/Paginado.module.css"

function Paginado({ pokemonsPerPag, allpoke, paginado }) {

    const numbersPag = [];

    for (let i = 1; i <= Math.ceil(allpoke / pokemonsPerPag); i++) {
        numbersPag.push(i);

    }

    return (

        //nav proporcionar enlaces de navegación
        <nav>
            <ul className={s.pagination}>
                {numbersPag && numbersPag.map((numero) =>(
                    <li key ={numero} >
                        <a className={s.active} href="#" onClick={()=>paginado(numero)}>{numero}</a>
                    </li>
                ))}

            </ul>
        </nav>
    )
    
}


export default Paginado;