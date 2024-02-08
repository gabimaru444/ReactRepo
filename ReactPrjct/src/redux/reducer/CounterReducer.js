export default function CounterR( state = {value : 2} , action  ){
switch (action.type){
case 'counter/increment': return {value : state.value + 1 }
case 'counter/decrement': return {value : state.value - 1 }
default :
    return state

}



}