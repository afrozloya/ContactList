import React, { useState } from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBCardFooter, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { ICON_EMAIL, ICON_LOCATION, ICON_PHONE, IMG_ALT } from '../../../../constants/AppConstants';
import AppIcon from '../../../AppIcon';
import "./index.css"
import Mailto from '../../../MailTo';
import Confirm from '../../../Modal/Confirm';
import MyModal from '../../../Modal/MyModal';
import ContactDetails from '../ContactDetails';
import unknownImage from '../../../../assets/images/unknown.png';

export default function ContactCard(props) {
    const { contact } = props;
    const [toggleConfirmShow, setToggleConfirmShow] = useState(false);
    const [toggleMoreShow, setToggleMoreShow] = useState(false);
    const onToggleConfirmShow = () => {
        setToggleConfirmShow(!toggleConfirmShow);
    }
    const onToggleMoreShow = () => {
        setToggleMoreShow(!toggleMoreShow);
    }
    const name = `${contact?.name?.title} ${contact?.name?.first} ${contact?.name?.last}`;
    const borderColorClass = contact?.gender === "male" ? "male-image-border" : "female-image-border";
    return (
        <MDBCol>
            <MDBCard className='h-100 p-3 mycard'>
                <MDBCardImage
                    className={'rounded-circle h-50 w-50 card-image ' + borderColorClass}
                    src={contact?.picture?.medium || unknownImage}
                    alt={IMG_ALT}
                    position='top'
                />
                <MDBCardBody>
                    <MDBCardTitle>{name}</MDBCardTitle>
                    <MDBCardText>
                        <MDBRow className='mt-3'>
                            <MDBCol sm="2"><AppIcon iconType={ICON_EMAIL} /></MDBCol>
                            <MDBCol><Mailto email={contact.email} /></MDBCol>
                        </MDBRow>
                        <MDBRow className='my-2'>
                            <MDBCol sm="2"><AppIcon iconType={ICON_PHONE} /></MDBCol>
                            <MDBCol>{contact.cell}</MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol sm="2"><AppIcon iconType={ICON_LOCATION} /></MDBCol>
                            <MDBCol>{contact.location.city}</MDBCol>
                        </MDBRow>
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className='text-center'>
                    {toggleConfirmShow && <Confirm deleteContact={() => props.deleteContact(contact.uid)}
                        toggleShow={toggleConfirmShow}
                        onToggleConfirmShow={onToggleConfirmShow} />}
                    {toggleMoreShow &&
                        <MyModal 
                            toggleShow={toggleMoreShow} 
                            onToggleModalShow={onToggleMoreShow}
                            cancel="true"
                            title={name}
                            >
                            <ContactDetails contact={contact} />
                        </MyModal>}
                    <MDBBtn color='primary' floating size='lg' tag='a'>
                        <MDBIcon onClick={onToggleMoreShow} fas icon="info" />
                    </MDBBtn>
                    <MDBBtn className='mx-3' color='danger' floating size='lg' tag='a'>
                        <MDBIcon onClick={onToggleConfirmShow} fas icon="trash" />
                    </MDBBtn>
                </MDBCardFooter>
            </MDBCard>
        </MDBCol>
    );
}