import { Component } from 'react';

class YoutudeButton extends Component {
  constructor() {
    super()
    this.state = {
      isSubscribed: false,
    }
  }

  handleSubscribe = () => {
    this.setState({
      isSubscribed: !this.state.isSubscribed,
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleSubscribe}>
          {this.state.isSubscribed ? 'un-subscribed' : 'please subscribe'}
        </button>
        {this.state.isSubscribed ? <h2>Wellcome user</h2> : null}
      </div>
    );
  }
}

export default YoutudeButton;

//1. the react Component called 'youtudeButton';
//2. that represent a button to subscribe/ unsubscribe to a channel, along with a cinditional message thet welcome the user if they subscribed.
// 3. the line imports the 'Component' class from the 'react' library. Component is the base class for react component 
// when you are defining a class based component.
// 4. 'uoutudeButton' is created that extends 'Component'.
//5. inside a class, a constructor method is defined. the constructor is initialize the component state with a single property is 'isSubscribed' set to 'false'.
//6. this 'isSubscribed' property will keep track of whether the user is subscribed ('true) or not ('false)
// 7. the 'handleSubscribe' method is defined as a class property using arrow function. 
// 8. this function is responsible for toggling 'isSubscribed' state b/w 'true' and 'false' . whenever the button is clicked .
//9. it use 'this.setState' to update the state, toggling the 'isSubscribed' value.
//10. the 'render' method define what will be displayed by the component. in this case, it return jsx which represent the component UI.
//11.A <div> contains:
// A <button> element which, when clicked, triggers the handleSubscribe method.
// The text of the button changes based on the isSubscribed state. If isSubscribed is true, it displays "un-subscribed", otherwise, it displays "please subscribe".
// A conditional statement {this.state.isSubscribed ? <h2>Welcome user</h2> : null}. This displays a <h2> element with "Welcome user" if isSubscribed is true, and null (nothing) if it's false.
//Finally, the YoutubeButton component is exported, making it available for use in other parts of your application.
