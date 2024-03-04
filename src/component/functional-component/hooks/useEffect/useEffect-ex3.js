import { useEffect, useState } from "react"





const UseEffect3 =()=>{
    const[count,setCount] = useState(0)
    useEffect(()=>{
        DomManipulation()
    },[count])
    const DomManipulation=()=>{
        document.title=`currentCount ${count}`
    }
    let handleCount=()=>{
        setCount(count+1)
    }
    return(
        <>
        <h2> DomManipulation</h2>
        <h3>count {count}</h3>
        <button onClick={handleCount}>click to incrementcount</button>
        
        </>
    )
}

export default UseEffect3;