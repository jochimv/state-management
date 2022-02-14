import { useRef } from "react";
import classes from './Counter.module.css'
import useStore from "../store";

function Counter() {

    const numberInput = useRef();
    const counter = useStore(state => state.counter); 

    const incrementHandler = useStore(state => state.increment);
    const decrementHandler = useStore(state => state.decrement);
    const increaseCounter = useStore(state => state.increase);

    const increaseHandler = (event) => {
        event.preventDefault(); 
        if (numberInput.current.value === ''){
            return;
        }
        increaseCounter(parseInt(numberInput.current.value));
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
