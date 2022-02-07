import React, {useCallback, useState} from 'react'
import { Child } from './Child'
import '../useEffect/effects.css'

export const Father = () => {

    const numbers = [2,4,6,8,10];
    const [values, setValues] = useState(0);

    const increment = useCallback((num) => {
        setValues( value => value + num )
    },[setValues]);

    return (
        <div>
            <h1>Father</h1>
            <p> Total: { values } </p>

            <hr />

            {
                numbers.map( n => (
                    <Child
                        key={ n }
                        number={ n }
                        increment={ increment }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}