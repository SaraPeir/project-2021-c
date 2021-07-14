import React, {useState} from "react"
import { Provider } from 'react-redux'
import store from '../redux/store'
import Global from "./Global"

const App = (props) => {
    console.log('props.arrayFromFetch', props.arrayFromFetch)
    return(
        <Provider store={store}>
            <Global arrayFromFetch={props.arrayFromFetch} />
        </Provider>
    )
}

export default App;
