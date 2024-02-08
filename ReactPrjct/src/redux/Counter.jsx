import { connect } from "react-redux"

export default function Counter({counter}){
return <div>
    
<span>{counter}</span>
<div>
<button type="button">Increment</button>
<button type="button">decrement</button>
</div>


</div>
}
export const CounterStore = connect((state)=>({counter: state.value }))(Counter)