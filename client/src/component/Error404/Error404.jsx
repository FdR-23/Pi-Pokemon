import React from 'react';
import img from '../../Imagenes/ERROR404.png';
import s from '../Error404/Error404.module.css'
function Error404() {

    return (
        <div >
<img src={img} alt="ERROR404" className={s.imgerror}  />

        </div>
    )
}

export default Error404;