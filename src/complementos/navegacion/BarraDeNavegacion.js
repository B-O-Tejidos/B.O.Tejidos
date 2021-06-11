import React from 'react';

export const BarraDeNavegacion = () => {

    return (
        <div className="navbar">
            
            <div className="envase">
            <div className="fila full-screen">
                <div className="Buscar">

                    <input type="search" id='input-search' placeholder="Buscar tu producto aqui...."/>

                </div>
                <div className="content-search">
                    <div className="content-table">
                        <table id="table">
                            <thead>
                                <tr>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><a href="#">Tejidos</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Accesorios</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Productos</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Chalecos</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Palillos</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Crochet</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Lanas</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Lanas Cisne</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Lanas Ukril</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Lanas Reginela</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Lanas Revesderecho</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Lanas Modista</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Lanas Lanabel</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Lanas Faisan</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Hilos</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Hilos Cisne</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Hilos Ukril</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Hilos Reginela</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Hilos Revesderecho</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Hilos Modista</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Hilos Lanabel</a></td>
                                </tr>
                                <tr>
                                    <td><a href="#">Hilos Faisan</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="contactos">
                    <a href=""><i class="fab fa-facebook"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href=""><i class="fab fa-whatsapp"></i></a>
                    <a href=""><i class="fab far fa-envelope"></i></a>
                </div>

            </div>
            </div>

        </div>
    );
};
