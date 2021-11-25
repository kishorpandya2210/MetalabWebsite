import React from 'react'
import metalab1 from '../metalab1.jpg'
import nabl1 from '../nabl1.jpg'
import nabl2 from '../nabl2.jpg'

function Home() {
    return (
        <div>
            <h1>The Company</h1>
            <div style={{
                display: 'flex'
            }}>
            <p>Metalab as the name says is a metallurgical testing laboratory which is in field of testing for last 35 years performing all kind of chemical, mechanical and metallurgical testing for ferrous, non-ferrous and other organic components like rubber, plastics, etc.
            Metalab is a  metallurgical testing laboratory equipped with facilities to carry out  testing of all metallic products, rubber and plastic components etc. Metalab has specialized in field of Chemical, Mechanical and Metallurgical analysis.
            Metalab is well equipped with the latest and sophisticated test equipments to cater to the needs of its customers. The staff is well qualified and experienced, led by two technocrat Partners. The Firm has gained wide repute for prompt and accurate services and the  clientele´ includes many multinational and leading Industrial houses. 
            </p>
            <img alt="Metalab picture"
                src={metalab1}
                height='25%'
                width='25%'
                />
            </div>

            <h1>Quality Policy</h1>
            <div style={{
                display: 'flex'
            }}><p>the quality Policy</p></div>

            <h1>Certification</h1>
            <div style={{
                display: 'flex'
            }}><img alt="NABL certificate"
                src={nabl1}></img>
                <p>Metalab has been successfully accredited by NATIONAL ACCREDITATION BOARD FOR TESTING AND CALIBRATION LABORATORIES as per the requirements of ISO/IEC 17025:2005 since 2000 and have maintained the same.
                The lab has each year added new parameters to its existing scope and tried to introduce all the test which the lab is capable of doing in the scope..
            </p>
            <img alt="NABL certificate"
            src={nabl2}></img></div>
        </div>
        
    )
}

export default Home
