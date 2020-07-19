import ACTION from '../actions/types'

const initialState = {
    contacts:[],
    loginedContact:[]

}

export default function Contact_Reducer  (state = initialState,action)  {

    switch (action.type) {
        case ACTION.DATA_IMPORT:
            return { 
                    ...state,
                    contacts:action.payload 
                }
        case ACTION.ADD_CONTACT:
            return { 
                    ...state,
                    contacts:[...state.contacts,action.payload]
                }
        case ACTION.EDIT_CONTACT:
            return {
                ...state,
                contacts:state.contacts.map(res => (action.payload).find(data => data.id.$oid === res.id.$oid) || res)
            }
        case ACTION.DELETE_CONTACTS:
            return{
                ...state,
                contacts:state.contacts.filter(res => !(action.payload).filter(data => data === res.id.$oid).length)
            }
        case ACTION.LOGIN_CONTACT:
            return{
                ...state,
                contacts:state.contacts.filter(res => !(action.payload).filter(data => data.id.$oid === res.id.$oid).length),
                loginedContact:action.payload
            }
        default:
            return { ...state }
    }

}