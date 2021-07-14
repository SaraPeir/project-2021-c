import React from "react"
import CurrentTime from './components/CurrentTime'
import Countdown from './asyncComponents/Countdown'
import Counter from './Counter'
import { useSelector, useDispatch } from 'react-redux'
import { showCountdown } from '../redux/slices/countdownShower'

const Global = (props) => {
    const isCountdownDisplayed = useSelector((state) => {
        console.log('state', state)
        return state.countdownShower.value
    })

    const countdown = () => {
        if(isCountdownDisplayed) {
            return <Countdown />
        }
        return;
    }

    const arrayFromFetch = props.arrayFromFetch;
    const showInConsole = (arrayFromFetch) => console.log(arrayFromFetch);
    const dispatch = useDispatch()

    return(
        <React.Fragment>
            <button onClick={() => dispatch(showCountdown())}>See how miss to 2022</button>
            <CurrentTime />
            {countdown()}
            {showInConsole(arrayFromFetch)}
            <Counter />
        </React.Fragment>
    )
}

export default Global;