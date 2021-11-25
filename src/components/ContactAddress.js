import React from 'react'


function ContactAddress() {
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60484.944685380025!2d73.75682095269052!3d18.650123004635393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9daffffffff%3A0x47fe3cf00333c25!2sMetalab!5e0!3m2!1sen!2sin!4v1627037317993!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
    
    function Iframe(props) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
      }
    
    return (
        <div>
        <Iframe iframe={iframe} />   
        </div>
    )
}

export default ContactAddress
