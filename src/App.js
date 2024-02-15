import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  let [val1,setval1]=useState("");
  let [val2,setval2]=useState("");
  let [ans,setans]=useState("");

  const sumfuc=()=>{
      setans(parseInt(val1)+parseInt(val2));
  }
  const subfuc=()=>{
    setans(parseInt(val1)-parseInt(val2));
}
const multifuc=()=>{
  setans(parseInt(val1)*parseInt(val2));
}
const divfuc=()=>{
  setans(parseInt(val1)/parseInt(val2));
}

  return (
    <div>
      <input type="text" placeholder="Enter value 1" onChange={(e)=>{setval1(e.target.value)}}></input><br></br>
      <input type="text" placeholder="Enter value 2" onChange={(e)=>{setval2(e.target.value)}}></input><br></br>
      <input type="button" value="Sum" onClick={sumfuc}></input>
      <input type="button" value="Sub" onClick={subfuc}></input>
      <input type="button" value="Multi"onClick={multifuc}></input>
      <input type="button" value="Div" onClick={divfuc}></input><br></br>
      <input type="text" placeholder='Answer' value={ans}></input>
    </div>
  );
}

export default App;
