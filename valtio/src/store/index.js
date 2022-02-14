import { proxy } from "valtio";

const state = proxy(
    { counter: 0 }
)

export default state;