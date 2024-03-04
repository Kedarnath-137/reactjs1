import { useEffect, useState } from "react"

const UseEffectExample =() =>{
    const [counter,setCounter] = useState(0)
    const [counter1,setCounter1] = useState(10)
    useEffect(() => {
            console.log("useEffect0");
            },[counter]) 
    
    
   
    const handleCounter =()=>{
        setCounter(counter+1)
    }
    const handleCounter1=()=>{
        setCounter1(counter1+1)
    }

    return(
        <>
        <h1>jai shree ram</h1>
        <button onClick={handleCounter}>click here {counter}</button>
        <h3>counter-01 {counter1}</h3>
        <button onClick={handleCounter1}>click here to counter1</button>
        </>
    )
}
export default UseEffectExample;