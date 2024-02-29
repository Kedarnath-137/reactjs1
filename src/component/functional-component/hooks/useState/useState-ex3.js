import React,{ useState } from "react"






const UseStateExample3 =()=>{
    const [fruits,setFruits]=useState(["apple", "grapes", "banana"])

    const addFruit=() =>{
        let newState = [...fruits,"new fruit"]    //when we are using array we should deep copying. 
        setFruits(newState)
    }

    const deleteFruit =(idx)=>{
        console.log(fruits, idx);
        let newState=[...fruits];
        newState.splice(idx,1)
        setFruits(newState)


        // setFruits(newState=>newState.pop(idx))
    }

    return(
        <>
        <h2>To do list</h2>
        <button onClick={addFruit}>Add Fruits</button>
        
        <ol>
        {
           fruits.map((eachElement, idx) =>
            <React.Fragment keys={idx}>
             <li>{eachElement}</li>
             <button onClick={()=>deleteFruit(idx)}>Delete Fruits</button>
            </React.Fragment>
           )
           
           
        }
        </ol>

        </>

    )
}

export default UseStateExample3;