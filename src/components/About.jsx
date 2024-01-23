import { Row, Col } from "react-bootstrap"

export default function About(){



  return(
    <>
      <Row>
        <Col sm={12} md={6}>

      <h2>About Me</h2>
      <p>
        Hello, my name is Tim and I am a Junior Full-Stack Web Developer. I'm passionate about learning new things, and love trying to find new and interesting ways to incorporate previous experiences into current and future projects. I'm well rounded in my skills and bring what I've learned from my craft to give projects my own personal style.
      </p>
      <p>
        When I'm not working or coding, I enjoy cooking, playing video games, and spending time with cats. I try to travel as much as I can, with some of my favorite places to visit being San Diego, California and Aspen, Colorado. I am also almost always listening to music, and see my favorite bands live in concert whenever I have the opportunity.
      </p>
        </Col>
        <Col sm={12} md={6}>
          <img src={"../../Profile Pic.png"} alt={"Picture of Tim Poffenberger"}/>
        </Col>
      </Row>
    
    </>
  )
}