import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';

export const AlfilerFiltro = () => {

    return (
        <div className="galerias">

                <div className="items">
                    <div className="iner">
                        <div className="caja">
                            <img src="http://1.bp.blogspot.com/-iiSvZj_bx6U/VHZB6-M9-MI/AAAAAAAAMgQ/h3fS5D0aUXw/s1600/Surtido%2BAlfileres.jpg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Alfileres</h4>
                            <ul>
                                <li>Tamaño: 3cm</li>
                                <li>Cantidad: 50 por bolsa</li>
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
