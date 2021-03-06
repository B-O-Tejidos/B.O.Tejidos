import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';
import { FooterMovil } from '../../complementos/footer/FooterMovil';

export const CPonyFiltro = () => {

    return (
        <div>
                    <div className="galerias">

<div className="movil items">
    <div className="iner">
        <div className="caja">
        <div className="guia">
                        <li>Haz CLICK en la foto para mas detalles</li>
                    </div>
            <img src="https://i0.wp.com/www.conovillos.cl/wp-content/uploads/2020/11/MicrosoftTeams-image-1.jpg?resize=324%2C324&ssl=1" alt=""/>
        </div>
        <div className="descripcion">
            <h4>Crochet Pony</h4>
            <ul>
                <li>Numero: 5</li>
                <br />
                <li>Tamaño: 40cm</li>
                <br />
                <li>Grosor: 1,5cm</li>
                <br />
                <li>Precio: $1.500</li>
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
</div>

<BotonesSubirPedidos />
<PiePagina />
<FooterMovil />

        </div>
    );
};
