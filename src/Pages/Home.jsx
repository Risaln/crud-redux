import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';

  import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
  import Add from '../Pages/Add';
  import { MDBCollapse } from 'mdb-react-ui-kit';
  import BiBuildingHouse from '@meronex/icons/bi/BiBuildingHouse';
  import { useDispatch } from 'react-redux';
import { addToRoom, deleteRoom, updateUser } from '../Redux/roomSlice';

import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom';



function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    const dispatch=useDispatch()
    const roomArray=useSelector(state=>state.addToRoomReducer)

console.log(roomArray);

const navigate = useNavigate();



  return (
    <>
     {/* <h3 className='text-center m-3'>Welcome.. </h3> */}
     
     <div style={{margin:'20px'}} >
        
     <MDBBtn onClick={toggleOpen}>Add <BiBuildingHouse/> </MDBBtn>
      <MDBCollapse open={isOpen}>
        <Add/>
      </MDBCollapse>
     </div>


     <div  style={{margin:'50px' }}>
     <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Place</th>
          <th scope='col'>Mobile</th>
          <th scope='col'>Address</th>
          <th scope='col'>Action</th>

        </tr>
      </MDBTableHead>
      <MDBTableBody>
     {  
      
     roomArray?.length>0?roomArray.map((item)=>(
        <tr>
        <th scope='row'>{item.id}</th>
        <td>{item.name}</td>
        <td>{item.place}</td>
        <td>{item.mobile}</td>
        <td>{item.address}</td>
        <td>
        <Link to={'/edit/'+item.id}> <button className='btn btn-primary me-3'><i className='fa-solid fa-pen '></i></button></Link>

        <button onClick={() => dispatch(deleteRoom(item.id))} className='btn btn-danger me-3' ><i class="fa-solid fa-trash"></i></button>

        </td>
        
      </tr>
     )

   
      ):[]
     
    
     }
      </MDBTableBody>
    </MDBTable>
     </div>

     
  

    </>
  )
}

export default Home