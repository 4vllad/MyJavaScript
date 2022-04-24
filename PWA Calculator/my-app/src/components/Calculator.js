import { useState } from "react";
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Calculator = () => {
    const [count, setCount] = useState(0);
    const [string, setString] = useState("");

    return(<div className="container-fluid text-center App-header">
        <h1 className="text-primary text-center" >Calculator App</h1>
        <input value={string}></input>
        <h2>{count}</h2>
        <p>
            <span> </span><Button onClick={() => setString("1")}>1</Button>
            <span> </span><Button onClick={() => setString(string + "2")}>2</Button>
            <span> </span><Button onClick={() => setString(string + "3")}>3</Button>
            <span> </span><Button onClick={() => {setCount(parseInt(count) + parseInt(string)); setString("")}}>+</Button>
        </p>
        <p>
            <span> </span><Button onClick={() => setString(string + "4")}>4</Button>
            <span> </span><Button onClick={() => setString(string + "5")}>5</Button>
            <span> </span><Button onClick={() => setString(string + "6")}>6</Button>
            <span> </span><Button onClick={() => {setCount(parseInt(count) - parseInt(string)); setString("")}}>-</Button>
        </p>
        <p>
            <span> </span><Button onClick={() => setString(string + "7")}>7</Button>
            <span> </span><Button onClick={() => setString(string + "8")}>8</Button>
            <span> </span><Button onClick={() => setString(string + "9")}>9</Button>
            <span> </span><Button onClick={() => setString(string + "0")} >0</Button>
        </p>
        <p>
            <span> </span><Button onClick={() => setCount(0)}>Reset</Button>
        </p>   
    </div> )
}


// const count = (props) => {
//     return this.props.count += 1;
// }


export default Calculator