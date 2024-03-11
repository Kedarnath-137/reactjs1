import { useContext } from "react"
import Header from "../../component/functional-component/bootstarp/header"
import { UserDetails } from "../navigation"






const SettingScreen = ()=>{
            const userInfo =useContext(UserDetails)
            console.log(userInfo);
    return(
        <>
         <Header/>
        <h2>Setting Screen</h2>
        <h2>{userInfo.username}</h2>
        </>
    )
}

export default SettingScreen