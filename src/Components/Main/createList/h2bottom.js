import React from "react";
import Button from "./button";
import H2 from "./h2";

export default function H2Bottom(){
    
    function handleClick(){
        alert("hello")
        //let innerText =prompt("Änderungen");
        //console.log(innerText)
       }
       
   return(
       
           <div className="listItemButton">
           <div className="h2div">
           <H2 />
           </div> 
           <Button className="button1" onClick={handleClick}/>  
           </div>
           
                
           
       
   
       )
   }