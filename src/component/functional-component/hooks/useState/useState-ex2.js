import { useState } from "react"





const UseStateExample2 = ()=>{
    const [timer,setTimer]=useState(0)

    const handleTimer = ()=>{

        setInterval(() => {
            setTimer(timer => timer +1)    // based on pervious one or multiple times to run we use function
        }, 1000);
    }
    return(
        <>
        <h1>Current timer {timer}</h1>
        <button onClick={handleTimer}>click to start time</button>

        </>
    )
}

export default UseStateExample2
