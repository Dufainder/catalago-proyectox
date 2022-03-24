
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/effect-coverflow";
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import "./styles.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function CorouselLAnding() {


const fotosLanding = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXS79za7Nzf2qt87939d9wg9QJYwH-j3JzNhHfzZPJXiUSYbqqHFwR49o2IumrTmUyrY&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXS79za7Nzf2qt87939d9wg9QJYwH-j3JzNhHfzZPJXiUSYbqqHFwR49o2IumrTmUyrY&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSitHLeAmDiQMjpf1kqkZGvnbMGZBAfE0AZsw&usqp=CAU',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlTiByWTKtGmjkguH90V4kdmDCKIA-ycx7cA&usqp=CAU',
'https://img77.uenicdn.com/image/upload/v1592326548/business/bfe49e69-6b23-4efd-b900-8baf995bb121/servicio-tecnico-remoto-laptop-computadora-impresora-celular-D-NQ-NP-849279-MPE41597901124-042020-Fjpg.jpg',
'https://apollo-virginia.akamaized.net/v1/files/gpp2j1gcv27n1-CO/image;s=850x0']




  return (
    <div className="container">
      <div className="title_wrapper">
        <div className="reactLogo">
          <img src="../svg/left-arrow.svg" alt='melo' />
        </div>
        <div className="title_">
          <span>Proyecto X</span>Expertos en tecnologia
        </div>
      </div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >

        
  {fotosLanding?.map((e)=>( 
        
   <SwiperSlide>

       <div className='imageSwiper' style={{  
          backgroundImage: `url(${e})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
       }}/>

   </SwiperSlide>
 ))}
      
      </Swiper>
    </div>
  );
}