import axios from "axios";
import { Component } from "react";



class List1 extends Component{
    constructor(){
        super()
        this.state={
            item:[]
        }
    }

    fetchData = async ()=>{
        const res = await axios.get('https://fakestoreapi.com/products') 
        this.setState({
            item:res.data
        })
    }
    
    render(){
        return(
            <>
            <h2>list</h2>
            <button onClick={this.fetchData}>click here</button>
            
            {
                this.state.item.length>1
                ?
                this.state.item.map((eachObject)=>{
                    return(
                        <ol keys={eachObject.id}>
                        <li>{eachObject.id}</li>
                        <li>{eachObject.title}</li>
                        <li><img src={eachObject.image} width={50}/></li>
                        <li>{eachObject.price}</li>
                        </ol>
                    )
                })
                : 
                <h1>loading</h1>
            }
            
            </>
        )
    }
}
export default List1