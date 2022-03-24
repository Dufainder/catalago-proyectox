import React from 'react';
import './stylesLanding.css';



export default function Landing() {
  return (

    <header>
     <div  class="header__img-container" > 
         <img src="./assets/img/logo.svg" alt="logo"/>
     </div>   

     <div class="header__title-container">
        <h1>La próxima revolución en el intercambio de criptomonedas </h1>

        <p>Batabit te ayuda a   navegar entre los diferentes precios y tendencias</p>
        
    </div>
    
    <a href="#planes" class="header__button" >Conoce nuestros planes<span></span></a>
   
    </header>
  )
}
