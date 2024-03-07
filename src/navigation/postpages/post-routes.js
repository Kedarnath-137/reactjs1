import { Route, Routes } from "react-router-dom";
import AboutScreen from "./about-screen";
import HomeScreen from "./home-screen";
import InvalidScreen from "./invalid-screen";
import ProfileScreen from "./profile-screen";
import SettingScreen from "./setting-screen";
import ProductDetail from "./product-details";




const PostRoute = () =>{
    return(

        <Routes>
                <Route path="/" Component={HomeScreen}/>
                <Route path="/setting" Component={SettingScreen}/>
                <Route path="/about" Component={AboutScreen}/>
                <Route path="/profile" Component={ProfileScreen}/>
                <Route path="*" Component={InvalidScreen}/>

                <Route path="/:category/:id" Component={ProductDetail}/>

         </Routes>
    )
}

export default PostRoute;


//productDetails
// it is a dynamic route
// for eg: path='hyderabad/:ui' ui is a variable, hyderabad is the static.