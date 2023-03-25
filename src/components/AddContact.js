import React, { useState } from 'react'
import './AddContact.css'
import { v4 as uuidv4 } from 'uuid';
export default function AddContact(props) {
    const [name,setname]=useState("");
    const [email,setEmail]=useState("");
  
    function change_email(e){
        setEmail(e.target.value);
    }
    function change_name(e){
        setname(e.target.value);
    }
    function addUser(){
      if(name.length>0&&email.length>0){
       const  key=uuidv4();
        
       
          const user={
            key,  name,email
          }
          props.addUser(user);
          setEmail("");setname("");
      }
      else{
        alert("Must fill both fild")
      }
    }
    return (
        <div className='container' >
            <label htmlFor ="fname">Name:</label> 
            <input onChange={change_name}  className='input' type="text" id="fname" value={name}name="fname"placeholder='Name'/>
            <label htmlFor ="fname">Email:</label> 
            <input onChange={change_email} className='input' type="text" id="fname" value={email} name="fname"placeholder='Email'/>
           <button className='btn' type='submit'  onClick={addUser}>submit</button>
    </div>
    )
}
