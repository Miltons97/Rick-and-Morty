import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";

export default function Detail () {
    const {id } = useParams ();
    const [character, setCharacter] = useState ({
      name: "",
      status: "",
      species: "",
      gender: "",
      origin: {},
      location: {},
      image: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
           .then((response) => response.json())
           .then((char) => {
            console.log(char)
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
           return setCharacter ({
            name: "",
            status: "",
            species: "",
            gender: "",
            origin: {},
            location: {},
            image: "",
           })
         
     }, [id]);    


    return character === undefined ? (
      <h1>CARGANDO</h1>):(<div>
      <div>
         <button onClick={()=>navigate("/home")}>Volver</button>
      </div>
    <h1>Name:{character.name}</h1>
     <h2>Status:{character.status}</h2>
     <h2>Species: {character.species}</h2>
     <h2>Gender:{character.gender}</h2>
     <h2>Origin: {character.origin.name}</h2>
    
    </div>
    )
}