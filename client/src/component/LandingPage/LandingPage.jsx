import React, { useState } from "react";


import s from '../LandingPage/LandingPage.module.css'

import img from '../../Imagenes/pngwing.png'
import Loading from "../Loading/Loading";
import { useHistory } from 'react-router-dom'

import pikachusond from "../../sonido/soundPikachu.mp3"

function LandigPage() {

    const [loading, setLoading] = useState(false)
    const history = useHistory();


    var audio = new Audio(pikachusond)

    const start = () => {
        audio.play()
    }





    function handleChange() {

        setLoading(true)
        start();
        setTimeout(() => {
            setLoading(false)
            history.push('/home')
        }, 1000);
    }

    if (loading) {
        return (<Loading></Loading>)
    }

    return (
        <div className={s.containter}>

            <div className={s.title}>
                <h1>Pi Pokemon</h1>
            </div>

            <div className={s.enter}>
                <img className={s.img} src={img} alt="" />
                <button className={s.bn} onClick={() => handleChange()}>Entrar</button>

            </div>
     
        </div>
    )

}


export default LandigPage;
