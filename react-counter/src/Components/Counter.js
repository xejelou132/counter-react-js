  
import React, { useState } from "react";
import "../Styles/counter.css"

function Counter(){
    const [number, setNumber] = useState(0);

    return (
        <div className="counter">
            <button  onClick = {increase}>&nbsp;+&nbsp;</button>
            <span>&nbsp;&nbsp;{number}&nbsp;&nbsp;</span>
            <button  onClick = {decrease}>&nbsp;-&nbsp;</button>
        </div>
    );

    function increase() {
        setNumber(number + 1);
    }

    function decrease() {
        setNumber(number - 1);
    }
}


export default Counter;