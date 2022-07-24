import React, { useState } from 'react';
import Background from "../../../assets/images/banner.jpeg"
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import AddContact from '../../Contact/AddContact';
import MyModal from '../../Modal/MyModal';
import "./index.css"

export default function App() {
  const [toggleModalShow, setToggleModalShow ] = useState(false);
  const ADD_CONTACT = "Add New Contact";
  const onToggleModalShow = () => {
    setToggleModalShow(!toggleModalShow);
}
  return (
    <header>
      <MDBNavbar expand='lg' dark bgColor='dark '>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink className='text-white' aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='text-white' href='#'>Contact</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='text-white' href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
      <MyModal
                className="mymodal"
                toggleShow={toggleModalShow}
                onToggleModalShow={onToggleModalShow}
                cancel="true"
                title={ADD_CONTACT}
              >
                <AddContact />
      </MyModal>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${Background})`, height: 350 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Contact List</h1>
              <a onClick={onToggleModalShow} className='btn btn-outline-light btn-lg' href='#!' role='button'>
                {ADD_CONTACT}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}