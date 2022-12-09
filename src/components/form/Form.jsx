import React from "react"
import { validation } from "./validation"

export default function Form(props) {
   const [userData, setUserData] = React.useState ({
    username: '',
    password: ''
   })
   const [errors,setError] = React.useState({
      username:"",
      password: ""
   })

   function handleInputChange (e) {
      setUserData({...userData,[e.target.name]: e.target.value})
      setError(validation({...userData,[e.target.name]: e.target.value}))
   }   
   function handleSubmit(e){
      e.preventDefault()
   }
   
   function handleSubmit2 (){
       props.Login(userData)
  
    }

   return ( <div><form onSubmit={handleSubmit}>
    <label htmlFor="username">Username:</label>
    <input
    id="username"
    name="username"
    placeholder="Ingrese su Id..."
    type='text'
    value={userData.username}
    onChange={handleInputChange}
    />
    <p>{errors.username}</p>
    <label htmlFor="password">Password:</label>
    <input
    id="password"
    name="password"
    type='password'
    value={userData.password}
    onChange={handleInputChange}
    />
    <p>{errors.password}</p>
   
   <button type="submit" onClick={handleSubmit2}>Ingresar</button>

</form>
</div>
   );
}
