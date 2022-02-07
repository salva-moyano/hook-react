import React from "react";
import '../useEffect/effects.css'
import {useRef} from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = (e) => {
        inputRef.current?.select()
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Name"
            />

            <button className="btn btn-outline-primary mt-2" onClick={handleClick}>
                Focus
            </button>
        </div>
    )
}