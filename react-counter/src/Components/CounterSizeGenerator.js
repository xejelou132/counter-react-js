import { useState } from "react";
import "../Styles/counter.css"

function CounterSizeGenerator(props) {
    
    const [size, setSize] = useState(0);

    function handleChangeSize(event) {
        setSize(parseInt(event.target.value));
        props.updateCounterSize(parseInt(event.target.value));
    }

    return(
        
        <div className = "divSize">
            <span>Size:</span>
            <input type = "number" min = "0" value = {size} onChange = {handleChangeSize}></input>
        </div>
        
    );

}

export default CounterSizeGenerator;