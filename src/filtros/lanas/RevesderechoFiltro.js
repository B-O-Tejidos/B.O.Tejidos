import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos'
import { PiePagina } from '../../complementos/footer/PiePagina'
import { FooterMovil } from '../../complementos/footer/FooterMovil';

export const RevesderechoFiltro = () => {

    return (
        <div>
                    <div className="galerias">
            
            <div className="movil items">
                            <div className="iner">
                                <div className="caja">
                                <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTif1DfSgh9uoOr0oYg5SAErX6gcHFL-wVd5A&usqp=CAU" alt=""/>
                                </div>
                                <div className="descripcion">
                                    <h4>Lana Revesderecho</h4>
                                    <ul>
                                        <li>Marca: Revesderecho</li>
                                        <br />
                                        <li>Color: Rojo</li>
                                        <br />
                                        <li>Precio: $1.000</li>
                                    </ul>
                                </div>
                            </div>    
                        </div>

                        <div className="movil items">
                            <div className="iner">
                                <div className="caja">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyCHNVntW4t6ofGtgPHPDe5ttC6pTVgpvUQuk_sPFo-HN6xyOMr7SBMhAI8uJyGWfR6Z0&usqp=CAU" alt=""/>
                                </div>
                                <div className="descripcion">
                                    <h4>Mas Productos Proximamente</h4>
                                    <ul>
                                        <li>Talla: Proximamente</li>
                                        <br />
                                        <li>Color: Proximamente</li>
                                        <br />
                                        <li>Precio: Proximamente</li>
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
