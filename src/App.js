import CircleTask from "./component/class-component/homework/circleTask";
import Employee from "./component/class-component/homework/employee";
import IamgeComponent from "./component/class-component/image/image-component";
import UpdatingPhase from "./component/class-component/lifecycle/Updating/stateUpdation";
import DomManipulation from "./component/class-component/lifecycle/mounting/dom";
import Mounting from "./component/class-component/lifecycle/mounting/mountingphase";
import Unmounting from "./component/class-component/lifecycle/unmounting/unmounting";
import IncremProduct from "./component/class-component/products/incrementproduct";
import Products from "./component/class-component/products/products";
import ParentComponent from "./component/class-component/pureComponents/parent";
import YoutudeButton from "./component/class-component/youtudeButton/youtudeButton";
import ProductsApi from "./component/functional-component/axios/products";
import Controlled from "./component/functional-component/forms/controlled";
import Uncontrolled from "./component/functional-component/forms/uncontrolled";
import UseStateExample from "./component/functional-component/hooks/useState/useState-ex1";
import UseStateExample2 from "./component/functional-component/hooks/useState/useState-ex2";
import UseStateExample3 from "./component/functional-component/hooks/useState/useState-ex3";




function App() {
  return (
    <div>
      <h1>hello</h1>
      
   {/* <Uncontrolled/> */}
   <Controlled/>
    
    
    </div>
  );
}

export default App;
