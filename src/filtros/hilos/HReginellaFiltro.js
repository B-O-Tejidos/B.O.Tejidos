import React from 'react';
import { BotonesSubirPedidos } from '../../complementos/botones/BotonesSubirPedidos';
import { PiePagina } from '../../complementos/footer/PiePagina';
import { FooterMovil } from '../../complementos/footer/FooterMovil';

export const HReginellaFiltro = () => {

    return (
        <div>
                    <div className="galerias">

<div className="movil items">
    <div className="iner">
        <div className="caja">
        <div className="guia">
                <li>Haz CLICK en la foto para mas detalles</li>
            </div>
            <img src="https://puntocrudo.cl/wp-content/uploads/2020/10/IMG_4527.jpeg" alt=""/>
        </div>
        <div className="descripcion">
            <h4>Hilo Reginella</h4>
            <ul>
                <li>Marca: Reginella</li>
                <br />
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
