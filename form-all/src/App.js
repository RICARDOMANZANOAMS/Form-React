
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';

import fields from './fields';
function App() {
  const [inputs,setInputs]=useState(fields);

  const handleChange=(id,value1)=>{
    // ...input copy the actual value of a single element input and writes in the value field the value1 which was received
    const updateInputs=inputs.map((input)=> input.id===id ? {...input,value:value1}: input);
    setInputs(updateInputs);
  };
  return (
      

    <div className="App">
      < Navbar />
      
      <header className="App-header">
        <form action="" className="Form-ric">
       
        {inputs.map((input)=>(
          
          <ul>
            <li className='listparam'>
            <label htmlFor={input.id}>{input.name}</label>
            <input 
            id={input.id}
            key={input.id}
            type="text"
            value={input.value}
            onChange={(e)=>handleChange(input.id,e.target.value)}
            />
            </li>
          </ul>
     
          

        )
       )}

        </form>
        
        
        
        
       
        </header>
    </div>
  );
}

export default App;
