import React from 'react'
import  {Card, Img, H6, Cabeza,
    Caracteristicas, AuxContainer, Precio
   } from './cardStyle' 

export default function CardItem({marca, referencia, tipo, categoria, procesador, 
    ram, disco, tarjeta_grafica, precio}) {
  return (
    <>
    <Card>
            <Img/>
           
            <Cabeza>
                <AuxContainer>
                 <H6>Marca:</H6> {marca} 
                </AuxContainer>
              
                <AuxContainer>
                  <H6>Referencia:</H6> {referencia} 
                </AuxContainer>
              
                <AuxContainer>
                  <H6>Tipo:</H6> {tipo}
                </AuxContainer>
                <AuxContainer>
                  <H6>Categoria:</H6> {categoria}
                </AuxContainer>
           </Cabeza>

           <Caracteristicas>
           <AuxContainer>
             <H6>Procesador:</H6> {procesador}
           </AuxContainer>

           <AuxContainer>
              <H6>Ram:</H6> {ram}
            </AuxContainer>

            <AuxContainer>
             <H6>Disco:</H6> {disco}
            </AuxContainer>

            <AuxContainer>
             <H6>Tarjeta Grafica:</H6> {tarjeta_grafica}
            </AuxContainer> 
            
           </Caracteristicas>

           <Precio>
                <p>{precio} </p> 
           </Precio>

      </Card>
    
    </>
  )
}
