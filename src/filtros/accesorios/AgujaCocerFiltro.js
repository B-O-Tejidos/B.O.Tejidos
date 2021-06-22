import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';
import { FooterMovil } from '../../complementos/footer/FooterMovil';

export const AgujaCocerFiltro = () => {

    return (
        <div className="galerias">
            
            <div className="movil items">
                    <div className="iner">
                        <div className="caja">
                        <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                            <img src="https://1.bp.blogspot.com/-id2CfntGNi4/VtcPh3ofncI/AAAAAAAAGWQ/6I1PL62hJkI/s1600/agujas%2Bde%2Bcoser%2Bnumeraci%25C3%25B3n.jpg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Agujas para Coser</h4>
                            <ul>
                                <li>Tamaño: 2cm</li>
                                <br />
                                <li>Cantidad: 10 por bolsa</li>
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

            <BotonesSubirPedidos />
            <FooterMovil />
            <PiePagina />

        </div>
    );
};
