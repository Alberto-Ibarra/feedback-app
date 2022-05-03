import { createContext, useState} from "react"
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback]= useState([
        {
            id: 1,
            text: 'Service was okay',
            rating: 7
        },
        {
            id: 2,
            text: 'He is a master at is craft!',
            rating: 9
        },
        {
            id: 3,
            text: 'not a good time. wont come back',
            rating: 4
        }
    ])
    const [feedbackEdit, setFeedbackEdit] =useState({
        item: {},
        edit: false
    })

    //add feedback
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    //delete feedback
    const deleteFeedback = (id) =>{
        //window.confirm populates a pop up with message
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //Update the feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem}: item))
    }

    //set item to be updated
    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value ={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext