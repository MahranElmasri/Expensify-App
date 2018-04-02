
import {createStore} from 'redux';

const incrementCount=({incrementBy=1}={})=>({
    type:'INCERMENT',
    incrementBy
})

const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
})
const resetCount=()=>({
    type:'RESET'
})
const setCount=({count=1}={})=>({
    type:'SET',
    count

})
const countReducer=(state={count:0},action)=>{
    
    switch(action.type){
        case 'INCERMENT':
         return {count:state.count+ action.incrementBy};
        case 'DECREMENT':
         return {count:state.count- action.decrementBy};
        case 'RESET' :return {count:0};
        case 'SET' :return {count:action.count}
        default :return state;
    }
}
const store=createStore(countReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

// store.dispatch({
//     type:'INCREMENT',
//     incrementBy:5
// })
store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(incrementCount())
store.dispatch(decrementCount({decrementBy:3}));
store.dispatch(decrementCount());
store.dispatch(resetCount())
store.dispatch(setCount({count:100}))
// import {createStore} from 'redux';
// const store=createStore((state={count:10},action)=>{
//     switch(action.type){
        
//         case 'INCREMENT': const incrementBy=typeof action.incrementBy==='number'?action.incrementBy:1; 
//             return {count:state.count+incrementBy};
//         case 'DECREMENT': const decrementBy=typeof action.decrementBy==='number'?action.decrementBy:1;
//            return {count:state.count-decrementBy};
//         case 'SET':return {count:action.count}
//         case 'RESET': return {count:0}
//         default: return state;
//     }
// });
 
// store.subscribe(()=>{
//     console.log(store.getState())
// })
// store.dispatch({
//     type:'INCREMENT',
//     incrementBy:5
// })

// store.dispatch({
//     type:'DECREMENT',
//     decrementBy:5
// })

// store.dispatch({
//     type:'RESET'
// })

// store.dispatch({
//     type:'SET',
//     count:101
// })
