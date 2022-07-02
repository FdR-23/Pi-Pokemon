import React from "react";
import s from '../Card/Card.module.css'
import { Link } from "react-router-dom";

function Card({ name, types, image, id }) {
    return (

        <div className={s.card}>


            <h2 className={s.title}>{name}</h2>



            <Link to={`/pokemons/${id}`}>

                <img className={s.img} src={image} alt="imagen pokemon" />

            </Link>



            <h3 className={s.types}>Type: {types}</h3>



        </div>
    )

}


export default Card;
