import React, {useEffect, useState} from 'react';
import { getProducts, getProducto} from '../redux/actions'
import { useDispatch, useSelector} from 'react-redux';
import CorouselSwiper from '../corousel/indexCarousel';
import SideBar from '../sideBar/indexSIdeBar';
import Navbar3 from '../navbar3/indexNavbar3';
import 'animate.css';




export default function Inicio() {

const dispatch = useDispatch();
const allproducts = useSelector((state) => state.products)
const producto = useSelector((state) => state.product)
const [isOpen, setIsOpen] = useState(false)

useEffect(() => {
  dispatch(getProducts())
  dispatch(getProducto(2))
  if(allproducts.data !== undefined){
    console.log(producto, 'a ver');
  }
},[])  


const toggle = ()=>{
  
  setIsOpen(!isOpen)
}


  return (
      
    <>
         
         <SideBar isOpen={isOpen} toggle={toggle} className='animate__fadeInDown'></SideBar>
         <Navbar3 toggle={toggle}/>
      


    <>
      

       <CorouselSwiper/>

{/* 
          {allproducts.data?
          allproducts.data.map((e,i)=>(
            i<9?
            <CardItem key={i}
            marca={e.marca} 
            referencia={e.referencia} 
            tipo={e.tipo}
            categoria={e.categoria}
            procesador={e.procesador}
            ram={e.ram}
            disco={e.disco}
            tarjeta_grafica={e.tarjeta_grafica}
            precio={e.Precio}
            >
            
            
            </CardItem>
            :<></>
            ))
            
          : <></>}  */}

        
    </>
</>
    )
}
