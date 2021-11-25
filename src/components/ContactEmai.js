import React from 'react'
import { IoMailOutline } from 'react-icons/io5'

function ContactEmai() {
    return (
        <div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        <IoMailOutline size={100}/>
        <header style={{
                fontFamily: "Monospace",
                fontWeight: "bold",
                fontSize: 40,
                marginTop: 10,
                marginBottom: -10,
                }}>
                EMAIL</header></div>
                <div style={{
                    alignItems: 'center'
                }}><h2 style={{
                    margin: '10px'
                }}>Lab Manager: <a href="mailto:metalabindia@hotmail.com">metalabindia@hotmail.com</a></h2>
            <h2 style={{
                    margin: '10px'
                }}>Reception: <a href="mailto:metalabpune@hotmail.com">metalabpune@hotmail.com</a></h2></div>
            
        </div>
    )
}

export default ContactEmai
