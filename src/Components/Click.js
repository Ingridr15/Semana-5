import React from 'react';
import './Click.css';
import logo from '../logo.svg';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Click() {
    return (
        <div className="Click">
            <Button variant="primary" onClick={() => console.log("Ya le diste click")}>No dar click</Button>
        </div>
    );
}

export default Click;