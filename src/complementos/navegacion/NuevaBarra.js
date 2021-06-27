import React, { useState } from 'react';

export const NuevaBarra = () => {
    
    const todos = [
        { done: false, text: 'Lanas', href: "https://b-o-tejidos.github.io/lanas" },
        { done: false, text: 'Hilos', href: "https://b-o-tejidos.github.io/hilos" },
        { done: false, text: 'Tejidos', href: "https://b-o-tejidos.github.io/tejidos" },
        { done: false, text: 'Varios', href: "https://b-o-tejidos.github.io/varios" },
        { done: false, text: 'Palillos', href: "https://b-o-tejidos.github.io/palillos" },
        { done: false, text: 'Crochet', href: "https://b-o-tejidos.github.io/crochet" },
        { done: false, text: 'Accesorios', href: "https://b-o-tejidos.github.io/accesorios" },
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