import ACTION from '../actions/types'

const initialState = {
    messages:[],
    received:{},
    profiles:{}
}

export default function Chat_Reducer (state = initialState,action){

    switch (action.type) {
        case ACTION.SENT_MESSAGE:
            
            return{
                ...state,
                messages:[...state.messages,action.payload]
            }
        case ACTION.GET_MESSAGES:
            return{
                ...state,
                profiles:action.payload,
                messages:[]
            }
    
        default:
            return {
                ...state
            }
    }

}