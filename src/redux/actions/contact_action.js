import ACTION from './types'


export const Import_Contacts_Action = contacts => (dispatch) => {

   dispatch({
       type:ACTION.DATA_IMPORT,
       payload:contacts
   })

}

export const CreateNew_Contacts_Action = contact => (dispatch) => {

    dispatch({
        type:ACTION.ADD_CONTACT,
        payload:contact
    })
 
 }

export const Update_Contact_Action = contact => (dispatch) => {

    let array = [];
    array.push(contact)
    dispatch({
        type:ACTION.EDIT_CONTACT,
        payload:array
    })

}

export const Delete_Contacts_Action = contacts => dispatch => {

    dispatch({
        type:ACTION.DELETE_CONTACTS,
        payload:contacts
    })
}

export const Login_Contact_Action = contact => dispatch => {

    dispatch({
        type:ACTION.LOGIN_CONTACT,
        payload:contact
    })
}