import React from 'react'
import {render} from 'react-dom'
import {createStore, combineReducers} from 'redux'

function counter(state=0, {type}){
  switch (type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    default:
      return state
  }
}

function oldState(state=0, {payload}){
  if (payload) {
    return payload
  } else {
    return state
  }
}

let store = createStore(combineReducers({
  counter: counter,
  oldState: oldState,
  //counter
  //oldState
}))
////////////////////////////////////////////////////////
const incrementCount = (currentCount) => {
  store.dispatch({type: "INCREMENT", payload: currentCount})
}

const decrementCount = (currentCount) => {
  store.dispatch({type: "DECREMENT", payload: currentCount})
}

const App = (props) => {
  return (
    <div>
      <h1>Loading your app</h1>
      <h2>Current Count is: {props.count}</h2>
      <h3>The previous Number was {props.previousNumber}</h3>
      <button onClick={props.onIncrement.bind(null, props.count)}>Increment + </button>
      <button onClick={props.onDecrement.bind(null, props.count)}>Decrement - </button>
    </div>
  )
}

store.subscribe(() => {
  let {counter, oldState} = store.getState()
  render(<App
    count={counter}
    previousNumber={oldState}
    onDecrement={decrementCount}
    onIncrement={incrementCount}
    />,
    document.getElementById('root'))
})
store.dispatch({type: "LALALALALALALALALALALAL"})
