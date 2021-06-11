import React from 'react';

export const Preloader = () => {

    window.addEventListener( 'load', function(){
        document.querySelector( '.preloader' ).classList.add( 'opacity-0' );
        setTimeout( function(){
          document.querySelector( '.preloader' ).style.display = 'none';
        }, 1000);
      });

    return (
        <>

        <div className='preloader'>
            <div className='loader'>
            </div>
        </div>

        </>
    );
};
