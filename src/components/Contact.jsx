import { Form, Button } from "react-bootstrap"
import {useState } from "react"


export default function Contact(){

  const initialFormData = {
    from_name: "",
    email_id: "",
    message: ""
  }

  const [formData, setFormData ] = useState(initialFormData)
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    
    event.preventDefault();
    emailjs.send('service_gsvjojs', 'template_lglbhmo', formData)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  };

  return(
    <>
      <h2>Contact Me</h2>
      <p>Shoot me a message and I'll try to get back to you as soon as I can!</p>

      <Form noValidate validated={validated} onSubmit={handleSubmit} onChange={handleChange} name="contactForm">
        <Form.Group  className="mb-3" controlId="formBasicName" >
          <Form.Label>Name:</Form.Label>
          <Form.Control name="from_name" type="text" required></Form.Control>
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group  className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email:</Form.Label>
          <Form.Control name="email_id" type="email" required></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group  className="mb-3" controlId="formBasicMessage" >
          <Form.Label>Message:</Form.Label>
          <Form.Control name="message" as="textarea" required></Form.Control>
          <Form.Control.Feedback type="invalid">
            Message is required
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    
    
    </>
  );
}