import { useContext } from "react"
import Header from "../../component/functional-component/bootstarp/header"
import { UserDetails } from "../navigation"
import ParentMemo from "../../component/functional-component/memo/parent"
import ProfileExample from "../../component/functional-component/hooks/useCallback/useCallback-ex1"






const SettingScreen = ()=>{
            const userInfo =useContext(UserDetails)
            console.log(userInfo);
    return(
        <>
         <Header/>
        <h2>Setting Screen</h2>
        {/* <h2>{userInfo.username}</h2> */}
        {/* <ParentMemo/> */}

        <ProfileExample/>
        
        </>
    )
}

export default SettingScreen