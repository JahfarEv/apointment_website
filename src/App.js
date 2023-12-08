import React,{useEffect,useState} from "react";
import "./Card.css"

function App(){

  const [count1,setcount1]=useState(0)
  const [count2,setcount2]=useState(0)

  useEffect(()=>{
    console.log('hi iam loaded')

  },[count1])
  const Add1=()=>{setcount1(count1+1)}
  const Add2=()=>{setcount2(count2+1)}

  return (
    <div className="container">
      <h1>{count1}</h1>
      <h1>{count2}</h1>
      <button onClick={Add1}>Add1</button>
      <button onClick={Add2}>Add2</button>
    </div>
  )

}






export default App