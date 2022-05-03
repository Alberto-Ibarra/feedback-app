import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


const FeedbackStats = () => {
    const {feedback} = useContext(FeedbackContext)
    //Calculate ratings ave
    // acc= accumilator
    //cur= current
    //.reduce = loops through array while adding total sum
    // 0 is the default for accumilator
    let average = feedback.reduce((acc, cur) =>{
        return acc + cur.rating
    }, 0) / feedback.length


    //.toFixed(1) makes rating with 1 decimal only
    //.replace shows if there is a 0 present in decimal, output will be a whole number without decimal
    average = average.toFixed(1).replace(/[.,]0$/, '')


    return (
        <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        {/* isNaN will populate with out if check. do isNaN to populate 0 */}
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}


export default FeedbackStats
