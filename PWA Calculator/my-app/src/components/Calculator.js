import { useState } from "react";

const Calculator = () => {
    const [count, setCount] = useState(0);

    return(<div>
        <h1>Hello World!</h1>
        <p> {count} </p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
    </div> )
}


// const count = (props) => {
//     return this.props.count += 1;
// }


export default Calculator