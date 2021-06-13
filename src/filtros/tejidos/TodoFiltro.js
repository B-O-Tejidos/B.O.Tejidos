import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { FooterMovil } from '../../complementos/footer/FooterMovil';
import { PiePagina } from '../../complementos/footer/PiePagina';

export const TodoFiltro = () => {

    return (
        <div>
            
                <div className="galerias">
                        <div className="movil items">
                            <div className="iner" id="img.0">
                                <div className="caja">
                                    <a href="#img1"><img src="http://kipu.cl/imagenes/productos/507/med.jpg" alt=""/></a>
                                </div>
                                <div className="descripcion">
                                    <h4>Chaleco</h4>
                                    <ul>
                                        <li>Talla: XXL</li>
                                        <li>Color: Blanco Invierno</li>
                                        <li>Precio: $25.000</li>
                                    </ul>
                                </div>
                            </div>    
                        </div>
                        <div className="movil items">
                            <div className="iner" id="img.01">
                                <div className="caja">
                                    <a href="#img2"><img src="https://i.ytimg.com/vi/wdFt9zH4MqE/maxresdefault.jpg" alt=""/></a>
                                </div>
                                <div className="descripcion">
                                    <h4>Gorro</h4>
                                    <ul>
                                        <li>Talla: L</li>
                                        <br />
                                        <li>Color: Verde y Gris</li>
                                        <li>Precio: $15.000</li>
                                    </ul>
                                </div>
                            </div>    
                        </div>
                        <div className="movil items">
                            <div className="iner" id="img.02">
                                <div className="caja">
                                    <a href="#img3"><img src="https://estag.fimagenes.com/busquedas/cuellos-de-lana_7_900.jpg" alt=""/></a>
                                </div>
                                <div className="descripcion">
                                    <h4>Cuello</h4>
                                    <ul>
                                        <li>Talla: XL</li>
                                        <br />
                                        <li>Color: Rojo</li>
                                        <li>Precio: $18.000</li>
                                    </ul>
                                </div>
                            </div>    
                        </div>
                        <div className="movil items">
                            <div className="iner" id="img.03">
                                <div className="caja">
                                    <img src="https://i.pinimg.com/474x/94/55/1d/94551dcba764301d8cd2dfa0ba2d077d.jpg" alt=""/>
                                </div>
                                <div className="descripcion">
                                    <h4>Bufanda</h4>
                                    <ul>
                                        <li>Talla: M</li>
                                        <li>Color: Colores Mixtos</li>
                                        <li>Precio: $12.000</li>
                                    </ul>
                                </div>
                            </div>    
                        </div>
                        <div className="movil items">
                            <div className="iner" id="img.04">
                                <div className="caja">
                                    <img src="https://www.lanasyovillos.com/sites/default/files/guantes-crochet-patron-gratis.jpg" alt=""/>
                                </div>
                                <div className="descripcion">
                                    <h4>Guantes</h4>
                                    <ul>
                                        <li>Talla: L</li>
                                        <br />
                                        <li>Color: Verde</li>
                                        <li>Precio: $8.000</li>
                                    </ul>
                                </div>
                            </div>    
                        </div>
                        <div className="movil items">
                            <div className="iner" id="img.05">
                                <div className="caja">
                                    <img src="https://www.felizypunto.com/wp-content/uploads/Portada-1.jpg" alt=""/>
                                </div>
                                <div className="descripcion">
                                    <h4>Calcetines</h4>
                                    <ul>
                                        <li>Talla: S</li>
                                        <br />
                                        <li>Color: Rosa</li>
                                        <li>Precio: $5.000</li>
                                    </ul>
                                </div>
                            </div>    
                        </div>
                    </div>

                    <div className="model" id="img1">
                        <div className="img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyh6Oi1bqAbuG8M8Sfj1897waoIStjkCqHw&usqp=CAU"/>
                        </div>
                        <a className="cerrar" href="#img.0">X</a>
                    </div>
                    <div className="model" id="img2">
                        <div className="img">
                            <img src="https://i.ytimg.com/vi/wdFt9zH4MqE/maxresdefault.jpg"/>
                        </div>
                        <a className="cerrar" href="#img.01">X</a>
                    </div>
                    <div className="model" id="img3">
                        <div className="img">
                            <img src="https://estag.fimagenes.com/busquedas/cuellos-de-lana_7_900.jpg"/>
                        </div>
                        <a className="cerrar" href="#img.02">X</a>
                    </div>
                    <div className="model" id="img4">
                        <div className="img">
                            <img src="https://i.ytimg.com/vi/wdFt9zH4MqE/maxresdefault.jpg"/>
                        </div>
                        <a className="cerrar" href="#img.03">X</a>
                    </div>
                    <div className="model" id="img5">
                        <div className="img">
                            <img src="https://i.ytimg.com/vi/wdFt9zH4MqE/maxresdefault.jpg"/>
                        </div>
                        <a className="cerrar" href="#img.04">X</a>
                    </div>
                    <div className="model" id="img6">
                        <div className="img">
                            <img src="https://i.ytimg.com/vi/wdFt9zH4MqE/maxresdefault.jpg"/>
                        </div>
                        <a className="cerrar" href="#img.05">X</a>
                    </div>



            <BotonesSubirPedidos />
            <PiePagina />
            <FooterMovil />

        </div>
    );
};
