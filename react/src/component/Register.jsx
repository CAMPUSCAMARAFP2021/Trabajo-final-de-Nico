import { useState } from "react";

const Register = ({onRegisterClick}) => {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');

    const inputUserHandler = ({target}) => setUser(target.value);
    const inputPasswordHandler = ({target}) => setPassword(target.value);

    return <>
    
    <body class="text-center">
    <main class="form-signin">
    
  
        <h1 class="h3 mb-3 fw-normal">SignIn</h1>
        <div class="form-floating">
        <input type="text"class="form-control"id="username" name={username} onChange={inputUserHandler}></input><br/>
        <label for="username">Nombre de Usuario</label>
        </div>
        <div class="form-floating">
        <input type="password" class="form-control" id="password" name={password} onChange={inputPasswordHandler}></input><br/>
        <label for="password">Contraseña</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" onClick={() => onRegisterClick(username,password)}>Register</button><br/><br/>
        
       
        </main>
        </body>
    </>
}

export default Register;