import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';
import { FooterMovil } from '../../complementos/footer/FooterMovil';

export const TijeraFiltro = () => {

    return (
        <div>
                    <div className="galerias">

<div className="movil items">
                    <div className="iner">
                        <div className="caja">
                        <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                            <img src="https://cdn.shopify.com/s/files/1/0022/3877/5366/products/tq7HsiW5VF_900x.jpg?v=1573497903" alt="" />
                        </div>
                        <div className="descripcion">
                            <h4>Tijeras</h4>
                            <ul>
                                <li>Tamaño: 10cm</li>
                                <br />
                                <li>Cantidad: 4 por caja</li>
                                <br />
                                <li>Precio: $4.500</li>
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
