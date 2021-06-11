import React from 'react';

export const PiePagina = () => {

    return (
        <div>
            
            <div id="footer">
                <div class="row">
                    <div class="col-md-4">
                        <div class="titulo">
                            <h1>Mas informacion</h1>
                        </div>
                        <div class="texto">
                            <p>
                                Esta compañia se dedica a la aventa de software integro 
                                con un conjunto de cosas que no se lo que estoy escribiendo, 
                                este texto es solo para llenar informacion en el cuadro de la 
                                compañia.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="titulo">
                            <h1>Redes Sociales</h1>
                        </div>
                        <div class="redes-sociales">
                            <div class="pilar">
                                <i class="fab fa-facebook"></i>
                                <p>Siguenos en Facebook</p>
                            </div>
                            <div class="pilar">
                                <i class="fab fa-instagram"></i>
                                <p>Siguenos en Instagram</p>
                            </div>
                            <div class="pilar">
                                <i class="fab fa-whatsapp"></i>
                                <p>Escribenos al WhatsApp</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="titulo">
                            <h1>Contactos</h1>
                        </div>
                        <div class="redes-sociales">
                            <div class="pilar">
                                <i class="fas fa-home"></i>
                                <p>
                                    Santiago
                                    <br />
                                    Comuna de Punte Alto
                                    <br /> 
                                    Enrique Faverio
                                    <br /> 
                                    Casa: #781
                                </p>
                            </div>
                            <div class="pilar">
                                <i class="fas fa-mobile-alt"></i>
                                <p> +569-9313-9457</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="pie-footer">
            <div class="contenido">
                <div class="row">
                    <div class="col-md-12">
                        <p class="titulo-footer">
                            &copy; 2021 Todo los Derechos Reservados | <a href="">B.O. Tejidos</a>
                        </p>
                        <p class="span-titulo">
                            <a href="">Informacion Compañia</a> | <a href="">Privacidad y Politica</a> | <a href="">Terminos y Condiciones</a> 
                        </p>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
};
