import { Component } from "react";
import Child from "./child";







class ParentComponent extends Component{
    constructor(){
        super()
        this.state = {
            count :0,
        }
    }
    handleCount = ()=>{
        this.setState({
            count:this.state.count+1,
        })
    }

    render(){
        console.log("parent render");
        return(
            <>
            <h3>Parent Component</h3>
            <h3>state change{this.state.count}</h3>
            <button onClick={this.handleCount}>click to change state </button>
            <Child data = {this.state.count}/>
            </>
        )
    }
}

export default ParentComponent;