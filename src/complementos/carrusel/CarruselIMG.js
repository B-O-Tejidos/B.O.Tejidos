import React from 'react';
import imagen1 from '../../img/imagen1.jpg';
import imagen2 from '../../img/imagen2.jpg';
import imagen3 from '../../img/imagen9.jpeg';
import imagen4 from '../../img/imagen4.jpeg';
import imagen5 from '../../img/imagen5.jpeg';
import imagen6 from '../../img/imagen6.jpeg';
import imagen7 from '../../img/imagen7.jpeg';
import imagen8 from '../../img/imagen8.jpeg';
import imagen9 from '../../img/imagen9.jpg';
import imagen10 from '../../img/imagen10.jpeg';

export const CarruselIMG = () => {

    return (
        <div>
            
            <div className="content-all">
                <div className="content-carrousel">
                    <figure><img src={ imagen1 }></img></figure>
                    <figure><img src={ imagen2 }></img></figure>
                    <figure><img src={ imagen3 }></img></figure>
                    <figure><img src={ imagen4 }></img></figure>
                    <figure><img src={ imagen5 }></img></figure>
                    <figure><img src={ imagen6 }></img></figure>
                    <figure><img src={ imagen7 }></img></figure>
                    <figure><img src={ imagen8 }></img></figure>
                    <figure><img src={ imagen9 }></img></figure>
                    <figure><img src={ imagen10 }></img></figure>
                </div>
            </div>

        </div>
    );
};
