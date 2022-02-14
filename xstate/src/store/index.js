import { interpret, createMachine,assign, send } from 'xstate';

const increment = (context) => context.counter + 1;
const decrement = (context) => context.counter - 1;
const increase = (context, {action}) => context.counter + action.payload;

export const counterMachine = createMachine({
    initial: 'active',
    context: {
        counter: 0
    },
    states: {
        active: {
            on: {
                INCREMENT: { actions: assign({ counter: increment }) },
                DECREMENT: { actions: assign({ counter: decrement }) },
                INCREASE: { actions: assign({ counter: increase }) }
            }
        }

    }
}
);



export const counterService = interpret(counterMachine).onTransition(state => console.log(state.context.counter)).start();