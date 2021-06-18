import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';

export const LanaTodoFiltro = () => {

    return (
        <div>
            
            <div className="galerias">
                        <div className="movil items">
                            <div className="iner">
                                <div className="caja">
                                <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                                    <img src="http://2.bp.blogspot.com/-SH0qZ_rTxE8/UPIrkex5ttI/AAAAAAAAAMI/UNyJpF1vLbY/s1600/394815_403464256402382_49497261_n.jpg" alt=""/>
                                </div>
                                <div className="descripcion">
                                    <h4>Lanas Cisne</h4>
                                    <ul>
                                        <li>Marca: Cisne</li>
                                        <br />
                                        <li>Color: Blanco Invierno</li>
                                        <br />
                                        <li>Precio: $2.000</li>
                                    </ul>
                                </div>
                            </div>    
                        </div>
                        <div className="movil items">
                            <div className="iner">
                                <div className="caja">
                                <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                                    <img src="https://images4-g.ravelrycache.com/uploads/sandrabaroni/126450332/DSCN3523_small2.jpg" alt=""/>
                                </div>
                                <div className="descripcion">
                                    <h4>Lanas Reginella</h4>
                                    <ul>
                                        <li>Marca: Reginella</li>
                                        <br/>
                                        <li>Color: Verde y Gris</li>
                                        <br />
                                        <li>Precio: $1.500</li>
                                    </ul>
                                </div>
                            </div>    
                        </div>
                        <div className="movil items">
                            <div className="iner">
                                <div className="caja">
                                <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTif1DfSgh9uoOr0oYg5SAErX6gcHFL-wVd5A&usqp=CAU" alt=""/>
                                </div>
                                <div className="descripcion">
                                    <h4>Lanas Revesderecho</h4>
                                    <ul>
                                        <li>Marca: Revesderecho</li>
                                        <br />
                                        <li>Color: Rojo</li>
                                        <br />
                                        <li>Precio: $1.000</li>
                                    </ul>
                                </div>
                            </div>    
                        </div>
                        <div className="movil items">
                            <div className="iner">
                                <div className="caja">
                                <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHiMXIj82NUH3aubGgOHFK1157d7YgNrh63Zf5pRFTnxDEnHln6C3neCmGHPbFuKKDJtg&usqp=CAU" alt="" />
                                </div>
                                <div className="descripcion">
                                    <h4>Lanas Modista</h4>
                                    <ul>
                                        <li>Marca: Modista</li>
                                        <br />
                                        <li>Color: Colores Mixtos</li>
                                        <br />
                                        <li>Precio: $1.750</li>
                                    </ul>
                                </div>
                            </div>    
                        </div>
                        <div className="movil items">
                            <div className="iner">
                                <div className="caja">
                                <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                                    <img src="https://images4-f.ravelrycache.com/uploads/Chinch/428825865/IMG_0459_small2.JPG" alt=""/>
                                </div>
                                <div className="descripcion">
                                    <h4>Lanas Lanavel</h4>
                                    <ul>
                                        <li>Marca: Lanavel</li>
                                        <br />
                                        <li>Color: Verde</li>
                                        <br />
                                        <li>Precio: $2.000</li>
                                    </ul>
                                </div>
                            </div>    
                        </div>
                        <div className="movil items">
                            <div className="iner">
                                <div className="caja">
                                <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                                    <img src="https://lastejedorasdelvalle.cl/wp-content/uploads/2020/06/1.jpg" alt=""/>
                                </div>
                                <div className="descripcion">
                                    <h4>Lanas Faisan</h4>
                                    <ul>
                                        <li>Marca: Faisan</li>
                                        <br />
                                        <li>Color: Rosa</li>
                                        <br />
                                        <li>Precio: $1.300</li>
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
