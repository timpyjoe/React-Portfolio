import { Form, Button } from "react-bootstrap"
import {useState } from "react"


export default function Contact(){


  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return(
    <>
      <h2>Contact Me</h2>
      <p>Shoot me a message and I'll try to get back to you as soon as I can!</p>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group  className="mb-3" controlId="formBasicName" >
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" required></Form.Control>
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" required></Form.Control>
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage" >
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" required></Form.Control>
          <Form.Control.Feedback type="invalid">
            Message is required
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    
    
    </>
  );
}