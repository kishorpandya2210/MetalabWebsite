import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, ButtonGroup, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import Mechanical from './Mechanical';
import Chemical from './Chemical';
import Metallography from './Metallography';
import Icg from './Icg';
import Polymer from './Polymer';
import Miscellaneous from './Miscellaneous';

export class EnterContactInfo extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.handleMechanical = this.handleMechanical.bind(this);
        this.handleChemical = this.handleChemical.bind(this);
        this.handleMetallography = this.handleMetallography.bind(this);
        this.handleICG = this.handleICG.bind(this);
        this.handlePolymer = this.handlePolymer.bind(this);
        this.handleMiscellaneous = this.handleMiscellaneous.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        
    }

    handleMiscellaneous(event){
        document.getElementById("mech").style.display='none';
        document.getElementById("chem").style.display='none';
        document.getElementById("meta").style.display='none';
        document.getElementById("icg").style.display='none';
        document.getElementById("rupo").style.display='none';
        document.getElementById("misc").style.display='block';
    }

    handlePolymer(event){
        document.getElementById("mech").style.display='none';
        document.getElementById("chem").style.display='none';
        document.getElementById("meta").style.display='none';
        document.getElementById("icg").style.display='none';
        document.getElementById("rupo").style.display='block';
        document.getElementById("misc").style.display='none';
    }

    handleICG(event){
        document.getElementById("mech").style.display='none';
        document.getElementById("chem").style.display='none';
        document.getElementById("meta").style.display='none';
        document.getElementById("icg").style.display='block';
        document.getElementById("rupo").style.display='none';
        document.getElementById("misc").style.display='none';
    }

    handleMetallography(event){
        document.getElementById("mech").style.display='none';
        document.getElementById("chem").style.display='none';
        document.getElementById("meta").style.display='block';
        document.getElementById("icg").style.display='none';
        document.getElementById("rupo").style.display='none';
        document.getElementById("misc").style.display='none';
    }

    handleChemical(event){
        document.getElementById("mech").style.display='none';
        document.getElementById("chem").style.display='block';
        document.getElementById("meta").style.display='none';
        document.getElementById("icg").style.display='none';
        document.getElementById("rupo").style.display='none';
        document.getElementById("misc").style.display='none';
    }

    handleMechanical(event){
        document.getElementById("mech").style.display='block';
        document.getElementById("chem").style.display='none';
        document.getElementById("meta").style.display='none';
        document.getElementById("icg").style.display='none';
        document.getElementById("rupo").style.display='none';
        document.getElementById("misc").style.display='none';
    }
    
    handleSubmit1(event) {
        event.preventDefault();
        const name = document.getElementById("name").value
        const cname = document.getElementById("cname").value
        const email = document.getElementById("email").value
        const ph = document.getElementById("ph").value
        const address = document.getElementById("address").value

        if(name === ''){
            alert("Enter valid name")
            return
        }
        else if(cname === ''){
            alert("Enter valid company name")
            return
        }
        else if(ph.length !== 10){
            alert("Enter a valid ten digit mobile number")
        }
        else if(email.indexOf("@") === -1){
            alert("Enter valid email ID")
            document.getElementById('email').value=null
            return
        }
        // document.getElementById("services").style.display='block'
        // this.handleMechanical();

      }
    
    render() {
        return (
            <div>
            <div style={{
                marginLeft: '0',
                marginRight: '0',
                backgroundColor: '#f4f4f4'
            }}>
                <h2>Please enter the following information</h2>
                <Form style={{
                    margin: "10px"
                }}>
                    <FormGroup>
                        <FormLabel>Name:* </FormLabel>
                        <FormControl type="text" id="name"/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Company Name:* </FormLabel>
                        <FormControl type="text" id="cname"/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Mobile Number:* </FormLabel>
                        <div className="input-group">
                            <FormControl type="text" aria-disabled value="+91" style={{
                                width: "15%",
                                textAlign: 'center'
                            }}/>
                            <span className="input-group-addon">-</span>
                            <FormControl type="number" id="ph" style={{
                                width: "80%",
                            }}/>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email Address:* </FormLabel>
                        <FormControl type="text" id="email" placeholder="name@example.com"/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Address: </FormLabel>
                        <FormControl as="textarea" id="address" rows={5}/>
                    </FormGroup>
                    <Button onClick={this.handleSubmit1} variant='primary'>Continue</Button>
                </Form>         
                </div>
                <br></br>
                <hr></hr>
                <div id="services" style={{
                    display: 'none'
                }}>
                <ButtonGroup>
                    <Button onClick={this.handleMechanical}>Mechanical</Button>
                    <Button onClick={this.handleChemical}>Chemical</Button>
                    <Button onClick={this.handleMetallography}>Metallography</Button>
                    <Button onClick={this.handleICG}>ICG</Button>
                    <Button onClick={this.handlePolymer}>Rubber/Polymer</Button>
                    <Button onClick={this.handleMiscellaneous}>Miscellaneous</Button>
                </ButtonGroup>
                <div id="mech" display='block'><Mechanical></Mechanical></div>
                <div id="chem" display='none'><Chemical></Chemical></div>
                <div id="meta" display='none'><Metallography></Metallography></div>
                <div id="icg" display='none'><Icg></Icg></div>
                <div id="rupo" display='none'><Polymer></Polymer></div>
                <div id="misc" display='none'><Miscellaneous></Miscellaneous></div>
                </div>
            </div>
        )
    }
}


export default EnterContactInfo

