import React from 'react';
import './Semana.css';
import logo from '../logo.svg';

function Semana() {
    const week = "Semana 5";
    return (
        <div className="Semana">
            <h1>{week}</h1>
            <h6>Soy un componente tipo función que despliega una constante que dice "{week}"</h6>
        </div>
    );
}

export default Semana;