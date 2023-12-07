import { Form, Button } from "react-bootstrap"


export default function Contact(){



  return(
    <>
      <h2>Contact Me</h2>
      <p>Shoot me a message and I'll try to get back to you as soon as I can!</p>

      <Form >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email"></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message:</Form.Label>
          <Form.Control type="text-area"></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    
    
    </>
  )
}