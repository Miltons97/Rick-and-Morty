 import { useState } from "react";
import style from "./SearchBar.module.css"



 
 export default function SearchBar(props) {
  
  const {onSearch} = props
   const [character, setCharacter] = useState("");
 const handleChange = (event) => {
   
   setCharacter(event.target.value)

 }   

   return (
      <div className={style.search}>
         <input type='search' value={character} onChange ={handleChange} />
      <button onClick={() => onSearch (character)} className={style.button}>Search</button> 
      </div>    );
}
