import { NavLink } from "react-router-dom"
import images from "../compontents/Icons"
import {Tally4, X} from "lucide-react"
import { useState } from "react"


function Header (){
  
  const [interaction, setInteraction]=useState(false)

  const barsInteraction = () =>{
      setInteraction(!interaction)

  }

  return(
  <>
     <header>
        <section className="menu">
          <div className="menu-mobile" onClick={barsInteraction}>
            {interaction ? <X /> : <Tally4/>}
          </div>
          
          
          <div className="logo">
            <img src={images.Logo} alt="" />
          </div>
          <nav>
             <ul className={interaction ? "active" : ""}>
               <li>
                <NavLink to="/" className={({isActive})=> isActive ? "active" : "" }>Home</NavLink>
               </li>
               <li>
                <NavLink to="/about">About</NavLink>
               </li>
               <li>
                <NavLink to="/contactos" >Contactos</NavLink>
               </li>
             </ul>
          </nav>
        </section>
     </header>
  </>
  )
}

export default Header

