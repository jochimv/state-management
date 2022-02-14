import { useRef } from "react";
import classes from './Counter.module.css';
import { counterMachine } from "../store";
import { useMachine } from "@xstate/react";
function Counter() {

    const numberInput = useRef();

    const [counter,modifyCounter] = useMachine(counterMachine);

    const incrementHandler = () => modifyCounter('INCREMENT');
    const decrementHandler = () => modifyCounter('DECREMENT');
    const increase = () => modifyCounter('INCREASE', {payload: parseInt(numberInput.current.value)})

    const increaseHandler = (event) => {
        event.preventDefault(); 
        if (numberInput.current.value === ''){
            return;
        }
        increase();
    };
    return (
        <div>
            <div className={classes.counter}>{counter}</div>
            <div className={classes.row}>
                <button className={classes.btn} onClick={incrementHandler}>Increment</button>
                <button className={classes.btn} onClick={decrementHandler}>Decrement</button>
            </div>

            <form className={classes.row} onSubmit={increaseHandler}>
                <button className={classes.btn}>Increase by x</button>
                <input className={classes.input} required="true " type="number" ref={numberInput} />
            </form>

        </div>
    );
}

export default Counter;
