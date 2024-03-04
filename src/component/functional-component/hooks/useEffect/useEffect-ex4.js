import { useEffect } from "react"





const UseEffect4 = ()=>{

    useEffect(()=>{
        window.addEventListener('click',(event)=>{
            
        })
    },[])
    return(
        <>
        <h1>componentWillUnmount</h1>

        
        </>
    )
}

export default UseEffect4