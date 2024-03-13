import axios from 'axios';
import Header from '../../component/functional-component/bootstarp/header';

import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Spinner1 from '../../component/functional-component/bootstarp/spinner';
import Styling3 from '../../component/functional-component/cssstyles/text.module.css';
import useAxios from '../../component/functional-component/hooks/customHook/useAxios';
import {
  BASE_PROD_URL,
  endPoints,
} from '../../component/functional-component/endpoints/endpoints';

const HomeScreen = () => {
  // const [data] = useAxios('https://fakestoreapi.com/products') // using custom hook
  const [data] = useAxios(`${BASE_PROD_URL}${endPoints.products}`);
  const [day, setDay] = useState(null);
  const [greet , setGreet] = useState(null)
  console.log(new Date().getDay()); // the output will be 0 to 6 0 means sunday 6 means saturday
  useEffect(() => {
    // console.log(getToday());
    console.log(new Date().getHours()); // the output will be 0 to 23.

    setDay(getToday());
    setGreet(getGreeting())
  }, []);

  function getToday() {
    let day;
    switch (new Date().getDay()) {
      case 0:
        day = 'sunday';
        break;
      case 1:
        day = 'monday';
        break;
      case 2:
        day = 'tuesday';
        break;
      case 3:
        day = 'wednesday';
        break;
      case 4:
        day = 'thursday';
        break;
      case 5:
        day = 'friday';
        break;
      case 6:
        day = 'saturday';
        break;
    }

    return day;
  }

  function getGreeting (){
    const timeInHours = new Date().getHours()
    let greeting;
    if(timeInHours>6 && timeInHours < 11){
      greeting = "GOOD MORNING"
    }
    else if(timeInHours >= 11 && timeInHours < 16){
      greeting = "GOOD AFTERNOON"
    }
    else if(timeInHours >= 16 && timeInHours < 18){
      greeting = "GOOD EVENING"
    }
    else{
        greeting = "GOOD NIGHT"
    }
    return greeting
  }
  // const[data, setData] = useState([])
  // useEffect(()=>{
  //    axios.get('https://fakestoreapi.com/products')
  //    .then((response)=>{
  //     if(response.status == 200){
  //         setData(response.data)
  //         // console.log(data);
  //     }
  //    })
  //     .catch((err)=>console.log(err))
  // },[])

  return (
    <>
      <Header />
      <h2>Home Screen</h2>
      {data.length > 0 ? (
        data.map((eachObject) => {
          return (
            <>
              <h2>{day}</h2>
              <h2>{greet}</h2>
              <CustomCard data={eachObject} />
            </>
          );
        })
      ) : (
        <Spinner1></Spinner1>
      )}
    </>
  );
};

export default HomeScreen;

function CustomCard(props) {
  const {
    data: { id, title, image, price, category, description },
  } = props;

  return (
    <Card style={{ width: '18rem' }} className={Styling3.custom1}>
      <Card.Img variant="top" src={image} style={{ width: 100, height: 100 }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <button>
          <Link to={`/${category}/${id}`}>Navigate to productDetails</Link>
        </button>
      </Card.Body>
    </Card>
  );
}
