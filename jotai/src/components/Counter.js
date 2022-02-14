import { useRef } from "react";
import classes from './Counter.module.css';
import { useAtom } from "jotai";
import { counterAtom } from "../store";
function Counter() {

    const numberInput = useRef();
    const [counter, setCounter] = useAtom(counterAtom);

    const incrementHandler = () => setCounter(counter => counter + 1);
    const decrementHandler = () => setCounter(counter => counter - 1);
    const increase = () => setCounter(counter => counter + parseInt(numberInput.current.value));

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
