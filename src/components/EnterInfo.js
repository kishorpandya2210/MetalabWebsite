import React from 'react'
import emailjs from 'emailjs-com'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, ButtonGroup, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'

function EnterInfo() {

    function sendEmail(e) {
        e.preventDefault();
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
            return
        }
        else if(email.indexOf("@") === -1){
            alert("Enter valid email ID")
            document.getElementById('email').value=null
            return
        }

        emailjs.sendForm('service_9url4qk', 'template_maq90cu', e.target, 'user_AUynqzBLA6SgcJHFkXxbU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          alert("Request submitted, our representative will contact you shortly.");
          e.target.reset();
        }
    return (
        <div>

        <Form className="contactForm" onSubmit={sendEmail} style={{
            margin: '10px'
        }}>
            <FormGroup>
                        <FormLabel>Name:* </FormLabel>
                        <FormControl type="text" id="name" name="name"/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Company Name:* </FormLabel>
                        <FormControl type="text" id="cname" name="cname"/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Mobile Number:* </FormLabel>
                        <div className="input-group">
                            <FormControl type="text" aria-disabled value="+91" style={{
                                width: "15%",
                                textAlign: 'center'
                            }}/>
                            <span className="input-group-addon">-</span>
                            <FormControl name="number" type="number" id="ph" style={{
                                width: "80%",
                            }}/>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email Address:* </FormLabel>
                        <FormControl type="text" id="email" name="email" placeholder="name@example.com"/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Address: </FormLabel>
                        <FormControl as="textarea" id="address" name="address" rows={5}/>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Inquiry: </FormLabel>
                        <FormControl as="textarea" id="inquiry" name="inquiry" rows={5}/>
                    </FormGroup>
                    <Button type="submit" value="continue">Send</Button>        
        </Form>
        </div>
    )
}

export default EnterInfo
