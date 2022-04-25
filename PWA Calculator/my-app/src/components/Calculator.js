import { useState } from "react";
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const Calculator = () => {
    const [count, setCount] = useState();
    const [count2, setCount2] = useState();
    const [string, setString] = useState("");
    const [toggle, setToogle] = useState(false);
    const [operator, setOperator] = useState();
    const [result, setResult] = useState();
    const [equals, setEquals] = useState();

    let first = string;
    let second = string;
    const fillNumber = (num) => {
        if (toggle === false){
            setCount();
            setCount2();
            setResult();
            setOperator();
            first = string + num; setString(first);
            console.log(typeof(first) + " : " + first);
            let firstNumber = parseInt(first);
            setCount(firstNumber);
            setEquals();
            console.log(typeof(firstNumber ) + " : " + firstNumber );
        }
        else if (toggle === true){
            second = string + num; setString(second);
            let secondNumber = parseInt(second);
            setCount2(secondNumber);
        }
    }

    const fillOperator = (operator) => {
        if (toggle === false && operator === "+"){
            setOperator("+");
            setString("");
            setToogle(true);
        }
        else if (toggle === false && operator === "-"){
            setOperator("-");
            setString("");
            setToogle(true);
        }
        else if (toggle === false && operator === "*"){
            setOperator("*");
            setString("");
            setToogle(true);
        }
        else if (toggle === false && operator === "/"){
            setOperator("/");
            setString("");
            setToogle(true);
        }
    }

    const calculate = () => {
        if (toggle === true && operator === "+"){
            let sum = parseInt(count) + parseInt(count2);
            setResult(sum);
            setOperator(operator);
            setString("");
            setEquals("=");
            setToogle(false);
        }
        else if (toggle === true && operator === "-"){
            let sum = parseInt(count) - parseInt(count2);
            setResult(sum);
            setOperator(operator);
            setString("");
            setEquals("=");
            setToogle(false);
        }
        else if (toggle === true && operator === "*"){
            let sum = parseInt(count) * parseInt(count2);
            setResult(sum);
            setOperator(operator);
            setString("");
            setEquals("=");
            setToogle(false);
        }  
        else if (toggle === true && operator === "/"){
            let sum = parseInt(count) / parseInt(count2);
            setResult(sum);
            setOperator(operator);
            setString("");
            setEquals("=");
            setToogle(false);
        }  
    }

    return(<div className="container-fluid text-center" style={{zoom:"150%"}}>
        <h1 className="text-primary text-center" >Calculator App</h1>
        <input value={string}></input>
        <h2> {count} {operator} {count2} {equals} {result}</h2>
        <p>
            <span> </span><Button onClick={() => fillNumber("1")} className="btn-lg">1</Button>
            <span> </span><Button onClick={() => fillNumber("2")} className="btn-lg">2</Button>
            <span> </span><Button onClick={() => fillNumber("3")} className="btn-lg">3</Button>
            <span> </span><Button onClick={() => fillOperator("+")} className="btn-lg btn-info">+</Button>
        </p>
        <p>
            <span> </span><Button onClick={() => fillNumber("4")} className="btn-lg" >4</Button>
            <span> </span><Button onClick={() => fillNumber("5")} className="btn-lg">5</Button>
            <span> </span><Button onClick={() => fillNumber("6")} className="btn-lg">6</Button>
            <span> </span><Button onClick={() => fillOperator("-")} className="btn-lg btn-info">-</Button>
        </p>
        <p>
            <span> </span><Button onClick={() => fillNumber("7")} className="btn-lg">7</Button>
            <span> </span><Button onClick={() => fillNumber("8")} className="btn-lg">8</Button>
            <span> </span><Button onClick={() => fillNumber("9")} className="btn-lg">9</Button>
            <span> </span><Button onClick={() => fillOperator("*")} className="btn-lg btn-info">*</Button>
        </p>
        <p>
        <span> </span><Button onClick={() => fillNumber("0")} className="btn-lg" >0</Button>
        <span> </span><Button style={{width: "100px"}} onClick={() => calculate()} className="btn-lg btn-secondary">=</Button>
        <span> </span><Button onClick={() => fillOperator("/")} className="btn-lg btn-info">/</Button>
        </p>   
    </div> )
}


export default Calculator