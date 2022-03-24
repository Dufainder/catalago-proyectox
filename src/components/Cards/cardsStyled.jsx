import styled from 'styled-components';
import image1 from '../images/image1.jpg';


export const CardsContainer = styled.div`

display: flex;
justify-content: center;
height: 1200px;
margin-left: 10%;
margin-right: 10%;
margin-top: 3%;
margin-bottom: 3%;
border-radius: 20px;
width: 75%;
background-color: white;
color:black;
`;
export const Contenedor = styled.div`

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: 2.5%;
  gap: 2%;
  background-color: transparent;
  
`;

export const Card = styled.div`
  
  width: 30%;
  display: flex;
  flex-direction: column;
  margin: 1%;
  height: 30%;
  border-radius: 15px;
  cursor:pointer;
  background-color: rgba(70,73,72,0.3);

  :hover{
    box-shadow: 0 2px 2px rgba(242, 26, 190,0.1)inset, 0 0 8px #1AF2EF;       
  }
   
`;

export const Img = styled.img.attrs({
  src:`${image1}`,
  alt:`Image1`
})`
height: 40%;
border-radius: 15px;

`;

export const H6 = styled.h6`
 color: snow;
 padding: 0%;
 margin: 0%;
 display:inline;
 font-size: 15px;
`;

export const Cabeza = styled.div`
 color: snow;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 justify-content: flex-start;
 margin-top:4%;
 margin-left:4%;
 text-align: start;


`;

export const Caracteristicas = styled.div`
 color: snow;
 margin-top: 1%;
 margin-left: 4%;
 text-align: start;
`;


export const Precio = styled.div`
 color: #47F21A;
 width: 100px;
 padding: 15px;
 background: black;
 margin-top: 2%;

`;

export const AuxContainer = styled.div`
 /* display:inline; */
 color: cyan;
 margin: 0%;
 width: 250px;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 height: max-content;
 font-size: 15px;
`;

export const P = styled.p`
 color: cyan;
 margin: 0%;
`;