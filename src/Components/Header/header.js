import React from "react"
import Title from "./title"
import Navmenu from "./navmenu/navmenu"
import Logo_todo from "./navmenu/Logo_todo.png"

export default function Header(){
    return(
        <header>
       <div className="containerHeader">
          <img src={Logo_todo} id="logo"/>
            <Title />
           <Navmenu />
       </div>
       </header>
    )
}