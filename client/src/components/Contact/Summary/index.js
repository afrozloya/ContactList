import { MDBCol, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import "./index.css"

export default function Summary(props) {
  const {contacts} = props;
  const [count, setCount] = useState(0);
  const [countries, setCountries] = useState(0)
  useEffect(() => {
    setCount(contacts?.length || 0);
    const countries = [...new Set(contacts?.map(item => item.location?.country))];
    setCountries(countries?.length || 0);
  }, [contacts])
  
  return (
    <>
    <MDBRow>
    <MDBCol lg="3"><MDBTypography color="primary" className='h4'>No Of Contacts : <CountUp start={0} end={count} duration={2} delay={0.5} /></MDBTypography></MDBCol>
    <MDBCol><MDBTypography color="primary" className='h4'>Countries : <CountUp start={0} end={countries} duration={2} delay={0.5} /></MDBTypography></MDBCol>    
    </MDBRow>
    </>
  )
}
