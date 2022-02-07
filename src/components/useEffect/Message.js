import React, {useEffect, useState} from 'react';
import './effects.css'

export const Message = () => {

    const [coors, setCoors] = useState({x:0, y:0});
    const {x, y} = coors;

    useEffect(() => {

        const mouseMove = (e) => {
            const coors = {x:e.x, y: e.y}
            setCoors(coors)
        }

        window.addEventListener('mousemove', mouseMove);
        console.log("message montado");
        return () => {
            window.removeEventListener('mousemove', mouseMove)
            console.log("message desmontado");
        };
    }, []);


    return (
        <div>
            <h3>Eres muy bueno !</h3>
            <p>
                x: {x} y: {y}
            </p>
        </div>
    )
}