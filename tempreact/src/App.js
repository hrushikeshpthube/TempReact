
import { useState } from 'react';
import './App.css';

function App() {
  const [inputbut, setbut] = useState(true);
  const [text,settext]=useState("hide element");
  const [bindtext,setbind]=useState("");
  const [disbutval,setdisbut]=useState(true)

  const FunVisible = () => {
    setbut(!inputbut);
    inputbut?settext("show element") :settext("hide element")
  }

  
  const arr = ['hi', 'hello', 'great'];
  const useritems = arr.map((item, index) => {
    return (
      <li key={index}>{item}</li>
    )
  })

// const Fun2Bind=(event)=>{
//   // event.prevent.default;
//   console.log(event.target.value);
//   const temp=event.target.value;
//   setbind(temp);
//   // if(bindtext.length===0)
//   // {setdisbut("disabled")}
//   // else {setdisbut("")}
  
// }
// const Fundisablebutton=()=>{
//   return(
//   bindtext.length<1?setdisbut(true):setdisbut(false)
//   )
// }

  return (
    <div>
      <ul>
        {useritems}
      </ul>

      <button type='button' onClick={()=>{FunVisible()}}>{text}</button>
      {inputbut && <p>This is p element</p>}
      {/* toogle element visibility */}
    
     
     <input type="text" placeholder="Enter text" onChange={(event)=>{setbind(event.target.value)}}value={bindtext}></input>
     <button type="button" disabled={ bindtext.length<1?true:false}>submit</button>
     <p>{bindtext}</p>
    </div>
  )
}

export default App;
