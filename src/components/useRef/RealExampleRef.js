import React, {useEffect, useState} from "react";
import '../useEffect/effects.css'
import {useRef} from "react";
import {MultipleCustomHooks} from "../examples/MultipleCustomHooks";

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button className="btn btn-outline-primary mt-5" onClick={() => setShow(!show)}>
                Show/Hide
            </button>
        </div>
    )
}