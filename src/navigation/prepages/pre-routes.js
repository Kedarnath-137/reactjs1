
import { Route, Routes } from "react-router-dom";
import LoginScreen from "./login-screen";
import InvalidScreen from "../postpages/invalid-screen";



const PreRoute = ()=>{
    return(
        <Routes>
            <Route path="/" Component={LoginScreen}  />
            <Route path='*' Component={InvalidScreen}/>
        </Routes>
       
    )
}

export default PreRoute;