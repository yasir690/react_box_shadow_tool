

import React, { useState } from 'react'
import './App.css'
import Form from 'react-bootstrap/Form';

const App = () => {

  const [hori,sethori]=useState(10);
  const [veri,setveri]=useState(10);
  const [blur,setblur]=useState(10);
  const [color,setcolor]=useState('black');
  return (
    <>
     <h1 className='head'>box shadow generator tool</h1>
     <hr className='hr'/>

     <div className='main'>
      <div className='inputs'>

      <Form.Label>horizontal shadow</Form.Label>
      <Form.Range min="-200" max="200" value={hori} onChange={(e)=>sethori(e.target.value)}/>
      <Form.Label>vertical shadow</Form.Label>
      <Form.Range min="-200" max="200" value={veri} onChange={(e)=>setveri(e.target.value)}/>
      <Form.Label>blur</Form.Label>
      <Form.Range  max="200" value={blur} onChange={(e)=>setblur(e.target.value)}/>

         <Form.Control
            type="color"
            id="exampleColorInput"
            defaultValue="#563d7c"
            title="Choose your color"
            value={color}
            onChange={(e) => setcolor(e.target.value)}
          />
        </div>
        <div className='output'>
         
            <div className='box' style={{boxShadow:`${hori}px ${veri}px ${blur}px ${color}`}}>
             <p className='para'>boxShadow:{hori}px {veri}px {blur}px {color}</p>    
            </div>
          </div>  
     </div>
    </>
  )
}

export default App