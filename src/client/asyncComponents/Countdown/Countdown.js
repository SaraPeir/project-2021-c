import React from "react"
import Headline from "../../shared/Headline/Headline"

function getDateDifference(date2, date1) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;

    // Discard the time and time-zone information.
    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

const todayDate = new Date();

const nextYear = todayDate.getFullYear() + 1;
const nextYearDate = new Date(`${nextYear}-01-01`);
const dateDifference = getDateDifference(nextYearDate, todayDate)

function Countdown() {
    return (
        <div>
            <Headline>{`Count down to ${nextYear}`}</Headline>
            <h3>{`${dateDifference} days`}</h3>
        </div>
    )
}

export default Countdown