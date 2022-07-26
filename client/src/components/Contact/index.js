import React from 'react'
import ContactCards from './ContactCards'
import { useEffect, useState } from 'react'
import { ASC, DAYS_UNTIL_BD, FIRST_NAME, LAST_NAME } from '../../constants/AppConstants';
import Loader from '../../components/Loader';
import { sortContacts } from '../../utils/MyUtils';
import { MDBBtn, MDBCol, MDBInput, MDBRadio, MDBRow } from 'mdb-react-ui-kit';
import MyModal from '../Modal/MyModal';
import AddContact from './AddContact'
import Summary from './Summary';

function Contact(props) {
  const {loading, orignalContactList, fetchContacts} = props;
  const [filteredData, setFilteredData] = useState([])
  const [searchFilter, setSearchFilter] = useState();
  const [sortOrder, setSortOrder] = useState(ASC);
  const [sortColumn, setSortColumn] = useState(FIRST_NAME);
  const [toggleModalShow, setToggleModalShow ] = useState(false);
  const ADD_CONTACT_BUTTON = "Add New Contact"; //afroz all these to constant
  useEffect(() => {
    fetchContacts();
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

  useEffect( () => {
    sortContacts(orignalContactList, sortColumn, sortOrder);
    setFilteredData([...orignalContactList])
  }, [loading, orignalContactList, sortColumn, sortOrder])

  const onChangeSearchFilter = (event) => {
    setSearchFilter(event.target.value);
  }
  const onChangeSortOrder = (event) => {
    setSortOrder(event.target.value);
  }
  const onChangeSortColumn = (event) => {
    setSortColumn(event.target.value);
  }
  const onToggleModalShow = () => {
    setToggleModalShow(!toggleModalShow);
  }

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <main className='container-fluid px-5 py-3'>
      <section>
        <Summary contacts={filteredData}/>
      </section>
      <section className="my-3">
      <MDBRow>
      <MDBCol  md='3' className='my-2'>
        <MDBInput onChange={onChangeSearchFilter} value={searchFilter} label='Search' id='searchFilter' type='text' />
        </MDBCol>        
        <MDBCol md='3'  className='my-2'>
        <select onChange={onChangeSortColumn}  value={sortColumn} name="sortColumn" className='form-control'>
          <option value={FIRST_NAME}>First Name</option>
          <option value={LAST_NAME}>Last Name</option>
          <option value={DAYS_UNTIL_BD}>Days Until Next Birtday</option>
        </select>
        </MDBCol>        
        <MDBCol md='3'  className='my-2'>
          <MDBRadio onChange={onChangeSortOrder} defaultChecked name='sortOrder' id='sortOrderAsc' value='asc' label='Asc' inline />
          <MDBRadio onChange={onChangeSortOrder} name='sortOrder' id='sortOrderDesc' value='desc' label='Desc' inline />
        </MDBCol>        
        <MDBCol md='3'  className='my-2'>
        {
          toggleModalShow &&
        <MyModal
                className="mymodal"
                toggleShow={toggleModalShow}
                onToggleModalShow={onToggleModalShow}
                cancel
                title={ADD_CONTACT_BUTTON}
              >
                <AddContact onToggleModalShow={onToggleModalShow} addContact={props.addContact}/>
        </MyModal>}
        <MDBBtn  onClick={onToggleModalShow} className='mr-3 w-100' color='primary' size='lg' tag='a'>
          {ADD_CONTACT_BUTTON}
        </MDBBtn>          
        </MDBCol>        
      </MDBRow>
      </section>
      <section>
        {filteredData?.length < 1 && <h1>No Matching Data</h1>}
        <ContactCards deleteContact={props.deleteContact} contacts={filteredData} />
      </section>
    </main>
  )
}

export default Contact