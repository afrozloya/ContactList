import React, { useState } from 'react';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBInputGroup
} from 'mdb-react-ui-kit';

export default function AddContact() {
  const [formValue, setFormValue] = useState({
    name: {
      title:'',
      first:'',
      last:'',
    },
    gender:'',
    location:{
       street:{
          number:'',
          name:''
       },
       city:'',
       state:'',
       country:'',
       postcode:'',
    },
    email:'',
    login:{
       uuid:'',
       username:'',
       password:'',
    },
    dob:{
       date:'',
       age:''
    },
    phone:'',
    cell:'',
    nat:''
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <MDBValidation className='row g-3'>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.name.first}
          name='fname'
          onChange={onChange}
          id='validationCustom01'
          required
          label='First name'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.name.last}
          name='lname'
          onChange={onChange}
          id='validationCustom02'
          required
          label='Last name'
        />
      </MDBValidationItem>
      <MDBValidationItem feedback='Please choose a username.' invalid className='col-md-4'>
        <MDBInputGroup textBefore='@'>
          <input
            type='text'
            className='form-control'
            id='validationCustomUsername'
            placeholder='Username'
            required
          />
        </MDBInputGroup>
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Please provide a valid city.' invalid>
        <MDBInput
          value={formValue.location.city}
          name='city'
          onChange={onChange}
          id='validationCustom03'
          required
          label='City'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Please provide a valid zip.' invalid>
        <MDBInput
          value={formValue.location.postcode}
          name='zip'
          onChange={onChange}
          id='validationCustom05'
          required
          label='Zip'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-12' feedback='You must agree before submitting.' invalid>
        <MDBCheckbox label='Agree to terms and conditions' id='invalidCheck' required />
      </MDBValidationItem>
      <div className='col-12'>
        <MDBBtn className='mx-3' type='submit'>Submit</MDBBtn>
        <MDBBtn color='warning' type='reset'>Reset</MDBBtn>
      </div>
    </MDBValidation>
  );
}