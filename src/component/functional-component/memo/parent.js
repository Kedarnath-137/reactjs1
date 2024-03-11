



import { useState } from "react"
import Child from "./child"




function ParentMemo(){
    const [counter,setCounter]= useState(0)

    const handleIncrement=()=>{
        setCounter(counter+1)
    }
    return(

        <>
        <h3>{counter}</h3>
        <button onClick={handleIncrement}>click here </button>
        <Child/>
        </>
    )
}

export default ParentMemo;