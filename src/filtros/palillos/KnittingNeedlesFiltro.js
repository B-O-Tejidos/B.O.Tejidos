import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';

export const KnittingNeedlesFiltro = () => {

    return (
        <div className="galerias">

                <div className="items">
                    <div className="iner">
                        <div className="caja">
                            <img src="http://www.comanov.com.mx/productos/big/AGUJA-CIRCULAR-80CM-BAMBU--12--PAR--634797.jpg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Palillo Knitting Needles</h4>
                            <ul>
                                <li>Numero: 2</li>
                                <br />
                                <li>Tamaño: 20cm</li>
                                <li>Grosor: 2,3cm</li>
                                <li>Precio: $2.000</li>
                            </ul>
                        </div>
                    </div>    
                </div>

                        <div className="items">
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
