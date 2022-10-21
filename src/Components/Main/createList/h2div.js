import React from "react";
import H2 from "./h2";
import listInput from "../Modal/Form";
import DeleteButton from "./DeleteButton";
import CheckButton from "./CheckButton";
import EditButton from "./EditButton";




export default function H2Div(){

 const listInput= ["Test1","Test2","Test3","Test4","Test5"]
    
    
return(
    listInput.map((input) => ( 
        <div className="listItemButton">
        <CheckButton className="button2"/>
        
        <div className="h2div">
        <H2 text={input}/>
        </div> 
        <EditButton className="button3"/>
        <DeleteButton className="button1"/>
    </div>
        
             
        ))
    

    )
}