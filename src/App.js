import Constructor from "./methods/Constructor"; //1
import GetDerivedStateFromProps from "./methods/GetDerivedStateFromProps";//2
import Render from "./methods/Render"; //3
import ComponentDidMount from "./methods/ComponentDidMount"; //4
import ConditionalRenderComponent from "./methods/ConditionalRenderComponent"; //5
import GetSnapShot from "./methods/GetSnapShot"; //6
import ComponentDidUpdate from "./methods/ComponentDidUpdate"; //7
import ComponentWillUnmount from "./methods/ComponentWillUnmount"; //8

function App() {
  return (
    <ComponentWillUnmount />
  );
}

export default App;
