import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';
import { FooterMovil } from '../../complementos/footer/FooterMovil';

export const ModistaFiltro = () => {

    return (
        <div className="galerias">
            
            <div className="movil items">
                            <div className="iner">
                                <div className="caja">
                                <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHiMXIj82NUH3aubGgOHFK1157d7YgNrh63Zf5pRFTnxDEnHln6C3neCmGHPbFuKKDJtg&usqp=CAU" alt=""/>
                                </div>
                                <div className="descripcion">
                                    <h4>Lana Modista</h4>
                                    <ul>
                                        <li>Marca: Modista</li>
                                        <br />
                                        <li>Color: Colores Mixtos</li>
                                        <br />
                                        <li>Precio: $1.750</li>
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

            <BotonesSubirPedidos />
            <PiePagina />
            <FooterMovil />

        </div>
    );
};
