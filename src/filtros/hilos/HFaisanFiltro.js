import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';

export const HFaisanFiltro = () => {

    return (
        <div className="galerias">
            
            <div className="items">
                            <div className="iner">
                                <div className="caja">
                                    <img src="data:image/jpeg;base64,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" alt=""/>
                                </div>
                                <div className="descripcion">
                                    <h4>Hilo Faisan</h4>
                                    <ul>
                                        <li>Marca: Faisan</li>
                                        <br />
                                        <li>Color: Rosa</li>
                                        <li>Precio: $1.300</li>
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