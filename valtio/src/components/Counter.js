import { useRef } from "react";
import state from "../store";
import classes from './Counter.module.css';
import { useSnapshot } from "valtio";
function Counter() {

    const numberInput = useRef();
    const store = useSnapshot(state);

    const incrementHandler = () => ++state.counter;
    const decrementHandler = () => --state.counter;

    const increaseHandler = (event) => {
        event.preventDefault(); 
        if (numberInput.current.value === ''){
            return;
        }
        state.counter = state.counter + parseInt(numberInput.current.value);
   
    };
    return (
        <div>
            <div className={classes.counter}>{store.counter}</div>
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
