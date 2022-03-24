import styled from 'styled-components';
import image1 from '../images/image1.jpg';



export const Card = styled.div`
  
  width: 98%;
  display: flex;
  flex-direction: column;
  margin: 1%;
  height: 30%;
  border-radius: 15px;
  cursor:pointer;
  background-color: snow;
  box-shadow: 0 2px 2px rgba(242, 26, 190,0.1)inset, 0 0 8px gray;    

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
 color: black;
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
 color: white;
 height: 15%;
 font-size: 15px;
 margin-top:5px ;
 margin-bottom: 5px;
 padding-left:5px;
 padding-right: 5px;
 border-radius: 20px;

 align-self: center;
 background-color: black;

`;

export const AuxContainer = styled.div`
 /* display:inline; */
 color: gray;
 margin: 0%;
 /* width: 250px; */
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 height: max-content;
 font-size: 15px;
  
 @media (min-width: 280px) {
     width: 60%px;
     margin-right: 5px;
  }

  @media (min-width: 464px) {
     width: 90%;
  }


`;

export const P = styled.p`
 color: cyan;
 margin: 0%;
`;