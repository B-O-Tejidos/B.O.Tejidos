import React, { useState } from 'react';

export const NuevaBarra = () => {
    
    const todos = [
        { done: false, text: 'Lanas', href: "http://localhost:3002/lanas" },
        { done: false, text: 'Hilos', href: "http://localhost:3002/hilos" },
        { done: false, text: 'Tejidos', href: "http://localhost:3002/tejidos" },
        { done: false, text: 'Varios', href: "http://localhost:3002/varios" },
        { done: false, text: 'Palillos', href: "http://localhost:3002/palillos" },
        { done: false, text: 'Crochet', href: "http://localhost:3002/crochet" },
        { done: false, text: 'Accesorios', href: "http://localhost:3002/accesorios" },
    ];

    const [ busca, setBusca ] = useState('');

    const todoFiltrado = todos.filter(( todo ) => todo.text.toUpperCase().includes( busca.toUpperCase()));


        return (
            <div>
                
                <div className="buscar">
                    <div className="centro">
                    <div className="botn">
                    <i className="fas fa-search icon"></i>
                    </div>

                        <input
                            type="text" 
                            placeholder="Busca tu producto aqui..."
                            value={ busca }
                            onChange={ ( ev ) => setBusca( ev.target.value ) }
                        />

                        <br />

                        <ul className="content-table" id="buscar">
                
                            { todoFiltrado.map(( e ) => (

                                <a href={ e.href }>
                                    <li key={ e.text }>{ e.text }</li>
                                </a>

                            )) }

                        </ul>
                    </div>
                </div>

            </div>
        );
    }