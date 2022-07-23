import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { ICON_EMAIL, ICON_LOCATION, ICON_PHONE, IMG_ALT } from '../../../constants/AppConstants';
import AppIcon from '../../AppIcon';
import "./index.css"
import Mailto from '../../MailTo';

export default function ContactCard(props) {
    const { contact } = props;
    const name = `${contact?.name?.title} ${contact?.name?.first} ${contact?.name?.last}`;
    const borderColorClass = contact?.gender==="male" ? "male-image-border" : "female-image-border";
    return (
        <MDBCol>
            <MDBCard className='h-100 p-3 mycard'>
                <MDBCardImage                    
                    className={'rounded-circle h-75 w-75 image-border ' + borderColorClass }
                    src={contact.picture.large}
                    alt={IMG_ALT}
                    position='top'
                />
                <MDBCardBody>
                    <MDBCardTitle>{name}</MDBCardTitle>
                    <MDBCardText>
                    <MDBRow  className='mt-3'>
                        <MDBCol sm="2"><AppIcon iconType={ICON_EMAIL} /></MDBCol> 
                        <MDBCol><Mailto email={contact.email}/></MDBCol>
                    </MDBRow> 
                    <MDBRow  className='my-2'>
                        <MDBCol sm="2"><AppIcon iconType={ICON_PHONE} /></MDBCol> 
                        <MDBCol>{contact.cell}</MDBCol>
                    </MDBRow> 
                    <MDBRow>
                        <MDBCol sm="2"><AppIcon iconType={ICON_LOCATION} /></MDBCol> 
                        <MDBCol>{contact.location.city}</MDBCol>
                    </MDBRow> 
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
}