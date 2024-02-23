import { Component } from "react";






class IamgeComponent extends Component{
    constructor(){
        super()
        this.state={
            name: "hello sai",
            salary : 10000,
        }
    }
    handleIncrementSalary=()=>{
        // alert("clicked")
        this.setState(
            {
                salary:this.state.salary+1000
            },
            ()=>{
                console.log(this.state.salary,"current");
            }
        )
    }
    render(){
        return(
            <div>
                <h3>read in the state {this.state.name} {this.state.salary}</h3>
                <button onClick={this.handleIncrementSalary}>update salary by 1000</button>
            </div>

        )
    }
}
export default IamgeComponent

// state perform CRUD operation:
// first we created 
// second we read the data
// third we are update the data by by adding button component.

//handleIncrementSalary we did function bind here.
// setState --> will cause component to re-render.