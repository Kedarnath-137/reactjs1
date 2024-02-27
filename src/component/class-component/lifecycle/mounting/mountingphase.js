import axios from 'axios';
const { Component } = require('react');

class Mounting extends Component {
  constructor() {
    console.log("construtor");
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    console.log("component did mount");
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        if (response.status == 200) {
          this.setState({
            products: response.data,
          });
        } else {
          alert('something went wrong');
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    console.log(this.state.products,"render method");
    return (
      <>
        <h1>Products list</h1>
        {this.state.products.length > 0 ? (
          this.state.products.map((eachObject) => <h2 keys = {eachObject.id}>{eachObject.title}</h2>)
        ) : (
          <h1>no products found</h1>
        )}

      </>
    );
  }
}

export default Mounting;
