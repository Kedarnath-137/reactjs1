import { useMemo, useState } from "react"




const UseMemoEx1 = () =>{
    const [counter1, setcounter1] = useState(1)
    const [counter2, setcounter2] = useState(1)

    const incrementCounter1=() =>{
        setcounter1(counter1+1)
    }

    const incrementCounter2=() =>{
        setcounter2(counter2+1)
    }
    const evenChecker = useMemo(() => {
        console.log('even checker calling');
        return counter1% 2 ===0? 'even' :'odd'
    },[counter1])
    
    return(
        <>
        <h4> counter1 {counter1}</h4>
        <h4> counter2 {counter2}</h4>
        <h3>{evenChecker}</h3>
        <button onClick={incrementCounter1}>Click to increment counter1</button>
        <button onClick={incrementCounter2}>Click to increment Counter2</button>
        </>

    )
}

export default UseMemoEx1;