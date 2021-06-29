import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const NuevaBarra = () => {

    const todos = [
        { done: false, text: 'Lanas', href: handleClick },
        { done: false, text: 'Hilos', href: handleClick1 },
        { done: false, text: 'Tejidos', href: handleClick2 },
        { done: false, text: 'Palillos', href: handleClick4 },
        { done: false, text: 'Crochet', href: handleClick5 },
        { done: false, text: 'Accesorios', href: handleClick6 },

        { done: false, text: 'Chalecos', href: handleClick7 },
        { done: false, text: 'Gorros', href: handleClick8 },
        { done: false, text: 'Cuellos', href: handleClick9 },
        { done: false, text: 'Bufandas', href: handleClick10 },
        { done: false, text: 'Guantes', href: handleClick11 },
        { done: false, text: 'Calcetines', href: handleClick12 },

        { done: false, text: 'Lanas Cisne', href: handleClick13 },
        { done: false, text: 'Lanas Ukryl', href: handleClick14 },
        { done: false, text: 'Lanas Reginella', href: handleClick15 },
        { done: false, text: 'Lanas Revesderecho', href: handleClick16 },
        { done: false, text: 'Lanas Faisan', href: handleClick17 },
        { done: false, text: 'Lanas Lanabel', href: handleClick18 },
        { done: false, text: 'Lanas Modista', href: handleClick19 },

        { done: false, text: 'Hilos Cisne', href: handleClick20 },
        { done: false, text: 'Hilos Ukryl', href: handleClick21 },
        { done: false, text: 'Hilos Reginella', href: handleClick22 },
        { done: false, text: 'Hilos Revesderecho', href: handleClick23 },
        { done: false, text: 'Hilos Faisan', href: handleClick24 },
        { done: false, text: 'Hilos Lanabel', href: handleClick25 },
        { done: false, text: 'Hilos Modista', href: handleClick26 },

        { done: false, text: 'Palillos Aero', href: handleClick27 },
        { done: false, text: 'Palillos Pony', href: handleClick28 },
        { done: false, text: 'Palillos Knitting Needles', href: handleClick29 },
        { done: false, text: 'Palillos Modista', href: handleClick30 },
        { done: false, text: 'Palillos Revesderecho', href: handleClick31 },
        { done: false, text: 'Palillos Reginella', href: handleClick32 },

        { done: false, text: 'Crochet Aero', href: handleClick33 },
        { done: false, text: 'Crochet Pony', href: handleClick34 },
        { done: false, text: 'Crochet Knitting Needles', href: handleClick35 },
        { done: false, text: 'Crochet Modista', href: handleClick36 },
        { done: false, text: 'Crochet Revesderecho', href: handleClick37 },
        { done: false, text: 'Crochet Reginella', href: handleClick38 },

        { done: false, text: 'Huinchas de Medir', href: handleClick39 },
        { done: false, text: 'Agujas de Coser', href: handleClick40 },
        { done: false, text: 'Agujas para Lanas', href: handleClick41 },
        { done: false, text: 'Tijeras', href: handleClick42 },
        { done: false, text: 'Botones', href: handleClick43 },
        { done: false, text: 'Marcadores de Puntos', href: handleClick44 },
        { done: false, text: 'Marcadores de Vueltas', href: handleClick45 },
        { done: false, text: 'Alfileres', href: handleClick46 },
        { done: false, text: 'Alfileres de Gancho', href: handleClick47 },
        { done: false, text: 'Telares', href: handleClick48 },
        { done: false, text: 'Bastidores', href: handleClick48 },
        { done: false, text: 'Elasticos', href: handleClick49 },

        { done: false, text: 'Varios', href: handleClick3 },
    ];

    const [ busca, setBusca ] = useState('');

    const todoFiltrado = todos.filter(( todo ) => todo.text.toUpperCase().includes( busca.toUpperCase()));

    const history = useHistory();



    function handleClick() {
        history.push('/lanas');
    }
    function handleClick1() {
        history.push('/hilos');
    }
    function handleClick2() {
        history.push('/tejidos');
    }
    function handleClick3() {
        history.push('/varios');
    }
    function handleClick4() {
        history.push('/palillos');
    }
    function handleClick5() {
        history.push('/crochet');
    }
    function handleClick6() {
        history.push('/accesorios');
    }


    function handleClick7() {
        history.push('/tejidos/chalecos');
    }
    function handleClick8() {
        history.push('/tejidos/gorros');
    }
    function handleClick9() {
        history.push('/tejidos/cuellos');
    }
    function handleClick10() {
        history.push('/tejidos/bufandas');
    }
    function handleClick11() {
        history.push('/tejidos/guantes');
    }
    function handleClick12() {
        history.push('/tejidos/calcetines');
    }


    function handleClick13() {
        history.push('/lanas/cisne');
    }
    function handleClick14() {
        history.push('/lanas/ukryl');
    }
    function handleClick15() {
        history.push('/lanas/reginella');
    }
    function handleClick16() {
        history.push('/lanas/revesderecho');
    }
    function handleClick17() {
        history.push('/lanas/faisan');
    }
    function handleClick18() {
        history.push('/lanas/lanabel');
    }
    function handleClick19() {
        history.push('/lanas/modista');
    }


    function handleClick20() {
        history.push('/hilos/cisne');
    }
    function handleClick21() {
        history.push('/hilos/ukryl');
    }
    function handleClick22() {
        history.push('/hilos/reginella');
    }
    function handleClick23() {
        history.push('/hilos/revesderecho');
    }
    function handleClick24() {
        history.push('/hilos/faisan');
    }
    function handleClick25() {
        history.push('/hilos/lanabel');
    }
    function handleClick26() {
        history.push('/hilos/modista');
    }


    function handleClick27() {
        history.push('/palillos/aero');
    }
    function handleClick28() {
        history.push('/palillos/pony');
    }
    function handleClick29() {
        history.push('/palillos/knitting_needles');
    }
    function handleClick30() {
        history.push('/palillos/modista');
    }
    function handleClick31() {
        history.push('/palillos/revesderecho');
    }
    function handleClick32() {
        history.push('/palillos/reginella');
    }

    function handleClick33() {
        history.push('/crochet/aero');
    }
    function handleClick34() {
        history.push('/crochet/pony');
    }
    function handleClick35() {
        history.push('/crochet/knitting_needles');
    }
    function handleClick36() {
        history.push('/crochet/modista');
    }
    function handleClick37() {
        history.push('/crochet/revesderecho');
    }
    function handleClick38() {
        history.push('/crochet/reginella');
    }


    function handleClick39() {
        history.push('/accesorios/huincha-medir');
    }
    function handleClick40() {
        history.push('/accesorios/aguja-coser');
    }
    function handleClick41() {
        history.push('/accesorios/aguja-lana');
    }
    function handleClick42() {
        history.push('/accesorios/tijeras');
    }
    function handleClick43() {
        history.push('/accesorios/botones');
    }
    function handleClick44() {
        history.push('/accesorios/marcador-punto');
    }
    function handleClick45() {
        history.push('/accesorios/marcador-vuelta');
    }
    function handleClick46() {
        history.push('/accesorios/alfileres');
    }
    function handleClick47() {
        history.push('/accesorios/alfiler-gancho');
    }
    function handleClick48() {
        history.push('/accesorios/telares-bastidores');
    }
    function handleClick49() {
        history.push('/accesorios/elasticos');
    }


        return (
            <div>
                
                <div className="buscar">
                    <div className="centro">
                        <div className="botn">
                                <i className="fas fa-search icon"></i>
                        </div>

                        <input
                            type="text" 
                            placeholder="Busca tu producto aqui..."
                            value={ busca }
                            onChange={ ( ev ) => setBusca( ev.target.value ) }
                        />

                        <br />

                        <ul className="content-table" id="buscar">

                            { todoFiltrado.map(( e ) => (

                                <a> 
                                    <li>
                                    <button className="centro" type="button" onClick={e.href}>
                                            { e.text }
                                        </button>
                                    </li>
                                </a>

                            )) }

                        </ul>
                    </div>
                </div>

            </div>
        );
    }