import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';
import { IconoPagina } from '../../complementos/icono/IconoPagina';

export const BufandaFiltro = () => {

    return (
        <div className="galerias">
            
            <IconoPagina />

            <div className="movil items">
                            <div className="iner">
                                <div className="caja">
                                    <img src="https://i.pinimg.com/474x/94/55/1d/94551dcba764301d8cd2dfa0ba2d077d.jpg" alt=""/>
                                </div>
                                <div className="descripcion">
                                    <h4>Bufanda</h4>
                                    <ul>
                                        <li>Talla: M</li>
                                        <br />
                                        <li>Color: Colores Mixtos</li>
                                        <br />
                                        <li>Precio: $12.000</li>
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
