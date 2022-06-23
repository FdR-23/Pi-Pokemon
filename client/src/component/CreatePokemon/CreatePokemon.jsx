import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { getTypes, PostPokemons } from '../../redux/actions/index.js'


import NavBar from "../NavBar/NavBar.jsx";
import styles from './CreatePokemon.module.css';
import Validate from './Validate.jsx';
function CreatePokemon() {

    const history = useHistory();
    const dispatch = useDispatch();

    const typesPoke = useSelector((state) => state.pokemosType);


    const [errors, setErrors] = useState({

    })
    const [input, setInput] = useState({
        name: '',
        image: undefined,
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: []
    });


    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setErrors(Validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        
    }


    function handleSelect(e) {
        if (e.target.value === "Select") {
            return
        }
        if (input.types.length > 1) {
            return
        }
        if (input.types.includes(e.target.value)) {
            return 'ya existe ese tipo'
        } else
        setInput({
            ...input, types: [...input.types, e.target.value,]
        })
            setErrors(Validate({
                ...input,
                types: [...input.types, e.target.value,]
            }))
            

    }

    function handleDeletTypes(tipe) {
        setInput({
            ...input,
            types: input.types.filter((type) => type !== tipe),
        });
    };

    function handleSubmit(e) {
        e.preventDefault();

        if (Object.keys(errors).length !== 0) {
            alert('There are still errors, " Please try again "')
        } else {

            dispatch(PostPokemons(input))

            alert('Successfully created Pokemon')
            history.push("/home")
        }
    }
    console.log(input.types)
console.log(errors)

    return (
        <div className={styles.containerAll}>
            <NavBar></NavBar>


            <h2 className={styles.title}>CREATE POKEMON</h2>



            <div className={styles.contenedorForm}>
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.Form}>
                        <div className={styles.divLeft}>

                            <div className={styles.insertInfo}>
                                <label htmlFor="">Name: </label>
                                <input
                                    type="text"
                                    name='name'
                                    value={input.name}
                                    onChange={handleChange}
                                    placeholder='Name'
                                    maxLength="20"
                                    className={styles.inputs}
                                />

                            </div>
                            <div className={styles.error}>
                                {errors.name ? <span >  {errors.name}</span> : null}
                            </div>

                            <div className={styles.insertInfo}>
                                <label htmlFor="">Image: </label>
                                <input
                                    type="text"
                                    name='image'
                                    value={input.image}
                                    onChange={handleChange}
                                    placeholder='https:/'
                                    className={styles.inputs}
                                />
                            </div>
                            <div className={styles.error}>
                                {errors.image ? <span className={styles.error}>  {errors.image}</span> : null}
                            </div>

                            <div className={styles.insertInfo}>
                                <label htmlFor="">Hp:</label>
                                <input
                                    type="number"
                                    name='hp'
                                    value={input.hp}
                                    onChange={handleChange}
                                    placeholder='Min-1 Max-99'
                                    className={styles.inputs}

                                />
                            </div>

                            <div className={styles.error}>
                                {errors.hp ? <span className={styles.error}>  {errors.hp}</span> : null}
                            </div>

                            <div className={styles.insertInfo}>
                                <label htmlFor="">Attack: </label>
                                <input
                                    type="number"
                                    name='attack'
                                    value={input.attack}
                                    onChange={handleChange}
                                    placeholder='Min-1 Max-150'
                                    className={styles.inputs}
                                />
                            </div>

                            <div className={styles.error}>
                                {errors.attack ? <span className={styles.error}>  {errors.attack}</span> : null}
                            </div>

                            <div className={styles.insertInfo}>
                                <label htmlFor="">Defense: </label>
                                <input
                                    type="number"
                                    name='defense'
                                    value={input.defense}
                                    onChange={handleChange}
                                    placeholder='Min-1 Max-150'
                                    className={styles.inputs}
                                />

                            </div>

                            <div className={styles.error}>
                                {errors.defense ? <span className={styles.error}>{errors.defense}</span> : null}
                            </div>

                        </div>
                        <div className={styles.divRigth}>
                            <div className={styles.insertInfo}>
                                <label htmlFor="">Speed: </label>
                                <input
                                    type="number"
                                    name='speed'
                                    value={input.speed}
                                    onChange={handleChange}
                                    placeholder='Min-1 Max-70'
                                    className={styles.inputs}
                                />

                            </div>

                            <div className={styles.error}>
                                {errors.speed ? <span className={styles.error}>{errors.speed}</span> : null}
                            </div>

                            <div className={styles.insertInfo}>
                                <label htmlFor="">Height: </label>
                                <input
                                    type="number"
                                    name='height'
                                    value={input.height}
                                    onChange={handleChange}
                                    placeholder='Min-1 Max-180'
                                    className={styles.inputs}
                                />
                            </div>

                            <div className={styles.error}>
                                {errors.height ? <span className={styles.error}>{errors.height}</span> : null}
                            </div>

                            <div className={styles.insertInfo}>
                                <label htmlFor="">Weight: </label>
                                <input
                                    type="number"
                                    name='weight'
                                    value={input.weight}
                                    onChange={handleChange}
                                    placeholder='Min-1 Max-200'
                                    className={styles.inputs}

                                />
                            </div>

                            <div className={styles.error}>
                                {errors.weight ? <span className={styles.error}>{errors.weight}</span> : null}
                            </div>

                            <div className={styles.insertInfo}>
                                <label htmlFor="">Types: </label>
                                
                                <select onChange={(e)=>handleSelect(e)} >
                                    <option value="Select">Select</option>

                                    {typesPoke?.map((type) =>
                                        <option key={type.id} value={type.name}>{type.name}</option>
                                    )}
                                </select>
                            </div>

                            <div className={styles.error}>
                                {errors.types && errors.types ? <span className={styles.error}>{errors.types}</span> : null}
                            </div>

                            <div className={styles.containerviewtypes}>

                                {input.types?.map((tipe) =>
                                    <div className={styles.viewtype} key={tipe}> {tipe}
                                        <button className={styles.bndelet} onClick={() => handleDeletTypes(tipe)}>X</button>
                                    </div>
                                )}

                            </div>

                        </div>
                    </div>



                    <div className={styles.containterbnCreate}>
                        <button className={styles.bnCreate} type="submit" >Crear PoKemon</button>
                    </div>

                </form>



            </div>


        </div>

    )
}

export default CreatePokemon