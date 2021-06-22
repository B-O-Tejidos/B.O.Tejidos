import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { FooterMovil } from '../../complementos/footer/FooterMovil';
import { PiePagina } from '../../complementos/footer/PiePagina';

export const ChalecoFiltro = () => {

    return (
        <div>
                    <div className="galerias">
            
            <div className="movil items">
                <div className="iner">
                    <div className="caja">
                    <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                        <img src="http://kipu.cl/imagenes/productos/507/med.jpg" alt="" />
                    </div>
                    <div className="descripcion">
                        <h4>Chaleco</h4>
                            <ul>
                                <li>Talla: XXL</li>
                                <br />
                                <li>Color: Blanco Invierno</li>
                                <br />
                                <li>Precio: $25.000</li>
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
