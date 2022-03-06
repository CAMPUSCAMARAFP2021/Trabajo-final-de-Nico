import { useState } from "react";

const Login = ({onRegisterClick}) => {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');

    const inputUserHandler = ({target}) => setUser(target.value);
    const inputPasswordHandler = ({target}) => setPassword(target.value);

    return <>
        <br></br>
        <label for="floatingInput">Nombre</label>
        <input class="form-control" type="text" name={username} onChange={inputUserHandler}></input>
        <br></br>
        <label for="floatingPassword">Contraseña</label>
        <input class="form-control" type="password" name={password} onChange={inputPasswordHandler}></input>
        <br></br>
        <button class="w-100 btn btn-lg btn-primary"  onClick={() => onRegisterClick(username,password)}>Registrar</button>
        <label>
            <a href="Login">Iniciar Sesion</a>
        </label>
    </>
}

export default Login;