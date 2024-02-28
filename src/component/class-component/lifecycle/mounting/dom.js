import { Component } from "react";







class DomManipulation extends Component{

    state ={
        counter:0,
        favoritecolor:"red",
    }

    Increment = (val) =>{
        this.setState({
           counter:this.state.counter+val
        })
    }
    componentDidMount(){
        //change the title // it will works only  onces at starting time.
        document.title = this.state.counter 

    }
    componentDidUpdate(){
        document.title= this.state.counter
    }

    static getDerivedStateFromProps(props, state){
        // to initilize the state based on prop
        return {favoritecolor :props.favcolor }

    }
    render(){
        // console.log("kedaranath")
        
        return(
            <>

            <h3>DomManipulation</h3>
            <h4>{this.state.favoritecolor}</h4>
            <h4>{this.state.counter}</h4>
            <button onClick={() =>this.Increment(10)}>Increment</button>
            </>
        )
    }
}

export default DomManipulation 

// two ways to initalize the state
// constructor
// object