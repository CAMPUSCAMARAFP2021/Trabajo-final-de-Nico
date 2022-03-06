import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Recipe = ({ recipe, onDelete}) =>  
    <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title>{recipe.title}</Card.Title>
            <Card.Title>{recipe.duration}</Card.Title>
            <Card.Title>{recipe.amount}</Card.Title>
            <Card.Title>{recipe.description}</Card.Title>
            <Card.Title>{recipe.difficultuy}</Card.Title>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>

    
export default Recipe;