import React, { useState } from "react";

export default function Password({ name, age, cars }) {
    const [state, setState] = useState();

    function getpassword() {
        const chars = "0123456789";
        const passwordlength = 25;
        let password = "";
        for (var i = 0; i < passwordlength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        setState(password);
    }
    return (
        <>
            <button onClick={getpassword}>new password</button>
            <input type="text" value={state}></input>
        </>
    )
}