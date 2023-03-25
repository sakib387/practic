import React from 'react'
import './ContactLinst.css'
 
 
import user1 from '../images/user.png'
export default function ContactLinst(props) {
  function delete_(id){
    props.grtid(id);
  }
  return (
    <div>
        {
            props.user.map((user)=>{
             
                return  (
                    <> 
                   
                  dfkglsjl
                   <div key={user.date}>
                    <div className='sakib'>

                   <img className='image' src={user1} alt="user"/>
                    <h2>{user.name}</h2>
                    <h2>{user.email}</h2>

                    <button className='btn1' type='submit' onClick={()=>{
                      delete_(user.key);
                    }}>Delete</button>
                    </div>
                    </div>
                    
                    
                    </>
                )
        })
    }
    </div>
  )
}
