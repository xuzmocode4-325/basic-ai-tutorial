import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Project (props) {
    
    return (
        <div>
            <Card>
                <Card.Header>{props.header}</Card.Header>
                <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                {props.description}
                </Card.Text>
                <Button variant="primary">{props.action}</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Project; 
