import React,{ useState } from 'react'
import { Nav,NavItem,NavLink,Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown, } from 'reactstrap'
import { Login_Contact_Action,Import_Contacts_Action } from '../redux/actions/contact_action'
import { useSelector,useDispatch } from 'react-redux'
import { IconContext } from "react-icons"
import { GrSearch } from 'react-icons/gr'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BsPlus } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { RawContacts } from '../DATA'

export const Header = () => {
    
    const dispatch = useDispatch();

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [loginedContact, setloginedContact] = useState('Login');

    const toggle = () => {
       
         setDropdownOpen(prevState => !prevState)
        };

    const Login = (e) => {

        dispatch(Import_Contacts_Action(RawContacts))

        const Result = Data.filter(res => res.id.$oid === e.target.id);
      
        setloginedContact(Result[0].first_name+" "+Result[0].last_name);

        dispatch(Login_Contact_Action(Result));

    }

    const Data = useSelector(state => state.Contacts.contacts);

    return(
        <>
            <div className="header d-flex align-items-center justify-content-between">
                <div className="float-left px-3">
                   <div className="header-searchbar">
                    <span className="search-icon">
                   <IconContext.Provider value={{ color: "#000",size:'1em',zindex:'100',className: "global-class-name" }}>
                       <GrSearch />
                    </IconContext.Provider>
                    </span>
                    <input type="text"/>
                   </div>
                </div>
                <div className="float-right px-5">
                   <div>
                   <IconContext.Provider value={{ color: "gray",size:'1.5em',className: "global-class-name" }}>
                        <Nav>
                            <NavItem>
                                 <NavLink href="#" className="d-flex align-items-center text-gray px-0">
                                 <IconContext.Provider value={{size:'1em',className: "global-class-name" }}>
                                     <span className="pb-1"><BsPlus /></span>
                                     <span className="px-1 " style={{color:'gray',fontWeight:'600'}}>Add</span>
                                     </IconContext.Provider>
                                    </NavLink>
                            </NavItem>
                            <NavItem>
                                 <NavLink href="#">
                                     <GoMail />
                                 </NavLink>
                            </NavItem>
                            <NavItem>
                            <UncontrolledDropdown>
                            <Dropdown isOpen={dropdownOpen} toggle={toggle} className="mt-1">
                                <DropdownToggle caret style={{color:'gray',fontWeight:'600'}}>
                                        {loginedContact}
                                    </DropdownToggle>
                                <DropdownMenu>
                                    {Data.map((res,i) =>
                                        <DropdownItem key={i} id={res.id.$oid} onClick={(e) => Login(e)}>{res.first_name+" "+res.last_name}</DropdownItem>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                            </UncontrolledDropdown>
                           </NavItem>
                            <NavItem>
                                <NavLink href="#"><IoMdNotificationsOutline /></NavLink>
                            </NavItem>
                        </Nav>
                    </IconContext.Provider>
                    <div> 
                    </div>
                   </div>
                </div>
            </div>
        </>
    )
}