import { useState } from "react";
import Button from './Button.jsx';


const RecipeForm = ({createRecipe}) => {
    const [recipe, setRecipe] = useState(
        {
            "title": "",
            "duration": "",
            "amount": "",
            "description": "",
            "difficulty": "",
        }
    );

    const setTitle = ({target}) => {
        const title = target.value;
        setRecipe(lastValue => ({ ...lastValue,  title }))
    }
    const setDuration = ({target}) => {
        const duration = target.value;
        setRecipe(lastValue => ({ ...lastValue, duration }))
    }
    const setAmount = ({target}) => {
        const amount = target.value;
        setRecipe(lastValue => ({ ...lastValue,  amount }))
    }
    const setDescription = ({target}) => {
        const description = target.value;
        setRecipe(lastValue => ({ ...lastValue,  description }))
    }
    const setDifficulty = ({target}) => {
        const difficulty = target.value;
        setRecipe(lastValue => ({ ...lastValue,  difficulty }))
    }


    return <>
    <br></br>
        <form>
        <label>Introduce el nombre de la receta</label>
            <br></br>
            <input type="text" placeholder="Escribe aquí" name="title" onChange={setTitle} value={recipe.title}></input>
            <br></br>
            <label>Introduce la duración de la receta (en minutos)</label>
            <br></br>
            <input type="number" placeholder="Escribe aquí" name="duration" onChange={setDuration} value={recipe.duration}></input>
            <br></br>
            <label>Introduce el número de raciones</label>
            <br></br>
            <input type="number" placeholder="Escribe aquí" name="amount" onChange={setAmount} value={recipe.amount}></input>
            <br></br>
            <label>Introduce la descripción de la receta</label>
            <br></br>
            <input type="text" placeholder="Escribe aquí" name="amount" onChange={setDescription} value={recipe.description}></input>
            <br></br>
            <label>Introduce la dificultad</label>
            <br></br>
            <input type="text" placeholder="Escribe aquí" name="amount" onChange={setDifficulty} value={recipe.difficulty}></input>
            <br></br>
        </form>
        <br></br>
        <Button name="enviar" onClick={() => createRecipe(recipe)}></Button>
        <br></br>
    </>;
}
export default RecipeForm;