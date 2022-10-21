import React from "react";
import Button from "./DeleteButton";
import H2 from "./h2";
import H2Bottom from "./h2bottom"




export default function ToDoDone(){
 const listInputDone= ["DONE1","DONE2","DONE3","DONE4","DONE5","DONE6"]
   
    
return(
    listInputDone.map(() => ( 
        <H2Bottom />
        
             
        ))
    

    )
}