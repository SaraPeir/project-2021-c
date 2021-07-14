import React from "react"
import Headline from "../../shared/Headline/Headline"

function CurrentTime() {
    return (
        <div>
            <Headline>Current date</Headline>
            <h3>{new Date().toDateString()}</h3>
        </div>
    )
}

export default CurrentTime