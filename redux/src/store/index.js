import { createStore } from 'redux';
const redux = require('redux'); 

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    } else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    } else if (action.type === 'increase'){
        return {
            counter: state.counter + action.payload
        }
    }
    return state;
}
 
const store = redux.createStore(counterReducer);
 
export default store;