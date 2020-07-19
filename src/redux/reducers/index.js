import { combineReducers } from 'redux';
import Contact_Reducer from './contact_reducer'
import Chat_Reducer from './chat_reducer'

export default combineReducers({
  Contacts:Contact_Reducer,
  Chats:Chat_Reducer,
})