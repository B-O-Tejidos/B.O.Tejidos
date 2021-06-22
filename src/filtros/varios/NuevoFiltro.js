import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';
import { FooterMovil } from '../../complementos/footer/FooterMovil';

export const NuevoFiltro = () => {

    return (
        <div>
                    <div className="galerias">
            
            <div className="movil items">
                    <div className="iner">
                        <div className="caja">
                        <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv0MbdIc9yBEPPXEpySboldtpXILNzYoIpQw&usqp=CAU" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Chaquetas</h4>
                            <ul>
                                <li>Talla: XXL</li>
                                <br />
                                <li>Color: Rojo</li>
                                <br />
                                <li>Precio: $25.000</li>
                                <br />
                                <li>Estado: Nueva</li>
                            </ul>
                        </div>
                    </div>    
                </div>

                <div className="movil items">
                    <div className="iner">
                        <div className="caja">
                            <img src="https://axspen.co/wp-content/uploads/2019/09/chaqueta-rompevientos-axspen-al-por-mayor-impermeable-deportiva-moda-oxap-mati05-e1568759676374.jpg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Chaquetas</h4>
                            <ul>
                                <li>Talla: XXL</li>
                                <br />
                                <li>Color: Rojo</li>
                                <li>Precio: $25.000</li>
                                <li>Estado: Nueva</li>
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
