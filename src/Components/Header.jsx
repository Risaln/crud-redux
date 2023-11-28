import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

import BiBuildingHouse from '@meronex/icons/bi/BiBuildingHouse';
import { Link } from 'react-router-dom';



function Header() {



  return (
    <div>
        <MDBNavbar light bgColor='secondary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <img
              src=''
              height='50'
              
              alt=''
              loading='lazy'
            />

NestHub
           
          </MDBNavbarBrand>
          <MDBNavbarBrand >
         {/* <Link to={'/add'}>
         <MDBBtn>Add new<BiBuildingHouse/>
</MDBBtn>
         </Link> */}

      
          </MDBNavbarBrand>

        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header