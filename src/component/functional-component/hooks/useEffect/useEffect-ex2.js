
import { useEffect, useState } from "react"
import  axios  from "axios"







const UseEffect2 = ()=>{
    const [counter,setCounter]=useState(0)
    const [data,setData]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async ()=>{
        const result = await axios.get('https://dummyjson.com/products')
        console.log(result);
        setData(result.data.products)
    }

    return(
        <>
        <h2>http request</h2>
        <h2>counter {counter}</h2>
        <button onClick={()=>setCounter(counter+1)}>click here add counter</button>
        {
            data.map(item =><h3>{item.title}</h3>)

        }
        </>
    )
}

export default UseEffect2