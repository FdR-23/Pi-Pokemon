import React, { useState } from 'react'
import { useEffect } from 'react';
import { getTypes, filterByType, filterByOrigin, filterAscDes, filterByAttack } from '../../redux/actions/index.js'
import { useDispatch, useSelector } from 'react-redux';

import { getByName } from '../../redux/actions/index.js'
import s from '../Filtros/Filtros.module.css'

function Filtros({ setpage }) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    const [name, setName] = useState('');

    const allpoke = useSelector((state) => state.copyPokemos);
    const allpokefilterd = useSelector((state) => state.pokemons);
    const poketypes = useSelector((state) => state.pokemosType);

    function handleFilterByType(e) {
       
        e.preventDefault();
        dispatch(filterByType(e.target.value, allpoke))
        setpage(1);
    };

    function handleFilterByOrigi(e) {
    
        e.preventDefault();
        dispatch(filterByOrigin(e.target.value, allpoke));
        setpage(1);
    }
    function handleFilterAscDes(e) {
        if (e.target.value === "All") { return }
        e.preventDefault();
        dispatch(filterAscDes(e.target.value, allpokefilterd));
        setpage(1);
    }

    function handleFilterPower(e) {
        if (e.target.value === "Select") { return }
        e.preventDefault();
        dispatch(filterByAttack(e.target.value, allpokefilterd));
        setpage(1);
    }


    function handleChance(e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getByName(name));
        setName(''); // para que uan vez que escriba el pokemon y lo despache el input aparesca en blanco
        setpage(1);
    }

    return (
        <div className={s.container}>

            <div className={s.divTitle}>
                <h3>Filters</h3>
            </div>

            <div>
                <label > Types: </label>

                <select onChange={handleFilterByType}>
                    <option value='All'>All</option>

                    {poketypes && poketypes.map((p, index) => (
                        <option key={index} value={p.name}>{p.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label >Create By: </label>

                <select onChange={handleFilterByOrigi}>
                    <option value="All">All</option>
                    <option value="ByAPI">By-Api</option>
                    <option value="createdInDb">By-DB</option>

                </select>
            </div>
            <div>
                <label >Order By: </label>
                <select onChange={handleFilterAscDes}>
                    <option value="All">Order</option>
                    <option value="Asc">A - Z</option>
                    <option value="Des">Z - A</option>

                </select>
            </div>
            <div>
                <label >Order By attack: </label>

                <select onChange={(e) => handleFilterPower(e)}>
                    <option value="Select">Power</option>
                    <option value="MaxPower">Asc</option>
                    <option value="MinPower">Des</option>

                </select>
            </div>


            <div className="seach_nav">

             
                    <label>Search By Name: <input 
                        value={name}
                        onChange={(e) => handleChance(e)}
                        type="text"
                        autoComplete="on"
                        placeholder="Name..." /> </label>

                    <input className={s.bnbsearch} id="query"  onClick={handleSubmit} type="submit" value="Search" />

               
            </div>
        </div>


    )
}
export default Filtros;