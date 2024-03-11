import { useReducer } from "react";
import { Button } from "react-bootstrap";


function reducer (state,action){
    console.log(state)
    console.log(action)
    switch(action.type){
        case "INCREMENT_AGE_BY_10":
            return {...state, age: state.age+10}
        case "DECREMENT_AGE_BY_10":
            return {...state, age:state.age-10}
        case "CHANGE_THE_NAME":
            return {...state,name:"surya"}
        case 'ADD_FRUITS':
            return {...state,fruits:[...state.fruits,'NEW_FRUITSSS']}
        default:
            return state
    }

}
const initialState = {
    age:100,
    name:"kedar",
    fruits:['apples', 'banana'],
}


const UseReducer =() =>{
    const [currentState,dispatch]=useReducer(reducer,initialState)
    const incrementAge = ()=>{
        dispatch(
            {
                type:"INCREMENT_AGE_BY_10"
            }
        )
    }
    const decrementAge = ()=>{
        dispatch(
            {
                type:"DECREMENT_AGE_BY_10"
            }
        )
    }

    const changeName = ()=>{
        dispatch(
            {
               type:"CHANGE_THE_NAME" 
            }
        )
    }
    const newFruit = () =>{
        dispatch(
            {
                type:"ADD_FRUITS" 
             }
        )
    }

    return(
        <>
        <h2>useReducer</h2>
        <h2>{currentState.age}</h2>
        <Button onClick={incrementAge}>Increment age by 10</Button>
        <button onClick={decrementAge}>Decrement age by 10</button>
        <h2>{currentState.name}</h2>
        <button onClick={changeName}>changeName</button>
        <h2>{currentState.fruits}</h2>
        <button onClick={newFruit}>CLICK HERE</button>
        
        
        </>

    )
}

export default UseReducer;