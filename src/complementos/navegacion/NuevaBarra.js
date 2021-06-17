import React from 'react';

export const NuevaBarra = () => {

    return (
        <div>
            
            <div className="buscar">
                <input type="text" placeholder="Busca tu producto aqui..." />
                <div className="botn">
                    <i className="fas fa-search icon"></i>
                </div>
            </div>

        </div>
    );
};
