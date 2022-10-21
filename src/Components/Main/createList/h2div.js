

import DeleteButton from "./DeleteButton";
import CheckButton from "./CheckButton";
import EditButton from "./EditButton";
import React, { useState, useEffect } from "react";
import H2 from "./h2";
import listInput from "../Modal/Form";
import uuid from "react-uuid";
import Todo from "./Todo";


export default function H2Div({ input }) {
  console.log(input);

  let [list, setList] = useState(input);






    
    

    

  useEffect(() => {
    setList(
      input.length > 0 ? (
        input.map((item) => {
          console.log(item);
          // return <Todo key={uuid()} item={item} />;
          return (
            <div key={uuid()} className="listItemButton">
              <CheckButton className="button2" />
              <div className="h2div">
                <H2 text={item} />
              </div>
              <EditButton className="button3" />
              <DeleteButton className="button1" />
            </div>
          );
        })
      ) : (
        <div className="h2div">
          <H2 text={"Nothing to do yet"} />
        </div>
      )
    );
  }, [input]);

  return <>{list}</>;
}
