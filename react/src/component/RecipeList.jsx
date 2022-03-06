import Recipe from "./Recipe"
import RecipeForm from './RecipeForm';

import { useState, useEffect } from 'react';
import { getRecipes,   createRecipes,    deleteRecipes} from "../api/recipes";

const RecipeList = ({jwt}) => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreateRecipe = (recipe) => {
        setIsLoading(true);
        createRecipes(recipe)
            .then((newRecipe) => {
                 setRecipes((prevState) => [...prevState, newRecipe]);
                 setIsLoading(false);       
            }); 
    };
    

    const doDeleteRecipe = (recipe) => {
       setIsLoading(true);
       deleteRecipes(recipe)
       .then(loadData);
       setIsLoading(false)
   };

    const loadData = () => {
        setIsLoading(true);
        getRecipes(jwt).then((recipes) => {    
            setRecipes(recipes);
            setIsLoading(false)
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
    return <>
        {isLoading ? 
            <p>espera...</p> : 
            recipes.map(recipe => 
                <Recipe 
                    key={recipe._id} 
                    recipe={recipe} 
                   onDelete={() => doDeleteRecipe(recipe)}
                />)}
        <RecipeForm createRecipe={doCreateRecipe}></RecipeForm>
    </>
        
}
    

export default RecipeList;