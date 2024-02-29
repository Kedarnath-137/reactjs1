import { useState } from "react";




const UseStateExample = ()=>{
    const[currentCount,setCurrentCount]=useState(0)

    const handleIncrement = (value)=>{
        // console.log(currentCount, "currentcount");
        setCurrentCount(currentCount+value)    // currentCount++ it is wrong we should do reassignment

        setCurrentCount(sai => sai+1)
        setCurrentCount(sai => sai+1)
    }

    const handleDecrement = () => {
        setCurrentCount(currentCount-1)
    }

    const reset = ()=>{
        setCurrentCount(0)
    }
    return(
        <>
        <h1>jai shree ram</h1>
        <h1>{currentCount}</h1>
        <button onClick={()=>handleIncrement(10)}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        
        </>

    ) 
}
export default UseStateExample;

