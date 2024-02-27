
import axios from "axios"


const ProductsApi= () => {
    const fetchData = async() => {
        // hit the server using axios
        // axios.get('https://fakestoreapi.com/products')
        // .then(res=>console.log(res))
        // .catch(err => console.log(err))

        // hit the server using fetch
        // fetch('https://fakestoreapi.com/products')
        // .then(response => response.json())
        // .then(response => console.log(response))

        // hit the server by using axios by async await
        // const result = await axios.get('https://fakestoreapi.com/products')
        // console.log(result)

        // hit the server by using fetch by async await
        // let response1 =await fetch('https://fakestoreapi.com/products')
        // let finalresponse = await response1.json()
        // console.log(finalresponse)


    }   

    return(
        <>
    <button onClick={fetchData}>Fetch data </button>

        </>
    )
}

export default ProductsApi