import React from 'react'
import { useSelector } from 'react-redux'

export const ViewContact = () =>{
    
    const Data = useSelector(state => state.Chats.profiles[0]);

    return(
        <>
          <div className="d-flex flex-column p-5" style={{backgroundColor:'whitesmoke'}}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="ImageText" style={{backgroundColor:`${Data.color}`,width:'70px',height:'70px',fontSize:'45px'}}>{Data.first_name[0]+Data.last_name[0]}</div>
                    <div><h4>{Data.first_name+""+Data.last_name}</h4></div>
                    <hr/>
              </div>
              <div>
                <p><span style={{color:'gray'}} className="pr-2">Name :</span>{Data.first_name+""+Data.last_name}</p>
                <p><span style={{color:'gray'}} className="pr-2">Email: </span>{Data.email}</p>
                <p><span style={{color:'gray'}} className="pr-2">Company: </span>{Data.company}</p>
              </div>
        </div>
        </>
    )
}