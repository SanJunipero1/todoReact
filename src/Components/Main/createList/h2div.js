import React from "react";
import Button from "./button";
import H2 from "./h2";
import listInput from "../Modal/Form";




export default function H2Div(){

 const listInput= ["Test1","Test2","Test3","Test4","Test5"]
    
    
return(
    listInput.map((input) => ( 
        <div className="listItemButton">
       <Button className="button2"/>
        <div className="h2div">
        <H2 text={input}/>
        </div> 
        <Button className="button3"/>
        <Button className="button1"/>  
    </div>
        
             
        ))
    

    )
}