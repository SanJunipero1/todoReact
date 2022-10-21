import React from "react";

export default function CheckButton({className,onClick}){
    function handleClick(){
        alert("hello Check")
    }

    
    
    return(
        <button onClick={handleClick} className={className} ></button>
    )
}