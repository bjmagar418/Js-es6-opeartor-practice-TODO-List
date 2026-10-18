import React from "react";
import { useState } from "react";

let nextId = 0;

function App() {
 const [name,setName] = useState('');
 const[artists,setArtists]= useState([])
 
 function inputText(event){
  setName(event.target.value);
 }
 function addingArtistsToArray(){
  setArtists([
    ...artists,
    {id:nextId++,name:name}
  ])
 }

 
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type={name} onChange={inputText}/>
        <button onClick={addingArtistsToArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>{artists.map((artist) => (
            <li key={artist.id}>{artist.name}</li>
          ))}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
