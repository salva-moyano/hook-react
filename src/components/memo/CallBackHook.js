import React, {useCallback, useEffect, useState} from "react";
import '../useEffect/effects.css'
import {ShowIncrement} from "./ShowIncrement";

/*
* 1. Uso, cuando tenemos que llamar a otro componente y el componente está renderizado (memorizado)
* si no lo llamamos con el useCallback siempre está regenerando el componente (haciendo que sea una nueva versión
* del componente).
*
* 2. Cuando tenemos un useEffect y esa dependencia es una función tenemos que utilizar el useCallBack para crear
* la función.
*   useEffect(() => {
*    }, [increment(1)]);
*
* */
export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback((num) => {
        setCounter(c => c + num);
    },[setCounter]);

    return (
        <div>
            <h1>CallBack Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment }/>

        </div>
    )
}