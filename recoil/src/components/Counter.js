import { useRef } from "react";
import classes from './Counter.module.css'
import { state } from "../atoms";
import { useRecoilState } from "recoil";

function Counter() {

    const numberInput = useRef();
    
    const [counter,setCounter] = useRecoilState(state);

    const incrementHandler = () => setCounter(counter + 1);
    const decrementHandler = () => setCounter(counter - 1);

    const increaseHandler = (event) => {
        event.preventDefault(); 
        if (numberInput.current.value === ''){
            return;
        }
        setCounter(counter + parseInt(numberInput.current.value));
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
                <input className={classes.input} required="true" type="number" ref={numberInput} />
            </form>

        </div>
    );
}

export default Counter;
