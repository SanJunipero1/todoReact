import React from "react";

export default function EditButton({className,onClick}){
    function handleClick(){
        let neuerText = prompt("Änderung");
       
    }

    
    
    return(
        <button onClick={handleClick} className={className} ></button>
    )
}