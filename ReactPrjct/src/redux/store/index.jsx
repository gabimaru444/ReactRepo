import { createStore } from "redux";
import CounterR from "../reducer/CounterReducer";

const store = createStore(CounterR)
store.subscribe(()=>{console.log(store.getState())})
export default store