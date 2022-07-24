import React, { useState } from 'react';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { nestedObjectSetter } from '../../../utils/MyUtils';
import { random } from 'lodash';

export default function AddContact(props) {
  const initData = {
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
    nat:'',
    uid: random(10000000)
  }
  const [formValue, setFormValue] = useState({...initData});
  const [valid, setValid] = useState(false);


  const onChange = (e) => {     
    nestedObjectSetter(formValue,e.target.name, e.target.value);   
    setFormValue({ ...formValue });
  };

  const onAbc = (e) => {     
    console.log(e);
  };


  const onSubmitClick = (e) => {
    let isValid = true;
    for (let i = 0; i < e.target.length; i++) {
      const ele = e.target[i];
      isValid = isValid && ele.validity.valid;
      if(!isValid) break;
    }
    if(isValid){
      props.addContact(formValue);
      props.onToggleModalShow();
    }
  }

  const onResetClick = (e) => {
    setFormValue({ ...initData });
  }

  
  return (
    <MDBValidation onSubmit={onSubmitClick}  className='row g-3'>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.name.first}
          name='name.first'
          onChange={onChange}
          id='name.first'
          required
          label='First name'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.name.last}
          name='name.last'
          onChange={onChange}
          id='name.last'
          required
          label='Last name'
        />
      </MDBValidationItem>
      <MDBValidationItem feedback='Please choose a email.' invalid className='col-md-4'>        
        <MDBInputGroup textBefore='@'>
          <input
            value={formValue.email}
            onChange={onChange}
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='EMail'
            required
          />
        </MDBInputGroup>
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Please provide a valid city.' invalid>
        <MDBInput
          value={formValue.location.city}
          name='location.city'
          onChange={onChange}
          id='location.city'
          required
          label='City'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-6' feedback='Please provide a valid zip.' invalid>
        <MDBInput
          value={formValue.location.postcode}
          name='location.postcode'
          onChange={onChange}
          id='location.postcode'
          required
          label='Zip'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-12' feedback='You must agree before submitting.' invalid>
        <MDBCheckbox label='Agree to terms and conditions' id='invalidCheck' required />
      </MDBValidationItem>
      <div className='col-12'>
        <MDBBtn className='mx-3' type='submit'>Submit</MDBBtn>
        <MDBBtn  onClick={onResetClick}  color='warning' type='reset'>Reset</MDBBtn>
      </div>
    </MDBValidation>
  );
}