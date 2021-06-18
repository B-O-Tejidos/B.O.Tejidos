import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';

export const ElasticoFiltro = () => {

    return (
        <div className="galerias">

<div className="movil items">
                    <div className="iner">
                        <div className="caja">
                        <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                            <img src="https://images-na.ssl-images-amazon.com/images/I/71YyGQN1nUL._AC_SX425_.jpg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Elasticos</h4>
                            <ul>
                                <li>Tamaño: grande</li>
                                <br />
                                <li>Cantidad: 12</li>
                                <br />
                                <li>Precio: $5.000</li>
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
