import React from "react";
import Button from "./button";
import H2 from "./h2";





export default function H2Div(){
  
const list =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    
    
return(
    list.map((zahl) => ( 
        <div className="listItemButton">
       <Button className="button2"/>
        <div className="h2div">
        <H2 text={zahl}/>
        </div> 
        <Button className="button3"/>
        <Button className="button1"/>  
    </div>
        
             
        ))
    

    )
}