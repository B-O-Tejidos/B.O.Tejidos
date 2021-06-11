import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';
import imagenprueba from '../../WhatsApp Image 2021-06-07 at 23.56.50.jpeg';

export const ReginellaFiltro = () => {

    return (
        <div className="galerias">

                        <div className="items">
                            <div className="iner" id="img.1">
                                <div className="caja">
                                <a href="#img1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxypY_S09jHMq_DDuNK16AIvrLsD03fC5Afw&usqp=CAU" alt=""/></a>
                                </div>
                                <div className="descripcion">
                                    <h4>Lanas Reginella</h4>
                                    <ul>
                                        <li>Linea: Multicolor</li>
                                        <br />
                                        <li>Precio: $2.500</li>
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

                        <div className="model" id="img1">
                            <div className="imagen-siguiente">
                                <a href="#imagensiguinete1"><img src={ imagenprueba }/>
                                <br/>
                                <span>HAZ CLICK EN LA IMAGEN PARA VER FICHA</span></a>
                            </div>
                            <div className="imagen-siguiente">
                                <a href="#imagensiguinete2"><img src='https://img.yapo.cl/images/07/0758384578.jpg'/>
                                <br/>
                                <span>HAZ CLICK EN LA IMAGEN PARA VER COLORES</span></a>
                            </div>
                        <div className="img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxypY_S09jHMq_DDuNK16AIvrLsD03fC5Afw&usqp=CAU"/>
                        </div>
                            <a className="cerrar" href="#img.1">X</a>
                        </div>



                        <div className="model" id="imagensiguinete1">
                            <div className="imagen-siguiente">
                                <a href="#img1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxypY_S09jHMq_DDuNK16AIvrLsD03fC5Afw&usqp=CAU"/>
                                <br/>
                                <span>HAZ CLICK EN LA IMAGEN PARA VER LANAS</span></a>
                            </div>
                            <div className="imagen-siguiente">
                                <a href="#imagensiguinete2"><img src='https://img.yapo.cl/images/07/0758384578.jpg'/>
                                <br/>
                                <span>HAZ CLICK EN LA IMAGEN PARA VER COLORES</span></a>
                            </div>
                        <div className="img">
                            <img src={ imagenprueba }/>
                        </div>
                            <a className="cerrar" href="#img.1">X</a>
                        </div>


                        <div className="model" id="imagensiguinete2">
                            <div className="imagen-siguiente">
                                <a href="#img1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxypY_S09jHMq_DDuNK16AIvrLsD03fC5Afw&usqp=CAU"/>
                                <br/>
                                <span>HAZ CLICK EN LA IMAGEN PARA VER LANAS</span></a>
                            </div>
                            <div className="imagen-siguiente">
                                <a href="#imagensiguinete1"><img src={ imagenprueba }/>
                                <br/>
                                <span>HAZ CLICK EN LA IMAGEN PARA VER FICHA</span></a>
                            </div>
                            <div className="colores">
                                <img src='https://img.yapo.cl/images/07/0758384578.jpg'/>
                            </div>

                            <div className="colores">

                                <div className="paleta">
                                    <label className="color1">A</label>                         
                                    <li>Color: 001</li>
                                    <br />
                                    <br />
                                    <br />
                                    <label className="color2">A</label>                          
                                    <li>Color: 001</li>
                                    <br />
                                    <br />
                                    <br />
                                    <label className="color3">A</label>                          
                                    <li>Color: 001</li>
                                    <br />
                                    <br />
                                    <br />
                                    <label className="color3">A</label>                          
                                    <li>Color: 001</li>
                                </div>

                                <div className="paleta">
                                    <label className="color4">A</label>                          
                                    <li>Color: 001</li>
                                    <br />
                                    <br />
                                    <br />
                                    <label className="color5">A</label>                          
                                    <li>Color: 001</li>
                                    <br />
                                    <br />
                                    <br />
                                    <label className="color6">A</label>                          
                                    <li>Color: 001</li>
                                    <br />
                                    <br />
                                    <br />
                                    <label className="color6">A</label>                          
                                    <li>Color: 001</li>
                                </div>

                                <div className="paleta">
                                    <label className="color7">A</label>                          
                                    <li>Color: 001</li>
                                    <br />
                                    <br />
                                    <br />
                                    <label className="color8">A</label>                          
                                    <li>Color: 001</li>
                                    <br />
                                    <br />
                                    <br />
                                    <label className="color9">A</label>                          
                                    <li>Color: 001</li>
                                    <br />
                                    <br />
                                    <br />
                                    <label className="color9">A</label>                          
                                    <li>Color: 001</li>
                                </div>

                            </div>
                            <a className="cerrar" href="#img.1">X</a>
                        </div>

            <PiePagina />

        </div>
    );
};
