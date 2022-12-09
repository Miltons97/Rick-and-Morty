import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addPersonaje, deletePersonaje } from '../redux/actions';
import { connect } from 'react-redux';
import { useState } from 'react';
import {useEffect} from 'react';
import React from 'react';



function Card(props) {
  const [isFav, setIsFav] = useState(false)
  
     useEffect(() => {
      props.myFavorites.forEach(fav => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

  const handleFavorite = () => {
   if(isFav) {
      setIsFav(false)
       props.deletePersonaje(props.id)
   }else {
      setIsFav(true)
       props.addPersonaje(props)
   }  

  }


   return (
      <div className={styles.card}>   
        
         {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
         <button onClick={handleFavorite}>🤍</button>
         )}
         <button onClick={()=>props.onClose(props.id)}>X</button>

        
        
         <Link to={`/detail/${props.id}`}>
           <h2>
             {props.name}
           </h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt="" />

   
      </div>
   
   )
}

export function mapDispatchToProps(dispatch){
  return{addPersonaje:(personaje)=> dispatch(addPersonaje(personaje)), 
          deletePersonaje: (id) => dispatch(deletePersonaje(id))}
}


export function mapStateToProps (state){
   return {
      myFavorites: state.myFavorites
   }
}
 export default connect(mapStateToProps, mapDispatchToProps)(Card)
