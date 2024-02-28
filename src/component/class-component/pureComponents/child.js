import {  PureComponent } from "react";








class Child extends PureComponent{
    
    render(){
        console.log("child render");
        return(
             <>
            <h3>Child Component </h3>

            {/* <h3>{this.props.data}</h3> */}
            
             </>        

        )
    }
}

export default Child;