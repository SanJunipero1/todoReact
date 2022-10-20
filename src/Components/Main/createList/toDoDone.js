import React from "react";
import Button from "./button";
import H2 from "./h2";
import H2Bottom from "./h2bottom"




export default function ToDoDone(){
 const listInputDone= ["DONE1","DONE2","DONE3","DONE4","DONE5","DONE6"]
   
    function handleClick(){
        alert("hello")
        //let innerText =prompt("Änderungen");
        //console.log(innerText)
       }
    
return(
    listInputDone.map((handleClick) => ( 
        <H2Bottom />
        
             
        ))
    

    )
}