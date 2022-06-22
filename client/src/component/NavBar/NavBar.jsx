import React from "react"

import s from "../NavBar/NavBar.module.css"
import img from '../../Imagenes/pikachu2.png'
import { Link } from 'react-router-dom'

//import {getAllPokemons} from '../../redux/actions'
import { useDispatch } from "react-redux";



function NavBar() {

    //const dispatch = useDispatch();



    function handleClick(e) {
        e.preventDefault();
     //   dispatch(getAllPokemons()); // me refresca solo la home
        window.location.reload(); // refresca toda la pagina
    }


    return (
        <div className={s.container}>
            <div className={s.titlenav}>
                <h1 >Pi PoKeMoNs </h1>
            </div>

            <div className={s.secontcontain}>

                <div  className={s.bnbreload}>
                    <img src={img} className={s.img} alt='pichacu con gorra'/>
                    <Link to='/home'>
                        <button>Back Home</button>
                    </Link>
                </div>

                <div>

                    <Link to='/create'>
                        <button>Creat Pokemon</button>
                    </Link>

                </div>

                <div>
                    <button onClick={(e) => handleClick(e)}>Reoload Page ↻ </button>
                </div>

            </div>



        </div>

    )
}


export default NavBar;