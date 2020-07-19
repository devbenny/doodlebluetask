import React,{ useState } from 'react'
import { Container,Row,Col } from 'reactstrap'
import Contacts from '../components/contacts/index'
import ChatBot from '../components/chat'
import { ViewContact } from '../components/contacts/viewcontact'

export const MainSection = () =>{
    
    const [showChat, setshowChat] = useState(false);
    const [showContact, setshowContact] = useState(false);

    return(
        <div className="content">
            <Container className="mx-5 py-4">
                <Row>
                    <Col md='7'> 
                        <Contacts setshowChat={setshowChat} setshowContact={setshowContact} />
                    </Col>
                    <Col style={{marginTop:'12rem'}}>
                    {showChat?
                        <ChatBot />:showContact?<ViewContact />:""
                    }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}