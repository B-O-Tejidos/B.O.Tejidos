import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';
import { FooterMovil } from '../../complementos/footer/FooterMovil';

export const AccesorioTodoFiltro = () => {

    return (
        <div>

            <div className="galerias">
                <div className="movil items">
                    <div className="iner">
                        <div className="caja">
                        <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtFUlwgCQa7Jz0incrpcH8LcMRMGVtcf4NiVBG1q6rDoic2ZDfnjWmTl5tJOnFdTQryo&usqp=CAU" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Botones</h4>
                            <ul>
                                <li>Tamaño: 3cm</li>
                                <br />
                                <li>Cantidad: 50 por bolsa</li>
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
                        <div className="guia">
                                        <li>Haz CLICK en la foto para mas detalles</li>
                                    </div>
                            <img src="https://1.bp.blogspot.com/-id2CfntGNi4/VtcPh3ofncI/AAAAAAAAGWQ/6I1PL62hJkI/s1600/agujas%2Bde%2Bcoser%2Bnumeraci%25C3%25B3n.jpg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Agujas para Coser</h4>
                            <ul>
                                <li>Tamaño: 2cm</li>
                                <br />
                                <li>Cantidad: 10 por bolsa</li>
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
                            <img src="data:image/jpeg;base64,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" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Agujas para Lana</h4>
                            <ul>
                                <li>Tamaño: 2cm</li>
                                <br />
                                <li>Cantidad: 10 por bolsa</li>
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
                            <img src="https://cdn.shopify.com/s/files/1/0022/3877/5366/products/tq7HsiW5VF_900x.jpg?v=1573497903" alt="" />
                        </div>
                        <div className="descripcion">
                            <h4>Tijeras</h4>
                            <ul>
                                <li>Tamaño: 10cm</li>
                                <br />
                                <li>Cantidad: 4 por caja</li>
                                <br />
                                <li>Precio: $4.500</li>
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
                            <img src="data:image/jpeg;base64,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" alt="" />
                        </div>
                        <div className="descripcion">
                            <h4>Marcadores de Puntos</h4>
                            <ul>
                                <li>Tamaño: 3cm</li>
                                <br />
                                <li>Cantidad: 50 por caja</li>
                                <br />
                                <li>Precio: $4.500</li>
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
                            <img src="https://images-na.ssl-images-amazon.com/images/I/61gqVEJmySL._AC_SX425_.jpg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Marcadores de Vueltas</h4>
                            <ul>
                                <li>Tamaño: 3cm</li>
                                <br />
                                <li>Cantidad: 50 por bolsa</li>
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
                            <img src="http://1.bp.blogspot.com/-iiSvZj_bx6U/VHZB6-M9-MI/AAAAAAAAMgQ/h3fS5D0aUXw/s1600/Surtido%2BAlfileres.jpg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Alfileres</h4>
                            <ul>
                                <li>Tamaño: 3cm</li>
                                <br />
                                <li>Cantidad: 50 por bolsa</li>
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
                            <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/182/806/products/whatsapp-image-2020-06-24-at-14-31-041-43b798a1988061f6df15930220561072-1024-1024.jpeg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Alfileres de Gancho</h4>
                            <ul>
                                <li>Tamaño: 3cm</li>
                                <br />
                                <li>Cantidad: 50 por bolsa</li>
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
                            <img src="https://costuritas.cl/wp-content/uploads/2021/03/01.34.0129.0000.jpg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Telar</h4>
                            <ul>
                                <li>Tamaño: 30 x 30cm</li>
                                <br />
                                <li>Cantidad: 1</li>
                                <br />
                                <li>Precio: $10.000</li>
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
                            <img src="https://images-na.ssl-images-amazon.com/images/I/71YyGQN1nUL._AC_SX425_.jpg" alt=""/>
                        </div>
                        <div className="descripcion">
                            <h4>Elasticos</h4>
                            <ul>
                                <li>Tamaño: grande</li>
                                <br />
                                <li>Cantidad: 12</li>
                                <br />
                                <li>Precio: $5.000</li>
                            </ul>
                        </div>
                    </div>    
                </div>      
            </div>                                 

                <BotonesSubirPedidos />
                <PiePagina />
                <FooterMovil />

        </div>
    );
};
