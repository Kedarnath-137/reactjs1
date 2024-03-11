import Header from "../../component/functional-component/bootstarp/header"
import UseMemoEx1 from "../../component/functional-component/hooks/useMemo/useMemo-ex1"
import UseReducer from "../../component/functional-component/useReducer/useReducer-ex1"




const ProfileScreen = ()=>{

    return(
        <>
       <Header/>
        <h2>Profile Screen</h2>
        {/* <UseReducer/> */}

        <UseMemoEx1/>
        </>
    )
}

export default ProfileScreen