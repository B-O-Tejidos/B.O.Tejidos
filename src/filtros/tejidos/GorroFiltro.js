import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';

export const GorroFiltro = () => {

    return (
        <div className="galerias">
            
            <div className="items">
                            <div className="iner">
                                <div className="caja">
                                    <img src="https://i.ytimg.com/vi/wdFt9zH4MqE/maxresdefault.jpg" alt=""/>
                                </div>
                                <div className="descripcion">
                                    <h4>Gorro</h4>
                                    <ul>
                                        <li>Talla: L</li>
                                        <br />
                                        <li>Color: Verde y Gris</li>
                                        <br />
                                        <li>Precio: $15.000</li>
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
