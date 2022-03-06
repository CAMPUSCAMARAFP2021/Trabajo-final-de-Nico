import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from './component/RecipeList';
import Container from 'react-bootstrap/Container';
import Login from './component/Login';
import Register from './component/Register';
import { login } from './api/users';
import { useState } from 'react';
import LogOutButton from './component/LogOutButton';
const App = () =>{
  const [jwt, setJwt] = useState(false);
 
  const onLoginClick = (username, password) => {
    login(username,password)
     .then((jwt)=> setJwt(jwt))
     .catch((error) => console.log('falla'))
  }
   
  return <Container className="p-3">
     <Container className="p-5 mb-4 bg-light rounded-3">
       <h1 className="header">NicoRecetas</h1>
       {jwt ? <>
         <LogOutButton onLogOut={() => setJwt(false)}></LogOutButton>
         <RecipeList jwt={jwt} />
       </> : 
       <Login onLoginClick={onLoginClick}/>}
     </Container>
   </Container> 
 }

export default App;