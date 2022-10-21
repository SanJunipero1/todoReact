import React from "react";

export default function DeleteButton({className,onClick}){
    function handleClick(){
        alert("hello Delete")
    }

    
    
    return(
        <button onClick={handleClick} className={className} ></button>
    )
}