import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Item = ({data}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.avatar_url} />
                <Card.Body>
                    <Card.Title>{data.login}</Card.Title>
                    <Card.Text>{data.id}
                    </Card.Text>
                    <Button variant="dark">Ver valoración</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item;