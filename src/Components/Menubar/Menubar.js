import React from 'react';
import './Menubar.css';

const Menubar = (props) => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-2 col-2">
                    <h2 className="text-success  ">FAKESTORE</h2>
                </div>
                <div className="menubar col-md-10 col-10 d-flex  justify-content-end">
                    <li className="me-2">Home</li>
                    <li className="me-2">Cart<sup>{props.count}</sup></li>
                    <li className="me-2">Contact</li>
                </div>
            </div>
        </div>
    );
};

export default Menubar;