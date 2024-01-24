
import { useState } from 'react';
import './App.css';

function App() {
  const [inputbut, setbut] = useState(true);
  const [text,settext]=useState("hide element");

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
  return (
    <div>
      <ul>
        {useritems}
      </ul>

      <button type='button' onClick={()=>{FunVisible()}}>{text}</button>
      {inputbut && <p>This is p element</p>}
      {/* toogle element visibility */}
    
     
    </div>
  )
}

export default App;
