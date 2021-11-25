import React from 'react'
import ContactAddress from '../components/ContactAddress'
import ContactCard from '../components/ContactCard'
import ContactEmail from '../components/ContactEmai'
import ContactPhone from '../components/ContactPhone'

function Contact() {
    return (
        <div style={{
            display: 'flex'
        }}>
        <div><ContactEmail/>
        <hr></hr>
            <ContactPhone/></div>
        <ContactAddress/>
        </div>
    )
}

export default Contact
