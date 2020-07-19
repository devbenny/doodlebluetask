import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { IconContext } from "react-icons";
import { RiMenu2Line,RiContactsLine,RiCalendarTodoLine } from 'react-icons/ri';
import { AiOutlineHome,AiOutlineFileSearch,AiOutlinePieChart,AiOutlineSetting } from "react-icons/ai";
import { FiDatabase } from "react-icons/fi";

export const Sidebar = () => {
    return(
        <>
          <div className="sidebar">
            <div>
                <IconContext.Provider value={{ color: "#fff",size:'1.7em', className: "global-class-name" }}>
                    <div className="py-3 px-4">
                        <RiMenu2Line />
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "#fff",size:'1.3em', className: "global-class-name" }}>
                    <Nav vertical className="px-2 pt-4">
                        <NavItem>
                            <NavLink href="#"><AiOutlineHome /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"><RiContactsLine /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"><AiOutlineFileSearch /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"><AiOutlinePieChart /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"><FiDatabase /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"><RiCalendarTodoLine /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#"><AiOutlineSetting /></NavLink>
                        </NavItem>
                    </Nav>
                </IconContext.Provider>
            </div>
          </div>
        </>
    )
}