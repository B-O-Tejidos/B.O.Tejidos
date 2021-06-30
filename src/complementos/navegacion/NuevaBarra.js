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

    function ponerBarra() {
        document.getElementById('buscar').style.display = 'block';
    }

    function handleClick() {
        history.push('/lanas');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick1() {
        history.push('/hilos');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick2() {
        history.push('/tejidos');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick3() {
        history.push('/varios');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick4() {
        history.push('/palillos');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick5() {
        history.push('/crochet');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick6() {
        history.push('/accesorios');
        document.getElementById('buscar').style.display = 'none';
    }


    function handleClick7() {
        history.push('/tejidos/chalecos');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick8() {
        history.push('/tejidos/gorros');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick9() {
        history.push('/tejidos/cuellos');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick10() {
        history.push('/tejidos/bufandas');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick11() {
        history.push('/tejidos/guantes');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick12() {
        history.push('/tejidos/calcetines');
        document.getElementById('buscar').style.display = 'none';
    }


    function handleClick13() {
        history.push('/lanas/cisne');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick14() {
        history.push('/lanas/ukryl');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick15() {
        history.push('/lanas/reginella');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick16() {
        history.push('/lanas/revesderecho');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick17() {
        history.push('/lanas/faisan');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick18() {
        history.push('/lanas/lanabel');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick19() {
        history.push('/lanas/modista');
        document.getElementById('buscar').style.display = 'none';
    }


    function handleClick20() {
        history.push('/hilos/cisne');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick21() {
        history.push('/hilos/ukryl');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick22() {
        history.push('/hilos/reginella');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick23() {
        history.push('/hilos/revesderecho');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick24() {
        history.push('/hilos/faisan');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick25() {
        history.push('/hilos/lanabel');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick26() {
        history.push('/hilos/modista');
        document.getElementById('buscar').style.display = 'none';
    }


    function handleClick27() {
        history.push('/palillos/aero');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick28() {
        history.push('/palillos/pony');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick29() {
        history.push('/palillos/knitting_needles');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick30() {
        history.push('/palillos/modista');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick31() {
        history.push('/palillos/revesderecho');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick32() {
        history.push('/palillos/reginella');
        document.getElementById('buscar').style.display = 'none';
    }

    function handleClick33() {
        history.push('/crochet/aero');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick34() {
        history.push('/crochet/pony');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick35() {
        history.push('/crochet/knitting_needles');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick36() {
        history.push('/crochet/modista');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick37() {
        history.push('/crochet/revesderecho');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick38() {
        history.push('/crochet/reginella');
        document.getElementById('buscar').style.display = 'none';
    }


    function handleClick39() {
        history.push('/accesorios/huincha-medir');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick40() {
        history.push('/accesorios/aguja-coser');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick41() {
        history.push('/accesorios/aguja-lana');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick42() {
        history.push('/accesorios/tijeras');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick43() {
        history.push('/accesorios/botones');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick44() {
        history.push('/accesorios/marcador-punto');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick45() {
        history.push('/accesorios/marcador-vuelta');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick46() {
        history.push('/accesorios/alfileres');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick47() {
        history.push('/accesorios/alfiler-gancho');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick48() {
        history.push('/accesorios/telares-bastidores');
        document.getElementById('buscar').style.display = 'none';
    }
    function handleClick49() {
        history.push('/accesorios/elasticos');
        document.getElementById('buscar').style.display = 'none';
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
                            onClick={ ponerBarra }
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