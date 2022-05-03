import { motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {
    const {feedback} = useContext(FeedbackContext)
    
    if(!feedback || feedback.length === 0 ){
        return <p>No feedback yet!</p>
    }

    //with fading animation
    return (
        <div className='feedback-list'>
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div 
                key={item.id}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                >
                    
                    <FeedbackItem key={item.id} item={item} />
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )

    //without fading animation
    // return (
    //     <div className='feedback-list'>
    //         {feedback.map((item) => (
    //             //1. passing handleDelete into a props, handleDelete is being caught  in FeedbackItem.jsx line 5
    //             <FeedbackItem key={item.id} item={item} 
    //             handleDelete={handleDelete}/>
    //         ))}
    //     </div>
    // )
}



export default FeedbackList