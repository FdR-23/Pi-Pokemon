import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getById, clearDetail } from '../../redux/actions/index.js'

import s from '../DetailsPokemon/DetailsPokemon.module.css'
import NavBar from '../NavBar/NavBar.jsx';


function DetailsPokemon() {

    const {id} = useParams()
    const dispatch = useDispatch();

    const detailspoke = useSelector((state) => state.pokemonsId);



    useEffect( ()=>{
        dispatch(getById(id))
        return (()=>{
            dispatch(clearDetail())
        })
    } ,[dispatch]
    )



    return (

        <div className={s.containermaster}>

            <NavBar></NavBar>

            <div className={s.title}>

                <label className={s.titledetail}>POKEMON DETAILS</label>
                <label className={s.titlename}>{detailspoke.name}</label>

                <label className={s.titletype}>Type:<span className={s.statname}> {detailspoke.types
                    ? detailspoke.types.map((e) => " " + e).join(" - ")
                    : detailspoke.types}</span></label>
                    
                    <label className={s.titletype}>Abilities:<span className={s.statname}> {detailspoke.abilities
                    ? detailspoke.abilities.map((e) => " " + e).join(" - ")
                    : detailspoke.abilities}</span></label>
            </div>



            <div className={s.container}>


                <div className={s.stat}>
                    <label className={s.titlesStats} >Id: <span className={s.statname}>{detailspoke.id}</span></label>
                    <span className={s.titleStat}>Stats </span>
                    <div className={s.substat}>
                        <label className={s.titlesStats}>HP: <span className={s.statname}>{detailspoke.hp}</span></label>
                        <label className={s.titlesStats}>POWER:  <span className={s.statname}>{detailspoke.attack}</span></label>
                        <label className={s.titlesStats}>DEFENSE:<span className={s.statname}>{detailspoke.defense}</span></label>
                        <label className={s.titlesStats}>SPEED:<span className={s.statname}>{detailspoke.speed}</span></label>
                        <label className={s.titlesStats}>HEIGHT:<span className={s.statname}>{detailspoke.height}</span></label>
                        <label className={s.titlesStats}>WEIGHT:<span className={s.statname}>{detailspoke.weight}</span></label>
                        
                        <label className={s.titletype}>Abilities:<span className={s.statname}> {detailspoke.abilities
                    ? detailspoke.abilities.map((e) => " " + e).join(" - ")
                    : detailspoke.abilities}</span></label>
                    </div>

                </div>

                <div className={s.img}>

                    <img src={detailspoke.image} alt="" />

                </div>
            </div>

        </div>




    )

}


export default DetailsPokemon;