import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from './Counter.module.css'
function Counter() {

    const numberInput = useRef();
    const counter = useSelector(state => state.counter);

    const dispatch = useDispatch();

    const incrementHandler = () => dispatch({ type: 'increment' });
    const decrementHandler = () => dispatch({ type: 'decrement' });

    const increaseHandler = (event) => {
        event.preventDefault(); 
        if (numberInput.current.value === ''){
            return;
        }
        dispatch({ type: 'increase', payload: parseInt(numberInput.current.value) }) 
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
