import React, { useEffect, useState } from "react"
import './App.css';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactLinst from "./ContactLinst"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  const key = "user_key"
  const [contact, setContact] = useState([]);
function Add_new_user(user) {
  setContact(prevContact => {
    const updatedContact = [...prevContact, user];
    localStorage.setItem(key, JSON.stringify(updatedContact));
    return updatedContact;
  });
}

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem(key));

    console.log("Retrieved item from local storage:", item);

    if (item) {
      setContact(item);
      console.log("Updated contact state:", contact);
    }
  }, []);
 
 
  function delete_(id) {
    const a = prompt("Are you sure to delete this user? ");
    if (a === "yes") {

      const new_data = contact.filter((item) => {
        return item.key !== id;
      })
      setContact(new_data)
    }
  }
  return (
    <div >
      <BrowserRouter>
      <Header/>
      
        <Routes>

          <Route path="/add" Component={() => (
            <AddContact addUser={Add_new_user} />
          )} />
          
          <Route path="/list" component={() => (
  <ContactLinst user={contact} grtid={delete_} />
)} />
        </Routes>
        <ContactLinst user={contact} grtid={delete_}/>
      </BrowserRouter>
      {/*
     <AddContact addUser={Add_new_user}/>
  <ContactLinst user={contact} grtid={delete_}/>*/}
    </div>
  );
}

export default App;
