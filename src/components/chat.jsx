import React,{ useState } from 'react'
import '../assets/chat.css'
import { Button } from 'reactstrap'
import { useDispatch,useSelector } from 'react-redux'
import { Send_Message_Action } from '../redux/actions/chat_action'


const ChatBot = ({}) => {

    const dispatch = useDispatch();

    const [currentMsg, setcurrentMsg] = useState('');

    const handleChange = e => {
        setcurrentMsg(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(currentMsg !== ''){
        dispatch(Send_Message_Action(currentMsg))
      }
        setcurrentMsg('');
    }

    const SentMessages = useSelector(state => (state.Chats.messages));
    const ChatToContact = useSelector(state => state.Chats.profiles[0]);
    const loginedContact = useSelector(state => state.Contacts.loginedContact[0])
    const Received = { id:'benny', message:[`hi ${loginedContact.first_name}`]}

    return(
        <>
            <div>
                    <div class="row chat-window col-md-6 mr-1" id="chat_window_1" style={{minWidth:'120%',float:'left',position:'relative'}}>
                        <div class="col-xs-12 col-md-12">
                            <div class="panel panel-default" style={{border:"2px solid whitesmoke"}}>
                                <div class="panel-heading top-bar" style={{backgroundColor:"whitesmoke",color:'black'}}>
                                    <div className="d-flex ">
                                    <div className="ImageText" style={{backgroundColor:`${ChatToContact.color}`}}>{ChatToContact.first_name[0]+ChatToContact.last_name[0]}</div>
                                    <h3 class="panel-title mt-2 ml-2"><span class="glyphicon glyphicon-comment"></span>{ChatToContact.first_name+" " +ChatToContact.last_name}</h3>
                                    </div>
                                </div>
                                <div class="panel-body msg_container_base" style={{backgroundColor:'white',minHeight:'350px',display:"flex",flexDirection:'column-reverse'}}>
                                <div>
                                {SentMessages === undefined?"":SentMessages.map((message,i) => 
                                        <div class="row msg_container base_sent">
                                        <div class="col-md-11 col-xs-10">
                                            <div class="messages msg_sent" style={{float:'right'}}>
                                                <p>{message}</p>
                                                <small style={{color:'gray'}}>{(loginedContact === undefined?"Bot":loginedContact.first_name+" "+loginedContact.last_name)}</small>
                                            </div>
                                        </div>
                                        <div class="col-md-1 col-xs-2 avatar px-0">
                                        <div className="ImageText bg-info" style={{width:'40px',height:"40px",fontSize:'25px'}}>{loginedContact.first_name[0]+loginedContact.last_name[0]}</div>
                                        </div>
                                    </div>
                                )}
                                </div>
                                {Received.message.map((message,i) =>                
                                <div class="row msg_container base_receive">
                                        <div class="col-md-1 col-xs-2 avatar px-0">
                                        <div className="ImageText bg-danger" style={{width:'40px',height:"40px",fontSize:'25px'}}>{ChatToContact.first_name[0]+ChatToContact.last_name[0]}</div>
                                        </div>
                                        <div class="col-md-11 col-xs-10">
                                            <div class="messages msg_receive">
                                                <p>{message}</p>
                                                <small style={{color:'gray'}}>{ChatToContact.first_name + " " +ChatToContact.last_name}</small>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                            </div>
                                <div class="panel-footer" style={{backgroundColor:'whitesmoke',padding:"1rem"}}>
                                    <div class="input-group">
                                        <input id="btn-input" type="text" class="form-control input-sm chat_input" value={currentMsg} onChange={(e) =>handleChange(e)} placeholder="Write your message here..." />
                                        <span class="input-group-btn">
                                        <Button className="bg-info ml-1 text-white" onClick={(e)=>handleSubmit(e)}>Send</Button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default ChatBot