import { useState } from 'react'

import './App.css'
const arr = ["play cricket","play video game","read book"];

function App() {

// i am taking one state for the arr
  const[items,Setitem] = useState(arr);

// this one is for currentindex
const [currentindex,Setcurrentindex] = useState(null);

/// handle delete
const deletehandle =()=>{
 Setitem((prev)=>{
  return prev.filter((itemss,index)=>{
    return index!=currentindex;
  });
 });

}
const checkClick = (index) => {
  Setcurrentindex(index === currentindex ? null : index);


};
  return (
    <>
   <h1>List </h1>
   {items.map((item,index)=>
   {
    return(
      <div key={index} >
       <input  type="checkbox" onChange={() => checkClick(index)} checked={index === currentindex}/> <li key ={index} id={index}>{item} {index === currentindex && <button onClick={deletehandle}>delete</button>}</li> 
      </div>
    )
   })}
    </>
  )
}

export default App
