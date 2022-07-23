import React from 'react'
import ContactCards from '../ContactCards'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ASC, DAYS_UNTIL_BD, FIRST_NAME, LAST_NAME, LIST_USER_URL } from '../../constants/AppConstants';
import Loader from '../Loader';
import { compareFirstName, sortContacts } from '../../utils/MyUtils';
import { MDBCol, MDBInput, MDBRadio, MDBRow } from 'mdb-react-ui-kit';


export default function App() {

  // const url = LIST_USER_URL;
  const url = "data.json";
  const [loading, setLoading] = useState(false)  
  const [filteredData, setFilteredData] = useState([])
  const [orignalContactList, setOrignalContactList] = useState([])
  const [searchFilter, setSearchFilter] = useState();
  const [sortOrder, setSortOrder] = useState(ASC);
  const [sortColumn, setSortColumn] = useState(FIRST_NAME);
 
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let res = orignalContactList;
    if (searchFilter) {
      const searchItem = searchFilter.toLowerCase();
      res = orignalContactList?.filter(contact => {
        const name = `${contact.name.first} ${contact.name.last}`;
        return name.toLowerCase().includes(searchItem);
      })
    }
    sortContacts(res, sortColumn, sortOrder);
    setFilteredData([...res]);
  }, [searchFilter, sortColumn, sortOrder])

  const getData = async () => {
    try {
      setLoading(true);
      const users = await axios.get(url);
      const res = users.data.results;
      setOrignalContactList(res)
      sortContacts(res, sortColumn, sortOrder);
      setFilteredData([...res])
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const onChangeSearchFilter = (event) => {
    setSearchFilter(event.target.value);
  }
  const onChangeSortOrder = (event) => {
    setSortOrder(event.target.value);
  }
  const onChangeSortColumn = (event) => {
    console.log(event.target.value)
    setSortColumn(event.target.value);
  }

  // const onChangeFormData = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value
  //   })
  // }

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <main className='container-fluid p-5'>
      <section className="mb-3">
      <MDBRow>
      <MDBCol>
        <MDBInput onChange={onChangeSearchFilter} value={searchFilter} label='Search' id='searchFilter' type='text' />
        </MDBCol>        
        <MDBCol>
        <select onChange={onChangeSortColumn}  value={sortColumn} name="sortColumn" className='form-control'>
          <option value={FIRST_NAME}>First Name</option>
          <option value={LAST_NAME}>Last Name</option>
          <option value={DAYS_UNTIL_BD}>Days Until Next Birtday</option>
        </select>
        </MDBCol>        
        <MDBCol>
          <MDBRadio onChange={onChangeSortOrder} defaultChecked name='sortOrder' id='sortOrderAsc' value='asc' label='Asc' inline />
          <MDBRadio onChange={onChangeSortOrder} name='sortOrder' id='sortOrderDesc' value='desc' label='Desc' inline />
        </MDBCol>        
      </MDBRow>
      </section>
      <section>
        {filteredData?.length < 1 && <h1>No Matching Data</h1>}
        <ContactCards contacts={filteredData} />
      </section>
    </main>
  )
}
