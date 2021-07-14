import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slices/counter'


const Counter = () => {
    const count = useSelector((state) => {
        return state.counter.value
    } )
    const dispatch = useDispatch()
    
    return(
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
                >
                Increment
            </button>
            <p>{count}</p>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
                >
                Decrement
            </button>
        </div>
    ) 
}

export default Counter
