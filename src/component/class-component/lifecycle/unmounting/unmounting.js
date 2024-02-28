import { Component } from "react";







class Unmounting extends Component{
   

    state={
        isChildVisibile:false
    }
    childHandler = ()=>{
       this.setState({
        isChildVisibile:!this.state.isChildVisibile
       }) 
    }

    render(){
        return(
            <>
            <h2>unmounting component</h2>
            <button onClick={this.childHandler}>click here to change childcomponent</button>
            {
                this.state.isChildVisibile
                ?
                <Child/>
                :
                <h3 >no child found</h3>
            }
            </>
        )
    }

}
export default Unmounting;

class Child extends Component{
    componentWillUnmount(){
        alert('i am removed from dom')
    }
    render(){
        return(
            <>
            <h1>i am childComponent</h1>
            </>
        )
    }
}