import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';

export const PalilloTodoFiltro = () => {

    return (
        <div>
            
            <div className="galerias">
                <div className="items">
                    <div className="iner">
                        <div className="caja">
                            <img src="https://deantano.cl/wp-content/uploads/2019/08/7.jpg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Palillos Aero</h4>
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
                            <img src="https://www.distribuidoralafortuna.cl/1019-large_default/palillos-metalicos-rectos-pony.jpg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Palillos Pony</h4>
                            <ul>
                                <li>Numero: 5</li>
                                <br />
                                <li>Tamaño: 40cm</li>
                                <li>Grosor: 1,5cm</li>
                                <li>Precio: $1.500</li>
                            </ul>
                        </div>
                    </div>    
                </div>
                <div className="items">
                    <div className="iner">
                        <div className="caja">
                            <img src="http://www.comanov.com.mx/productos/big/AGUJA-CIRCULAR-80CM-BAMBU--12--PAR--634797.jpg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Palillos Knitting Needles</h4>
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
                            <img src="https://cdn.shopify.com/s/files/1/0252/2559/2883/products/Set-Palillo-Circ-Int-Zing_500x500.jpg?v=1594244273" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Palillos Modista</h4>
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
                            <img src="https://cdn.shopify.com/s/files/1/0015/4121/0173/products/A000005558_1_1000x.jpg?v=1615405519" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Palillos Revesderecho</h4>
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
                            <img src="https://www.torrico.cl/wp-content/uploads/2021/03/Torrico-Palillos-de-Bamb%C3%BA-Recto-de-Reginella-10-1.jpg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Palillos Reginella</h4>
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
            </div>

            <BotonesSubirPedidos />
            <PiePagina />

        </div>
    );
};
