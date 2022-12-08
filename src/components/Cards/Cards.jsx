import Card from "../Card/Card";
import styles  from '../Cards/Cards.module.css'


export default function Cards(props) {
   const { characters, onClose} = props;


   return (
   <div className={styles.container}>
     {characters.map((char) =>  (
     <Card
     key = {char.id}
     id={char.id}
     name = {char.name}
     species = {char.species}
     gender = {char.gender}
     image = {char.image}
     onClose = { onClose } 
     />
    )) }
   </div>
);
}
