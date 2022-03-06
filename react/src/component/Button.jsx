import { useState } from 'react';

const Button = ({name, onClick}) => {

    const [loading, setLoading] = useState(false);

    return   <button onClick={() => { setLoading(true); onClick()}}>{name}</button>

}  

export default Button;