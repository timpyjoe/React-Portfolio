import Project from "./Project"

export default function Portfolio() {


  return(
    <>
      <h2>Projects</h2>
      <div className="projects">
        
        <Project imgPath="../../assets/Unblurrd.png" title="Unblurrd: Game Review" gitLink="https://github.com/VictorMontelongo/Project-2-Video-Game-Reviews" deployLink="https://video-game-review-eb186ee09616.herokuapp.com/"/>
        <Project imgPath="../../assets/Hockey-Trivia.png" title="Hockey Trivia Game" gitLink="https://github.com/mhalder4/group-project-1" deployLink=""/>
        <Project imgPath="../../assets/Note Taker.png" title="Note Taking App" gitLink="https://github.com/timpyjoe/Notes-Taker" deployLink="https://notes-taker-app-94f83f45691b.herokuapp.com/notes"/>
        <Project imgPath="../../assets/Code-stock.jpg" title="README Generator" gitLink="https://github.com/timpyjoe/README-generator" deployLink="https://drive.google.com/file/d/1_sHoPDzMugQD8IhuGO3O0A0LnQhUoIQu/view"/>
        <Project imgPath="" title="" gitLink="" deployLink=""/>
        <Project imgPath="" title="" gitLink="" deployLink=""/>
      </div>
    
    
    
    </>
  )

}