import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Recipe = ({ recipe, onDelete}) =>  
    <Card style={{ width: '20rem' }}>
        <Card.Body>
            <Card.Title>Título: {recipe.title}</Card.Title>
            <Card.Title>Duración (en minutos): {recipe.duration}</Card.Title>
            <Card.Title>Raciones: {recipe.amount}</Card.Title>
            <Card.Title>Descripción: {recipe.description}</Card.Title>
            <Card.Title>Dificultad: {recipe.difficulty}</Card.Title>
            <Button variant="primary" onClick={onDelete}>Eliminar</Button>
        </Card.Body>
    </Card>

    
export default Recipe;