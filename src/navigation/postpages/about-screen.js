import { useContext } from "react"
import Header from "../../component/functional-component/bootstarp/header"
import ComponentA from "../../component/functional-component/context/ComponentA"
import { UserDetails } from "../navigation"
import useCounter from "../../component/functional-component/hooks/customHook/useCounter"




const AboutScreen = ()=>{
    let globalInfo =useContext(UserDetails);
        const [count,setCount]=useCounter()
    // console.log(globalInfo);
    let changedName = () =>{
        globalInfo.changeName()
    }
    return(
        <>
        <Header/>
        <h2>About Screen</h2>
        <ComponentA  />
     <h3>iam from navigation.js , global info {globalInfo.username}</h3>
        <button onClick={changedName}>click to change name</button> 

        <h4>{count}</h4>
        <button onClick={setCount}>increment</button>
        </>
    )
}

export default AboutScreen