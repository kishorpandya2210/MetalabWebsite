import React from 'react'
import { IoCallOutline } from 'react-icons/io5'

function ContactPhone() {
    return (
        <div>
        <div style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center'
        }}>
        <IoCallOutline size={100}/>
        <header style={{
                fontFamily: "Monospace",
                fontWeight: "bold",
                fontSize: 40,
                marginTop: 10,
                marginBottom: -10,
                }}>
                PHONE</header></div>
                <div style={{
                    alignItems: 'center'
                }}><h2 style={{
                    margin: '10px'
                }}>Lab Manager: +91-9371012525</h2>
            <h2 style={{
                    margin: '10px'
                }}>Reception: +91-2027241711, +91-2027243596, +91-9130020305</h2></div>
            
        </div>
    )
}

export default ContactPhone
