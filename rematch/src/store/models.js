export const model = {
    name: 'counter',
    state:0,
    reducers: {
        increment(state){
            return state + 1;
        },
        decrement(state){
            return state -1;
        },
        increase(state, payload){
            return state + payload;
        }
    }
}
