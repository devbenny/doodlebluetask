import React,{ useState } from 'react'
import { Table,Input } from 'reactstrap';
import { Delete_Contacts_Action } from '../../redux/actions/contact_action'
import { Get_Messages_Action } from '../../redux/actions/chat_action'
import { useSelector,useDispatch } from 'react-redux'
import { IconContext } from "react-icons"
import { FiEdit2 } from 'react-icons/fi'
import { BsPlus,BsChat } from 'react-icons/bs'
import { RiDeleteBin5Line } from 'react-icons/ri'


const ContactsTable = ({tableData,handleEdit,setshowChat,setshowContact}) => {

    const dispatch = useDispatch();

    const [CheckList, setCheckList] = useState([]);
    
    const handleCheckbox = (e,i) => {

        if(CheckList.includes(e.target.id)){

            let newArray = [...CheckList];
            newArray.splice(i,1);
            const Data =  newArray.filter(value => Object.keys(value).length !== 0);
            setCheckList(Data);

        }
        else{
                let array = [...CheckList];
                array[i] = e.target.id;
                setCheckList(array)
        }
      
    }

    const handleChangeEdit = id => {

        const data = Data.filter(res => res.id.$oid == id);
        handleEdit(data);
    }

    const handleChat = id => {
        setshowContact(false)
        const data = Data.filter(res => res.id.$oid === id);
        dispatch(Get_Messages_Action(data));
        setshowChat(true);
    }

    const handleDeleteContacts = () => {
        
        dispatch(Delete_Contacts_Action(CheckList));
        setCheckList([])
    }

    const ViewContact = id =>{
        setshowChat(false);
        setshowContact(true);
        const data = Data.filter(res => res.id.$oid === id);
        dispatch(Get_Messages_Action(data));
    }

    const Data = useSelector( state => state.Contacts.contacts);
    const newData = useSelector( state => state.Contacts.loginedContact)
    return(
        <>
             <Table className="Contacts-Table">
                <thead>
                    <tr>
                    <th>
                    <IconContext.Provider value={{ color: "grey",size:'1.3em'}}>
                       {CheckList.length === 0? <BsPlus />:<RiDeleteBin5Line style={{cursor:'pointer'}} onClick={()=>handleDeleteContacts()}/>}
                    </IconContext.Provider>
                    </th>
                    <th>Basic Info</th>
                    <th>Company</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((res,i) =>
                    <tr key={res.id.$oid} className="my-2">
                    <th scope="row" className="d-flex align-items-center">
                       <Input id={res.id.$oid} type="checkbox" className='ml-1 mt-2' style={{cursor:'pointer'}} onChange={e => handleCheckbox(e,i)} />
                    </th>
                    <td>
                        <div className="d-flex align-items-center">
                            <div className="ImageText" style={{backgroundColor:`${res.color}`}} onClick={(e) => ViewContact(res.id.$oid)}>{res.first_name[0]+res.last_name[0]}</div>
                            <div className="d-flex flex-column mx-2">
                                <span className="h5 m-0" onClick={(e) => ViewContact(res.id.$oid)}>{res.first_name+" "+res.last_name}</span>
                                <small className="text-whitesmoke">{res.email}</small>
                            </div>
                        </div>
                    </td>
                    <td className="d-flex align-items-center mt-3"><p style={{fontWeight:"600"}}>{res.company}</p></td>
                    <td>
                        <IconContext.Provider value={{ size:'1.2em'}}>
                        <FiEdit2 className="mt-3" onClick={(e) => handleChangeEdit(res.id.$oid)} style={{cursor:"pointer"}}/>
                        {newData.length === 0?"":<BsChat className="mt-3 ml-3" onClick={(e) => handleChat(res.id.$oid)} style={{cursor:"pointer"}}/>}
                        </IconContext.Provider>
                    </td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </>
    )

}
export default ContactsTable