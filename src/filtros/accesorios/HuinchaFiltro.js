import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';

export const HuinchaFiltro = () => {

    return (
        <div className="galerias">

                <div className="movil items">
                    <div className="iner">
                        <div className="caja">
                        <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                            <img src="https://latienditadelparque.cl/wp-content/uploads/2020/10/HUINCHA-NORMAL-600x450.png" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Huinchas para medir</h4>
                            <ul>
                                <li>Tamaño: 1 metro</li>
                                <br />
                                <li>Cantidad: 1 por bolsa</li>
                                <br />
                                <li>Precio: $2.000</li>
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
