import React from 'react';

export const PiePagina = () => {

    return (
        <div>
            
            <div id="footer">
            <div className='footer-logo'>
                        <img src='https://res.cloudinary.com/dy1o5vcd8/image/upload/v1623457255/B.O.Tejido/logo_c9yz4f.jpg'/>
                    </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="titulo">
                            <h1>Mas informacion</h1>
                        </div>
                        <div className="texto">
                            <p>
                                Esta compañia se dedica a la aventa de software integro 
                                con un conjunto de cosas que no se lo que estoy escribiendo, 
                                este texto es solo para llenar informacion en el cuadro de la 
                                compañia.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="titulo">
                            <h1>Redes Sociales</h1>
                        </div>
                        <div className="redes-sociales">
                            <div className="pilar">
                                <i className="fab fa-facebook"></i>
                                <p>Siguenos en Facebook</p>
                            </div>
                            <div className="pilar">
                                <i className="fab fa-instagram"></i>
                                <p>Siguenos en Instagram</p>
                            </div>
                            <div className="pilar">
                                <i className="fab fa-whatsapp"></i>
                                <p>Escribenos al WhatsApp</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                        <div className="titulo">
                            <h1>Contactos</h1>
                        </div>
                        <div className="redes-sociales">
                            <div className="pilar">
                                <i className="fas fa-home"></i>
                                <p>
                                    Comandante Enrique Faverio #781
                                    <br />
                                    Villa: Puente Alto
                                    <br /> 
                                    Comuna: Puente Alto
                                </p>
                            </div>
                            <div className="pilar">
                                <i className="fas fa-mobile-alt"></i>
                                <p>  +569-9313-9457</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        <div id="pie-footer">
            <div className="contenido">
                <div className="row">
                    <div className="col-md-12">
                        <p className="titulo-footer">
                            &copy; 2021 Todo los Derechos Reservados | <a href="">B.O. Tejidos</a>
                        </p>
                        <p className="span-titulo">
                            <a href="">Informacion Compañia</a> | <a href="">Privacidad y Politica</a> | <a href="">Terminos y Condiciones</a> 
                        </p>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
};
