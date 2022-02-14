import { useRef } from "react";
import classes from './Counter.module.css'
import { store } from "../store";
import { observer } from "mobx-react";
function Counter() {

    const numberInput = useRef();

    const increaseHandler = (event) => {
        event.preventDefault(); 
        if (numberInput.current.value === ''){
            return;
        }
        store.increase(parseInt(numberInput.current.value))
    };
  
    const Counter = observer(() => <div className={classes.counter}>{store.counter}</div>)
    
    return ( 
        <div>
            <Counter/>
            <div className={classes.row}>
                <button className={classes.btn} onClick={() => store.increment()}>Increment</button>
                <button className={classes.btn} onClick={() => store.decrement()}>Decrement</button>
            </div>
            <form className={classes.row} onSubmit={increaseHandler}>
                <button className={classes.btn}>Increase by x</button>
                <input className={classes.input} required="true " type="number" ref={numberInput} />
            </form>

        </div>
    );
}

export default Counter;
