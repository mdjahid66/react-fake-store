
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";


const ReactModal = (props) => {
    
    const { image, title, price, category, description } = props.product;
    const [smShow, setSmShow] = useState(false);
    return (
        <div>
            <>
                <Button onClick={() => setSmShow(true)}>Details</Button>{' '}

                <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            {title}
                        </Modal.Title>
                        <img className="w-50" src={image} alt="" />
                    </Modal.Header>
                    <Modal.Body>
                        <span className="fw-bold">Description:</span> {description.slice(0, 100)}
                        <p><span className="fw-bold ps-">Price:</span> {price}</p>
                        <p><span className="fw-bold ps-">Category:</span> {category}</p>
                    </Modal.Body>

                </Modal>
            </>

        </div>
    );
};

export default ReactModal;