import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate,} from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/nav/Nav';
import Detail from './components/detail/Detail.jsx'
import About from './components/about/About.jsx'
import  Form  from './components/form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx'


function App() {
  const [access,setAccess]= useState(false);
  const location = useLocation()
  const [characters, setCharacters] = useState ([]);
  const navigate = useNavigate();

const username = 'milton@gmail.com'
const password = 'milton123';

useEffect(() => {
  !access && navigate('/');    
}, [access]);   

function Login (userData){
  if(userData.username === username && userData.password === password){
    setAccess(true);
    navigate ("/home");

  }else{
    alert('Usuario o Contraseña incorrecta')
  }  
 
}  


function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else { 
           window.alert('No hay personajes con ese ID');
        }   
     });   
}     
function onClose (id) {
 setCharacters(characters.filter(char => char.id !== id)) 
} 


  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
      {location.pathname !== '/' && <Nav onSearch = {onSearch}/>}
      </div>
      <Routes>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/' element={<Form Login ={Login}/>}/>
        <Route path='/home' element={<Cards characters = {characters} onClose={onClose}/>}
        />
        <Route path='/about'  element={<About />}/>
        <Route path='/detail/:id' element={<Detail />}/>
      </Routes>
  
      
      
      </div>
  
   
  )
}

export default App
