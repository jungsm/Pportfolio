import React, { Component } from 'react'
import { Keyboard, Pagination, Navigation } from "swiper";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import { Swiper, SwiperSlide } from 'swiper/react';
function ProjectPage (){

    return (
        <section id="project">
            <div className="container margin_top">
              <div className="project_box">
                <div className="project_text_box">
                  <div className="project_text">
                    <span className="h3_text">프로젝트</span>
                    <span className="kr_text4">이미지를 클릭 시 해당 <br />프로젝트의 상세정보를<br /> 확인하실 수 있습니다.</span> <br />
                    <span className="h4_text">HTML,CSS,SCSS,JavaScript,JQuery<br />React로 작업한 프로젝트 입니다.</span>
                    <ul className="arrow_box">
                      <div className='swiper-button-prev'></div>
                    </ul>
                  </div>
                </div>
                <ul className="project_items">
                  <Swiper
                    style={{ width: '900px', height: '560px' }}
                    spaceBetween={50}
                    slidesPerView={2.2}
                    keyboard={{
                      enabled: true,
                    }}
                    autoplay={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    navigation={true}
                    pagination={{ clickable: true }}
                    className="mySwiper"
                  >
                    <SwiperSlide><Project1 /></SwiperSlide>
                    <SwiperSlide><Project2 /></SwiperSlide>
                    <SwiperSlide><Project3 /></SwiperSlide>
                  </Swiper>
                </ul>

              </div>
            </div>
            <div>
              <img src='img/banner_shape09.png' className='shape09'/>
              <img src='img/banner_shape08.png' className='shape08'/>
            </div>
          </section>
    )
  }
  export default ProjectPage;