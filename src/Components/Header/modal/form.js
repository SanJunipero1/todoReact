import React from "react";
import Button from "./button";

export default function Form(){
    return(
        <form method="dialog">
           <input id="todoTitle" type="text" placeholder="What's to do?" />
           <Button id="submit" type="submit" name={"Submit"}/>
           <Button id="cancel" name={"Cancel"}/>
            
        </form>
    )
}