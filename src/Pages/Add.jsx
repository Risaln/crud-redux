import React, { useState } from 'react';
import {
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addToRoom } from '../Redux/roomSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add() {
  const dispatch = useDispatch()
  const rooms = useSelector(state => state.addToRoomReducer)
  
  const [id, setId] = useState('')
  const [Name, setName] = useState('')
  const [Place, setPlace] = useState('')
  const [Mobile, setMobile] = useState('')
  const [Address, setAddress] = useState('')


  console.log(id, Name, Place, Mobile, Address);

 
  const handleAdd = () => {
    if (id === '' || Name === '' || Place === '' || Mobile === '' || Address === '') {
      toast.error('Please fill in all required fields', {
        position: 'top-center',
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } 
    
    else if (rooms.some(item => item.id === id)) {
      toast.error('Enter unique ID', {
        position: 'top-center',
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
    
    
    else {
      const body = {
        id: id,
        name: Name,
        place: Place,
        mobile: Mobile,
        address: Address
      };
  
      dispatch(addToRoom(body));
  
      toast('Room added Successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  
  
    }
  };
  

  

  return (
    <div className='m-3'>
      <h3> Add House/Hostel Details
      </h3>
      <div className='m-3 p-3' >
        <MDBRow tag="form" className='g-3'>
          <MDBCol md="1">
            <MDBInput
              name='fname'
              id='validationCustom01'
              required
              label='Id'
              onChange={(e) => setId(e.target.value)}


            />
          </MDBCol>
          <MDBCol md="3">
            <MDBInput
              name='fname'
              required
              label='Name'
              onChange={(e) => setName(e.target.value)}

            />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              name='place'
              id='validationCustom02'
              required
              label='Place'
              onChange={(e) => setPlace(e.target.value)}

            />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              name='mobile'
              id='validationCustom03'
              required
              label='Mobile'
              onChange={(e) => setMobile(e.target.value)}

            />
          </MDBCol>

          <MDBCol md="5">
            <MDBInput
              name='address'
              id='validationCustom03'
              required
              label='Address'
              onChange={(e) => setAddress(e.target.value)}

            />
          </MDBCol>

          <MDBCol md="5">

          </MDBCol>


          <MDBCol size="12">

            <MDBBtn onClick={handleAdd} type='button'>Submit form</MDBBtn>

          </MDBCol>
        </MDBRow>
      </div>
      <ToastContainer />


    </div>
  )
}

export default Add



