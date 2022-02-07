import React, {useContext} from "react";
import {UserContext} from "./UserContext";

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext);

    const handleLoginClick = () => {
        setUser({
            id: new Date().getTime(),
            name: 'salva'
        })
    }

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>
            <button className="btn btn-outline-success" onClick={ handleLoginClick }>
                Login
            </button>
        </div>
    )
}