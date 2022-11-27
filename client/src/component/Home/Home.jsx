import React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons } from '../../redux/actions/index.js'



import NavBar from "../NavBar/NavBar.jsx";
import Card from "../Card/Card.jsx";
import Paginado from "../Paginado/Paginado.jsx";
import Filtros from "../Filtros/Filtros.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import Loading from "../Loading/Loading.jsx";

import s from '../Home/Home.module.css'


function Home() {

    const dispatch = useDispatch()
    const allpoke = useSelector((state) => state.pokemons);

    const [pagCurrent, setpagCurrent] = useState(1); // mi pagina actual es 1
    const [pokemonsPerPag, ] = useState(12);  // cantidad de pokemons por pagian 12

    const indexLastPoke = pagCurrent * pokemonsPerPag; //el ultimo pokemon por pag va a ser  pagina actual por cant. de pokemons 12
    const indexFirsPoke = indexLastPoke - pokemonsPerPag; //el primer pokemon por pag va a ser indice del ultimo pokemon menos pokmeon por pag 
    const pokemosCurrents = allpoke.slice(indexFirsPoke, indexLastPoke);


    const [loading, setLoading] = useState(true);

    const paginado = (numberPag) => {
        setpagCurrent(numberPag)
    }

    if (pokemosCurrents.length > 0 && loading) {
        setLoading(false)
    }



    useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch])



    return (
        <div className={s.container}>
            <NavBar> </NavBar>
            <Filtros
                setpage={setpagCurrent} />

            <Paginado
                pokemonsPerPag={pokemonsPerPag}
                allpoke={allpoke.length}
                paginado={paginado} />

            <div className={s.listCard}>

                {pokemosCurrents.length > 0 && !loading ?
                    (pokemosCurrents && pokemosCurrents.map(e => {
                        return (
                            <Card
                                key={e.id}
                                id={e.id}
                                name={e.name.toUpperCase()}
                                image={e.image}
                                types={e.types.map(el => " " + el)}
                            />
                        )
                    }
                    )
                    ) : !pokemosCurrents.length > 0 && loading ?
                        (<Loading></Loading>) :
                        <NotFound></NotFound>
                }</div>
             <Paginado
                pokemonsPerPag={pokemonsPerPag}
                allpoke={allpoke.length}
                paginado={paginado} />
        </div>
    )

}

export default Home;
