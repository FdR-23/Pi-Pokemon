import React from "react";
import s from '../Card/Card.module.css'
import { Link } from "react-router-dom";

function Card({ name, types, image, id }) {
    return (

        <div className={s.card}>
            <div className={s.title}>

                <h2 >{name}</h2>
            </div>

            <div >
                <Link to={`/pokemons/${id}`}>

                    <img className={s.img} src={image} alt="imagen pokemon" />

                </Link>

                <div className={s.types}>

                    <h3>Type: {types}</h3>
                </div>
            </div>

        </div>
    )

}


export default Card;
