import React, { useState } from 'react';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
  MDBCheckbox,
  MDBInputGroup,
  MDBCol,
  MDBTypography,
  MDBContainer
} from 'mdb-react-ui-kit';
import { calculateAge, nestedObjectSetter } from '../../../utils/MyUtils';
import { random } from 'lodash';

const initData = {
  name: {
    title:'Mrs',
    first:'',
    last:'',
  },
  gender:'female',
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
  dob:{
     date:'',
     age:''
  },
  phone:'',
  cell:'',
  nat:'',
  uid: random(100000)
}

export default function AddContact(props) {
 
  const [formValue, setFormValue] = useState({...initData});

  const onChange = (e) => {     
    nestedObjectSetter(formValue,e.target.name, e.target.value);   
    setFormValue({ ...formValue });
  };

  const onSubmitClick = (e) => {
    let isValid = true;
    for (let i = 0; i < e.target.length; i++) {
      const ele = e.target[i];
      isValid = isValid && ele.validity.valid;
      if(!isValid) break;
    }
    if(isValid){
      formValue.dob.age = calculateAge(formValue.dob.date);
      props.addContact(formValue);
      props.onToggleModalShow();
    }
  }

  const onResetClick = (e) => {
    setFormValue({ ...initData });
  }

  const TITLES = ["Ms", "Mrs", "Mr"];
  const GENDERS = [{name: "Male",value:"male"}, {name: "Female",value:"female"}];
  const COUNTRIES = [{name: "India",value:"IN"}, {name: "Israil",value:"IL"}, {name: "UAE",value:"AE"}];
  
  return (
    <MDBContainer>
    <MDBValidation onSubmit={onSubmitClick}  className='row g-3'>
      
      <MDBTypography className='mt-4 mb-0' variant='h5'>Name</MDBTypography>
      
      <MDBCol className='col-md-4'>
      <select onChange={onChange} name='name.title' value={formValue.name.title} className='form-control'>
        {TITLES.map(title => <option key={title}>{title}</option>)}
      </select>
      </MDBCol>
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

      <MDBTypography className='mt-4 mb-0' variant='h5'>Personal Information</MDBTypography>
      
      <MDBValidationItem className='col-md-4'>        
        <MDBInputGroup textBefore='Gender'>
          <select onChange={onChange} name='gender' value={formValue.gender} className='form-control'>
            {GENDERS.map(gender => <option key={gender.value} value={gender.value}>{gender.name}</option>)}
          </select>
        </MDBInputGroup>
      </MDBValidationItem>

      <MDBValidationItem className='col-md-4'>        
      <MDBInputGroup textBefore='Nationality'>
        <select onChange={onChange} name='nat' value={formValue.nat} className='form-control'>
          {COUNTRIES.map(country => <option key={country.value} value={country.value}>{country.name}</option>)}
        </select>
      </MDBInputGroup>
      </MDBValidationItem>


      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.dob.date}
          name='dob.date'
          onChange={onChange}
          id='dob.date'
          type="date"
          required
          label='DOB'
        />
      </MDBValidationItem>

      <MDBTypography className='mt-4 mb-0' variant='h5'>Contact Information</MDBTypography>

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

      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.phone}
          name='phone'
          onChange={onChange}
          type="tel"
          id='phone'
          required
          label='Phone'
        />
      </MDBValidationItem>

      <MDBValidationItem className='col-md-4'>
        <MDBInput
          value={formValue.cell}
          name='cell'
          onChange={onChange}
          id='cell'
          type="tel"
          required
          label='Cell'
        />
      </MDBValidationItem>

      <MDBTypography className='mt-4 mb-0' variant='h5'>Address</MDBTypography>
      <MDBValidationItem className='col-md-4' feedback='Please provide a valid street number.' invalid>
        <MDBInput
          type="number"
          value={formValue.location.street.number}
          name='location.street.number'
          onChange={onChange}
          id='location.street.number'
          label='Street Number'
        />
      </MDBValidationItem>
      <MDBValidationItem className='col-md-8' feedback='Please provide a valid street name.' invalid>
        <MDBInput
          value={formValue.location.street.name}
          name='location.street.name'
          onChange={onChange}
          id='location.street.name'
          required
          label='Street Name'
        />
      </MDBValidationItem>

      <MDBValidationItem className='col-md-3' feedback='Please provide a valid city.' invalid>
        <MDBInput
          value={formValue.location.city}
          name='location.city'
          onChange={onChange}
          id='location.city'
          required
          label='City'
        />
      </MDBValidationItem>

      <MDBValidationItem className='col-md-3' feedback='Please provide a valid state name.' invalid>
        <MDBInput
          value={formValue.location.state}
          name='location.state'
          onChange={onChange}
          id='location.state'
          required
          label='State'
        />
      </MDBValidationItem>

      <MDBValidationItem className='col-md-3'>        
      <MDBInputGroup textBefore='Country'>
        <select onChange={onChange} name='location.country' value={formValue.location.country} className='form-control'>
          {COUNTRIES.map(country => <option key={country.value} value={country.value}>{country.name}</option>)}
        </select>
      </MDBInputGroup>
      </MDBValidationItem>

      <MDBValidationItem className='col-md-3' feedback='Please provide a valid zip.' invalid>
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
    </MDBContainer>
  );
}