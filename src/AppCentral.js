import React from 'react';
import { BotonesSubirPedidos } from './complementos/botones/BotonesSubirPedidos';
import { Carrusel } from './complementos/carrusel .01/Carrusel';
import { CarruselIMG } from './complementos/carrusel/CarruselIMG';
import { PiePagina } from './complementos/footer/PiePagina';
import { SeccionAccesorios } from './complementos/secciones/accesorios/SeccionAccesorios';
import { SeccionCrochets } from './complementos/secciones/crochets/SeccionCrochets';
import { SeccionHilos } from './complementos/secciones/hilos/SeccionHilos';
import { SeccionLanas } from './complementos/secciones/lanas/SeccionLanas';
import { SeccionPalillos } from './complementos/secciones/palillos/SeccionPalillos';
import { SeccionTejidos } from './complementos/secciones/tejidos/SeccionTejidos';
import { SeccionVarios } from './complementos/secciones/varios/SeccionVarios';

export const AppCentral = () => {

    return (
        <div>
            
            <Carrusel />
            <CarruselIMG />
            <SeccionTejidos />
            <SeccionLanas />
            <SeccionHilos />
            <SeccionPalillos />
            <SeccionCrochets />
            <SeccionAccesorios />
            <SeccionVarios />
            <BotonesSubirPedidos />
            <PiePagina />

        </div>
    );
};
