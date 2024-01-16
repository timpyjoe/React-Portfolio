import { Button, Col, Row, Container } from "react-bootstrap";


export default function() {

  // Function will execute on click of button
  const onButtonClick = () => {
     
    // using Java Script method to get PDF file
    fetch("../../Tech Resume Template.pdf").then((response) => {
        response.blob().then((blob) => {
         
            // Creating new object of PDF file
            const fileURL =
                window.URL.createObjectURL(blob);
                 
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "tpoffResume.pdf";
            alink.click();
        });
    });
};


  return(
    <>
      <h2>Resume</h2>
      <p>My resume can be downloaded by clicking the button below</p>
      <Button onClick={onButtonClick} variant="primary">Download Resume</Button>
    
      <h3 style={{paddingTop: "20px"}}>Technologies I have experience in:</h3>
      <Container>
        
      <Row>
        <Col sm={12} md={4}>
          <h4>Frontend</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </Col>

        <Col sm={12} md={4}>
          <h4>Backend</h4>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </Col>

        <Col sm={12} md={4}>
          <h4>Other</h4>
          <ul>
            <li>Git</li>
            <li>npm</li>
            <li>GraphQL</li>
            <li>Python</li>
            <li>SQL Server</li>
            <li>Microsoft Excel</li>
            <li>Microsoft Access</li>
            <li>Windows Server</li>
            <li>Wireshark</li>
          </ul>
        </Col>
    
      </Row>
      </Container>
    
    </>
  )
}