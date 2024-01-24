
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"; 
import Displayfetcharr from './Displayfetcharr';

function App() {
  const [inputbut, setbut] = useState(true);
  const [text,settext]=useState("hide element");
  const [bindtext,setbind]=useState("");
  const [fetchedData,setfetchdata]=useState(null)
  useEffect(()=>{ getdata();},[])

  
  // const [disbutval,setdisbut]=useState(true)

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

const getdata=async ()=>{
  try {
    
      
    // const response=await fetch('https://jsonplaceholder.typicode.com/todos');
    // console.log("response=\n",response);
    // console.log("Typeof response=\n",typeof(response));
    
    // const actualdata=await response.json();
    // console.log("Actual Data= \n",actualdata);
    // console.log("Typeof actual data=\n",typeof(actualdata));
    const response= await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log(response.data);
    const tempdata=response.data;
    console.log("tempdata=",response.data[0]);
    console.log("tempdata[0]=",tempdata[0].title);
    setfetchdata(tempdata);



  }
  catch (error) {
    console.log("Error=",error);
  }
}



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

       <div>
       {fetchedData && <Displayfetcharr dataarr={fetchedData}></Displayfetcharr>}
      </div>
    </div>
   
  )
}

export default App;
