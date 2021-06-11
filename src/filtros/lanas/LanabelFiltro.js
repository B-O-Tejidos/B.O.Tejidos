import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';

export const LanabelFiltro = () => {

    return (
        <div className="galerias">
            
                        <div className="items">
                            <div className="iner">
                                <div className="caja">
                                    <img src="https://images4-f.ravelrycache.com/uploads/Chinch/428825865/IMG_0459_small2.JPG" alt=""/>
                                </div>
                                <div className="descripcion">
                                    <h4>Lana Lanavel</h4>
                                    <ul>
                                        <li>Marca: Lanavel</li>
                                        <br />
                                        <li>Color: Gris</li>
                                        <br />
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