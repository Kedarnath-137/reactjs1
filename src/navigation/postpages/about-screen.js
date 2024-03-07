import { useContext } from "react"
import Header from "../../component/functional-component/bootstarp/header"
import ComponentA from "../../component/functional-component/context/ComponentA"
import { UserDetails } from "../navigation"




const AboutScreen = ()=>{
    let globalInfo =useContext(UserDetails);
    console.log(globalInfo);
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
        </>
    )
}

export default AboutScreen