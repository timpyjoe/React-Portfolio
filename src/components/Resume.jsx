import { Button } from "react-bootstrap";


export default function() {

  // Function will execute on click of button
  const onButtonClick = () => {
     
    // using Java Script method to get PDF file
    fetch("../../resume.pdf").then((response) => {
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
      <p>My resume can be downloaded by clicking the link below</p>
      <Button onClick={onButtonClick} variant="link">Download Resume</Button>
    
      <h3>Technologies I have experience in:</h3>

      <h4>Frontend</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>

      <h4>Backend</h4>
      <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
      </ul>

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
    
    
    </>
  )
}