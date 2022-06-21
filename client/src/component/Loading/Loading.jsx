import React from 'react'
import s from '../Loading/Loading.module.css'
function Loading() {

    return (

        <div className={s.conteiner}>
            <div className={s.containersecond}>

            </div>
            <div className={s.containerthird}>
                <h1>CARGANDO</h1>
                <span className={s.loader}></span>

            </div>
            <div className={s.containersecond}>

            </div>

        </div>
    )

}

export default Loading;