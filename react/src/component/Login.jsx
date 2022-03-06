import { useState } from "react";

const Login = ({onLoginClick}) => {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');

    const inputUserHandler = ({target}) => setUser(target.value);
    const inputPasswordHandler = ({target}) => setPassword(target.value);

    return <>
        <input type="text" name={username} onChange={inputUserHandler}></input>
        <input type="password" name={password} onChange={inputPasswordHandler}></input>
        <button onClick={() => onLoginClick(username,password)}>Login</button>
    </>
}

export default Login;