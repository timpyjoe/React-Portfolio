import Project from "./Project"
import { Col, Row } from "react-bootstrap"

export default function Portfolio() {


  return(
    <>
      <h2>Projects</h2>
      <div className="projects">
        <Row>
          <Col sm={12} md={6}>
          <Project imgPath="../../gifty.jpg" title="Gifty: Gift Idea Tracker" gitLink="https://github.com/timpyjoe/Gift-idea-tracker" deployLink="https://gifty-gift-idea-tracker-9346ec5c500d.herokuapp.com/"/>
          </Col>
          <Col sm={12} md={6}>
          <Project imgPath="../../Unblurrd.png" title="Unblurrd: Game Review" gitLink="https://github.com/VictorMontelongo/Project-2-Video-Game-Reviews" deployLink="https://video-game-review-eb186ee09616.herokuapp.com/"/>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
        <Project imgPath="../../Hockey-Trivia.png" title="Hockey Trivia Game" gitLink="https://github.com/timpyjoe/Hockey-Trivia" deployLink="https://timpyjoe.github.io/Hockey-Trivia/"/>
          </Col>
          <Col sm={12} md={6}>
        <Project imgPath="../../Note Taker.png" title="Note Taking App" gitLink="https://github.com/timpyjoe/Notes-Taker" deployLink="https://notes-taker-app-94f83f45691b.herokuapp.com/notes"/>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
        <Project imgPath="../../Code-stock.jpg" title="README Generator" gitLink="https://github.com/timpyjoe/README-generator" deployLink="https://drive.google.com/file/d/1_sHoPDzMugQD8IhuGO3O0A0LnQhUoIQu/view"/>
          </Col>
          <Col sm={12} md={6}>
        <Project imgPath="../../portfolio.png" title="Portfolio Webpage" gitLink="https://github.com/timpyjoe/React-Portfolio" deployLink="https://main--hilarious-torte-26d0ae.netlify.app/portfolio"/>
          </Col>
        </Row>
      </div>
    
    
    
    </>
  )

}