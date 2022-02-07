import React, {useMemo, useState} from "react";
import {useCounter} from "../../hooks/useCounter";
import {processSlow} from "../../helpers/SlowProcess";
import '../useEffect/effects.css'

export const MemoHook = () => {

    const {counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoSlowProcess = useMemo(() => processSlow(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr/>
            <p> { memoSlowProcess }</p>
            <button className="btn btn-primary" onClick={increment}>
                + 1
            </button>
            <button className="btn btn-outline-primary ml-10" onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify( show )}
            </button>
        </div>
    )
}