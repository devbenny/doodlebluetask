import React,{ useState,useEffect } from 'react'
import { Button,Modal, ModalHeader, ModalBody, Form, FormGroup,Input,Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, } from 'reactstrap'
import ContactsTable from './contactTable'
import { Import_Contacts_Action,CreateNew_Contacts_Action,Update_Contact_Action } from '../../redux/actions/contact_action'
import { useDispatch,useSelector } from 'react-redux'
import { RawContacts } from '../../DATA'
import { IconContext } from 'react-icons'
import { FcContacts } from 'react-icons/fc'
import { BsPlus } from 'react-icons/bs'
import { GrSearch } from 'react-icons/gr'


const Contacts = ({setshowChat,setshowContact}) => {

    const dispatch = useDispatch();

    const initialState = {
        "id":'',
        'first_name':'',
        'last_name':'',
        'email':'',
        'company':'',
        'created_date':'',
        'color':'green',
        };

    const [modal, setModal] = useState(false);
    const [contact,SetContact ] = useState(initialState); 
    const toggle = () => setModal(!modal);
    const [edit, setEdit] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownName, setdropdownName] = useState('Please Select');

    useEffect(() => {
        dispatch(Import_Contacts_Action(RawContacts))
    }, [SetContact])
 
    const AddContact = () => {
        setModal(true);
        SetContact(initialState);
    }

    const toggle1 = () => {
         setDropdownOpen1(prevState => !prevState)
        };
    const handleChange = e =>{
       SetContact({...contact,[e.target.name]:e.target.value});
    }

    const handleEdit = data => {
     
        setModal(true);
        setEdit(true);
        SetContact({
            "id":data[0].id,
            'first_name':data[0].first_name,
            'last_name':data[0].last_name,
            'email':data[0].email,
            'company':data[0].company,
            'created_date':data[0].created_date,
            'color':'yellow'
            });
    }

    const SubmitContactForm = e => {
     
        { edit ? dispatch(Update_Contact_Action(contact)) : dispatch(CreateNew_Contacts_Action(contact)) }
        setModal(false);
        setEdit(false);

    }

    const handleSelectDropdown = e =>{
        setdropdownName(e.target.id)
    }

    const Data = useSelector(state => (state.Contacts.contacts));

    return(
        <div>
            <Modal isOpen={modal} toggle={toggle} >
            <ModalHeader toggle={toggle}>{edit?"Edit Contact":'Add Contact'}</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input type="text" className="my-2" placeholder="Enter first Name" name="first_name" value={contact.first_name} onChange={e => handleChange(e)}/>
                            <Input type="text" className="my-2" placeholder="Enter last Name" name='last_name' value={contact.last_name} onChange={e => handleChange(e)} />
                            <Input type="email"className="my-2"placeholder="Enter email" name="email" value={contact.email} onChange={e => handleChange(e)}/>
                            <Input type="text" className="my-2" placeholder="Enter company" name="company" value={contact.company} onChange={e => handleChange(e)}/>
                        </FormGroup>
                    </Form>
                <Button type='submit' onClick={(e)=>SubmitContactForm(e)} className="bg-info text-white">Submit</Button>
                </ModalBody>
            </Modal>
   
            <div className="d-flex">
                <div className="d-flex mr-5">
                    <IconContext.Provider value={{ size:'3.5em',className: "global-class-name" }}>
                        <FcContacts />
                    </IconContext.Provider>
                    <div>
                        <h3 className="m-0">Contacts</h3>
                        <small className="text-whitesmoke">Welcome to FLATCRM Contact Page</small>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <h6 className="text-gray mt-4 ">Sort by :</h6>
                    <UncontrolledDropdown className="mt-3"> 
                            <Dropdown isOpen={dropdownOpen1} toggle={toggle1} className="mt-1">
                                <DropdownToggle caret style={{color:'gray',fontWeight:'600'}}>
                                      {dropdownName}
                                    </DropdownToggle>
                                <DropdownMenu>
                                {["Name","Company","Created_Date"].map(res => <DropdownItem id={res} onClick={(e) => handleSelectDropdown(e)}> {res} </DropdownItem>)}
                                </DropdownMenu>
                            </Dropdown>
                            </UncontrolledDropdown>
                </div>
            </div>
        
            <div className="mt-5 ml-5">
                <div className="d-flex mb-5">
                    <div className="searchbar">
                      <input type="text" placeholder="Search Contacts"/><span><GrSearch /></span> 
                    </div>
                    <button className="newBtn ml-3" onClick={()=>AddContact()}>
                        <span>
                            <IconContext.Provider value={{ color: "#fff",size:'1.3em'}}><BsPlus /></IconContext.Provider>
                        </span> Add Contact
                    </button>
                </div>
                <ContactsTable tableData={Data}  handleEdit={handleEdit} setshowContact={setshowContact}  setshowChat={setshowChat}/>
            </div>
        </div>
    )
}
export default Contacts