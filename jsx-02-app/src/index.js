import ReactDOM from "react-dom";
import { HelloName } from "./HelloName" 

const helloNameElement = <HelloName />;
const root = document.getElementById("root");


ReactDOM.render(helloNameElement, root)