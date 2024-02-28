import { Component } from 'react';

class UpdatingPhase extends Component {
  state = {
    counter: 0,
  };
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  componentDidUpdate() {
    console.log('component did update');
  }
  shouldComponentUpdate() {
    console.log('should component update');
    return true;
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProp');
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState, 'pervious state');
  }

  render() {
    console.log('render');
    return (
      <>
        <h2>{this.state.counter}</h2>
        <button onClick={this.increment}>click me</button>
      </>
    );
  }
}
export default UpdatingPhase;

//when state changes render will re-excutes
// flow in mounting phase.------------
// 1. constructor
//2. getDerivedSteFromFlow
//3.rendermethod
//4.componentdidmount

// flow in updating phase------------
//1. constructor
//2.getDerivedStateFromProp
//3.shouldComponentUpdate
//4.render
//5.getSnapShotBeforeUpdate
//6.component did update
