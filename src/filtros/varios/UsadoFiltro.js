import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';
import { FooterMovil } from '../../complementos/footer/FooterMovil';

export const UsadoFiltro = () => {

    return (
        <div>
                    <div className="galerias">
            
            <div className="movil items">
                    <div className="iner">
                        <div className="caja">
                        <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                            <img src="https://www.lavanguardia.com/files/article_main_microformat/uploads/2020/02/04/5fa8fcab9b9a2.jpeg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Zapatillas</h4>
                            <ul>
                                <li>Numero: 22</li>
                                <br />
                                <li>Color: Gris</li>
                                <br />
                                <li>Precio: $25.000</li>
                                <br/> 
                                <li>Estado: Usadas</li>
                            </ul>
                        </div>
                    </div>    
                </div>

        </div>

            <BotonesSubirPedidos />
            <PiePagina />
            <FooterMovil />

        </div>
    );
};
