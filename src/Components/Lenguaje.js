import React from 'react';
import './Lenguaje.css';
import logo from '../logo.svg';

function Lenguaje() {
    return (
        <div className="Lenguaje">
            <p>
                Los siguientes lenguajes están en un arreglo y son desplegados en una lista:
            </p>
            <ul>
                <li>JavaScript</li>
                <li>ReactJS</li>
            </ul>
        </div>
    );
}

export default Lenguaje;