import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import ReactModal from '../Modal/Modal';


const Singleproducts = (props) => {
    const { setCartCount } = props;


    const { title, price, image, description } = props.products;
    return (
        <div
            data-aos="zoom-out"
            className='col-md-4'>
            <Card style={{ width: '18rem' }}>

                <div style={{ height: '300px' }} className="p-2">

                    <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src={image} alt="" />

                </div>

                <Card.Body> 
                    <Card.Title>{title.slice(0, 10)}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 50)}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Price:{price}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <div className="d-flex justify-content-center">
                        <button onClick={setCartCount} className="btn btn-success me-2">Add to cart</button>

                        <ReactModal className="" product={props.products}></ReactModal>
                    </div>
                </Card.Body>
            </Card >
        </div >
    );
};

export default Singleproducts;