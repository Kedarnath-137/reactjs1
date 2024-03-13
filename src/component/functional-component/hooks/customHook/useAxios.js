import { useState } from "react";

import { useEffect } from "react";

import axios from "axios";


const useAxios = (url) =>{
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    useEffect(()=>{
        try{

       
        axios.get(url)
        .then((response)=>{
         if(response.status == 200){
             setData(response.data)
             // console.log(data);
         }
        })
         .catch((err)=>console.log(err))  // return promise error
    }catch (err){
       console.log(err);
       setError(err) 
    }
    finally{
        // stop the loading  it is a optional
        // whatever may be try or catch  to stop the loading.
        console.log('iam executable');
    }
     },[])

     return [data]

}

export default useAxios;
