import ReactDOM from "react-dom";
import { HelloWorld } from "./HelloWorld" 

const helloWorldElement = <HelloWorld />;
const root = document.getElementById("root");


ReactDOM.render(helloWorldElement, root)