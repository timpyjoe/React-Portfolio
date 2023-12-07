import {useState} from "react"


export default function Project({ imgPath, title, gitLink, deployLink}){

  const [ isShown, setIsShown ] = useState(false)


  return(
    <div className="projectItem" >
      <a href={deployLink} target="_blank">
      <img src={imgPath} alt={title}  
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      />
      </a>
      {/* {isShown && (
        <div className="content">
          I appear when Shown
        </div>
      )} */}
      <p>{title}</p>
      <a href={gitLink} target="_blank">
        <i className="fa-brands fa-github" />
      </a>

      


    </div>
  )
}