import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';

export const UsadoFiltro = () => {

    return (
        <div className="galerias">
            
            <div className="items">
                    <div className="iner">
                        <div className="caja">
                            <img src="https://www.lavanguardia.com/files/article_main_microformat/uploads/2020/02/04/5fa8fcab9b9a2.jpeg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Zapatillas</h4>
                            <ul>
                                <li>Numero: 22</li>
                                <br />
                                <li>Color: Gris</li>
                                <li>Precio: $25.000</li>
                                <li>Estado: Usadas</li>
                            </ul>
                        </div>
                    </div>    
                </div>

            <BotonesSubirPedidos />
            <PiePagina />

        </div>
    );
};
