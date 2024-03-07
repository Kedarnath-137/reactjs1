import axios from "axios"
import Header from "../../component/functional-component/bootstarp/header"


import { useEffect, useState } from "react"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Spinner1 from "../../component/functional-component/bootstarp/spinner";
import Styling3 from '../../component/functional-component/cssstyles/text.module.css';



const HomeScreen = ()=>{
    const[data, setData] = useState([]) 
    useEffect(()=>{
       axios.get('https://fakestoreapi.com/products')
       .then((response)=>{
        if(response.status == 200){
            setData(response.data)
            // console.log(data);
        }
       })
        .catch((err)=>console.log(err))
    },[])
    return(
        <>
        <Header/>
        <h2>Home Screen</h2>
        {
            data.length>0
            ?
            data.map((eachObject) =>{
                return(
                    <>
                    <CustomCard data={eachObject}/>
                    </>

                )
            })
            :
            <Spinner1></Spinner1>
        }
        </>

    )
}

export default HomeScreen


function CustomCard(props) {
    const {data:{id,title,image,price,category,description}} = props
    
    return (
      <Card style={{ width: '18rem' }} className={Styling3.custom1}>
        <Card.Img variant="top" src={image} style={{width:100, height:100}}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {description}
          </Card.Text>
          <button>
            <Link to= {`/${category}/${id}`}>Navigate to productDetails</Link>
          </button>
        </Card.Body>
      </Card>
    );
  }
  
