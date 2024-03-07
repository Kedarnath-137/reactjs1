import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner1 from "../../component/functional-component/bootstarp/spinner";






const ProductDetail = ()=>{
    const routeInformation = useParams();
    console.log(routeInformation);
    const[product, setProduct] = useState({})
        useEffect(()=>{
            // fetch the data releated to the product
            fetchData()

            // axios.get(`https://fakestoreapi.com/products/${routeInformation.id}`)
            // .then((response) =>{
            //     if(response.status == 200){
            //         setProduct(response.data)
            //     }
            // })

        },[routeInformation.id])
        
        const fetchData = ()=>{
            axios.get(`https://fakestoreapi.com/products/${routeInformation.id}`)
            .then((response) =>{
                if(response.status == 200){
                    setProduct(response.data)
                }
            })
        }

        // we can write code inside the usezeffect or outside the useEffect.
        
    return(
        <>
        
        <h3>hii iam each product detail</h3>
        {
            Object.keys(product).length>0
            ?
            
            <>
            <h1>{product.title}</h1>
            <img src= {product.image} width={100} height = {100} />
            <h2 style={{color:"red"}}>₹{product.price}</h2>
            <h2>{product.description}</h2>
            </>
            
            :
           <Spinner1></Spinner1>
        }

        </>

    )
}

export default ProductDetail;

// we should not use map here because it is not a list.
// it is a each object.
