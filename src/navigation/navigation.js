import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "./postpages/home-screen"
import SettingScreen from "./postpages/setting-screen";
import AboutScreen from "./postpages/about-screen";
import ProfileScreen from "./postpages/profile-screen";
import InvalidScreen from "./postpages/invalid-screen";
import PostRoute from "./postpages/post-routes";
import PreRoute from "./prepages/pre-routes";
import { createContext, useState } from "react";



export const UserDetails = createContext()

const NavigationStack = () =>{
    const [username,setUserName] = useState("surya")

    const changeName = ()=>{
        setUserName("Sai Kumar")
    }
    return(
        
        <BrowserRouter>

        <UserDetails.Provider value={{
            username,
            changeName,
        }} >
            {
                true
                ?
                <PostRoute/>
                :
                <PreRoute/>
            }
        </UserDetails.Provider>

        </BrowserRouter>
        
        
        

    )
}

export default NavigationStack;


//react-router-dom
//pre route
//1.home
//2.about
//3.setting
//4.profile

//post route
//1.login
//2.register
//3.otp
//4.forgot password.