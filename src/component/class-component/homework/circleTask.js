import { Component } from "react";






class CircleTask extends Component{
    state={
        circles :[],
       
    }

    addCricle=()=>{
        this.setState({
            circles:[...this.state.circles,false],
            
        })
    }
    changeColor =(index)=>{
        // console.log(index);
        this.setState({
            circles:this.state.circles.map((eachTF, i) =>{
                if(i == index){
                   return true; 
                }else{
                    return eachTF
                }
            })
        })
       
    }
    countColoredCricle=() =>{
       return this.state.circles.filter(circles => circles).length
    }

    render(){
        return(
            <>
            <button onClick={this.addCricle}>click add circles</button>
            <h2>Total Cricle --{this.state.circles.length}</h2>
            <h2>total colored counts {this.countColoredCricle()}</h2>
          {
            // [false,true,false].map(element => <Circle  isHighlight = {element}/>)
            this.state.circles.map((element,index )=> <Circle  isHighlight = {element} changecolor={this.changeColor} index={index}/>)
          }
            </>
        )
    }
} 
export default CircleTask

class Circle extends Component{
    
    render(){
        console.log(this.props.isHighlight);
        return(
            <div style={{width:100, height:100,border:"2px solid black", borderRadius:"50%",background:this.props.isHighlight?"black":null}}
               onClick={() => this.props.changecolor(this.props.index)}  >
            </div>
        )
        

    }
}


// down part Circle is for presentation.
// up part is for js part.