import { MDBCol, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'
import GaugeChart from "react-gauge-chart";
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
    <MDBCol lg="3"><MDBTypography color="primary" className='h4'>No Of Contacts : {count}</MDBTypography></MDBCol>
    <MDBCol><MDBTypography color="primary" className='h4'>Countries : {countries}</MDBTypography></MDBCol>
    </MDBRow>
    </>
  )
}
