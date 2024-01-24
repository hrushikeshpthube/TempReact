import { useState } from "react";

const Displayfetcharr = ({ dataArray }) => {
    // useState[count,setcount]=useState(0);

    return (
      <div>
        <h1>Array of Objects:</h1>
        <ul>
          {dataArray?.slice(0, 10).map((item,index) => (
            
         
            <li key={index}>
              {item}
            </li>
           
              
           
            ))}
          
        </ul>
      </div>
    );
  };
export  default Displayfetcharr;