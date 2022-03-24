
import React from 'react';
import CardItem from '../card';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import './styles.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y ]);

export default function CorouselSwiper() {
  return (

    <Swiper className='swiper-control'
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{dynamicBullets: true,}}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        // when window width is >= 640px
        100: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        464: {
        
          slidesPerView: 2,
        },
        
        1024: {
            slidesPerView: 3,
          },



      }}>
    <SwiperSlide>
              <CardItem
                    marca={'HP'} 
                    referencia={'My nigga'} 
                    tipo={'Portatil'} 
                    categoria={'entretenimiento, estudio'} 
                    procesador={'i core 7-9'} 
                    ram={'8 gb'}
                    disco={'1 TB'}
                    precio={'1.000.000'}
                    tarjeta_grafica={'Nividia Gforce 780px mas turbo'}
              />
    </SwiperSlide>
    <SwiperSlide>
                    
               <CardItem
                    marca={'HP'} 
                    referencia={'My nigga'} 
                    tipo={'Portatil'} 
                    categoria={'entretenimiento, estudio'} 
                    procesador={'i core 7-9'} 
                    ram={'8 gb'}
                    disco={'1 TB'}
                    precio={'1.000.000'}
                    tarjeta_grafica={'Nividia Gforce 780px mas turbo'}
                 />


    </SwiperSlide>
    <SwiperSlide>

               <CardItem
                    marca={'HP'} 
                    referencia={'My nigga'} 
                    tipo={'Portatil'} 
                    categoria={'entretenimiento, estudio'} 
                    procesador={'i core 7-9'} 
                    ram={'8 gb'}
                    disco={'1 TB'}
                    precio={'1.000.000'}
                    tarjeta_grafica={'Nividia Gforce 780px mas turbo'}
                 />
                 

    </SwiperSlide>
    <SwiperSlide>

               <CardItem
                    marca={'HP'} 
                    referencia={'My nigga'} 
                    tipo={'Portatil'} 
                    categoria={'entretenimiento, estudio'} 
                    procesador={'i core 7-9'} 
                    ram={'8 gb'}
                    disco={'1 TB'}
                    precio={'1.000.000'}
                    tarjeta_grafica={'Nividia Gforce 780px mas turbo'}
               />

    </SwiperSlide>
    <SwiperSlide>
        
        <CardItem
             marca={'HP'} 
             referencia={'My nigga'} 
             tipo={'Portatil'} 
             categoria={'entretenimiento, estudio'} 
             procesador={'i core 7-9'} 
             ram={'8 gb'}
             disco={'1 TB'}
             precio={'1.000.000'}
             tarjeta_grafica={'Nividia Gforce 780px mas turbo'}
        />

  </SwiperSlide>
  <SwiperSlide>
        
        <CardItem
             marca={'HP'} 
             referencia={'My nigga'} 
             tipo={'Portatil'} 
             categoria={'entretenimiento, estudio'} 
             procesador={'i core 7-9'} 
             ram={'8 gb'}
             disco={'1 TB'}
             precio={'1.000.000'}
             tarjeta_grafica={'Nividia Gforce 780px mas turbo'}
        />

  </SwiperSlide>
  <SwiperSlide>
        
        <CardItem
             marca={'HP'} 
             referencia={'My nigga'} 
             tipo={'Portatil'} 
             categoria={'entretenimiento, estudio'} 
             procesador={'i core 7-9'} 
             ram={'8 gb'}
             disco={'1 TB'}
             precio={'1.000.000'}
             tarjeta_grafica={'Nividia Gforce 780px mas turbo'}
        />

  </SwiperSlide>



</Swiper>
)
}






























// import React, {useState} from 'react'
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// // import "./styledCorousel.css"; 


// export default function MainCarousel({allproducts}) {

//     const [cont, setCont] = useState(0);





//   return (
//     <>
         
//          <Carousel 
    
//     showArrows={true} 
//     showThumbs={false} 
//     showIndicators={false} 
//     showStatus={false}
//     width={'100%'}
//     onChange={(e)=>(setCont(e))}
//     id='cnatiner'
//     className='cnatiner'
//     >
   


//    {allproducts.data?
//           allproducts.data.map((e,i)=>(
//             i<9?


//            </CardItem>
//            :<></>
//          ))
         
//          : <></>}

//     </Carousel>
       
//        {/* <div className='indicador-container'>

//         {imgs?.images? imgs.images.map( (e, i) =>(
            
//             <div key={i} className={cont===i? 'indicador-on':'indicador-off'}/>
            
//             ))
//             : 
//             <></>}
//      </div> */}


//     </>
//   )
// }
