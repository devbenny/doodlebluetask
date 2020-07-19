import ACTION from './types'

export const Send_Message_Action = (message) => dispatch => {

    console.log(message)

    dispatch({
        type:ACTION.SENT_MESSAGE,
        payload:message
    })
} 

export const Get_Messages_Action = (message) => dispatch => {
    
    dispatch({
        type:ACTION.GET_MESSAGES,
        payload:message
    })
}