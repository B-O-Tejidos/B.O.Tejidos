import React from 'react';

export const FooterMovil = () => {

    return (
        <div>
            
            <footer className='footer-movil'>
                <div className='footer-info'>
                    <div className='footer-logo'>
                        <img src='https://res.cloudinary.com/dy1o5vcd8/image/upload/v1623457255/B.O.Tejido/logo_c9yz4f.jpg'/>
                    </div>
                    <div className='footer-contacto'>
                        <label><i class="fas fa-map-marker-alt"></i> Direccion</label>
                        <p>Comandante Enrique Faverio #781
                            <br />
                            Villa: Puente Alto / Comuna: Puente Alto
                        </p>
                        <br />
                        <br />
                        <label><i class="fas fa-mobile-alt"></i> Telefono</label>
                        <p>+569 9313 9457</p>
                        <br />
                        <br />
                        <label><i class="far fa-envelope"></i> Escribenos al Correo</label>
                        <p>bettytejetodo@hotmail.com</p>
                        <br />
                        <br />
                    </div>
                </div>
                <div className='footer-copy'>
                    &copy; 2021 Todo los Derechos Reservados | <a href="">B.O. Tejidos</a>
                </div>
            </footer>

        </div>
    );
};
