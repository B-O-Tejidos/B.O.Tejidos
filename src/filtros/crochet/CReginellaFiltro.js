import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';

export const CReginellaFiltro = () => {

    return (
        <div className="galerias">

                <div className="movil items">
                    <div className="iner">
                        <div className="caja">
                        <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                            <img src="https://www.torrico.cl/wp-content/uploads/2021/03/Torrico-Crochet-de-Bambu-de-Reginella-10.jpg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Crochet Reginella</h4>
                            <ul>
                                <li>Numero: 2</li>
                                <br />
                                <li>Tamaño: 20cm</li>
                                <br />
                                <li>Grosor: 2,3cm</li>
                                <br />
                                <li>Precio: $2.000</li>
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

        </div>
    );
};
