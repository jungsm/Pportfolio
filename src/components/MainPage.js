import React, { Component } from 'react'
import Lottie from "../js/lottie"
function MainPage() {

    return (
        <div className='banner_img'>
            <div className='container'>
              <section className='header'>
                <div className='menu_nav'>
                  <div className='logo'><Lottie /></div>
                  <div className='menu_item'>
                    <ul className='menu_drop'>
                      <li><a>Home</a></li>
                      <li><a href='#about'>About</a></li>
                      <li><a href='#project'>Portfolio</a></li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className='main_banner'>
                <div className='main_banner_left'>
                  <img className='img_banner' src="img/profile.png" />
                </div>
                <div className='main_banner_right'>
                  <div className='right_textbox'>
                    <p className='h1_title'><mark className='mark_sun'>해</mark>와 <mark className='mark_moon'>달</mark>처럼<br></br> 조화로운 코드를 구현하는<br /> 프론트엔드 <mark className='mark_name'>정선문</mark> 입니다<p /> </p>
                    <div className="main_button_box">
                      <a href='https://github.com/jungsm?tab=repositories' target="_blank"><button className='button'><span className='kr_text'>깃허브</span></button></a>
                      <a href='https://drive.google.com/file/d/1yN9mL2Hfl4DmSgGIJCN7GhXZpxQ9n_Vj/view?usp=drive_link' target="_blank"><button className='button'><span className='kr_text'>이력서</span></button></a>
                    </div>
                  </div>
                </div>
              </section>
            </div >
            <div>
         <img src='img/img.png' className='shape01' />
            <img src='img/banner_shape02.png' className='shape02'  />
            <img src='img/banner_shape03.png' className='shape03' />
            <img src='img/banner_shape05.png' className='shape05' />
            <img src='img/banner_shape06.png' className='shape06' />
            <img src='img/banner_shape07.png' className='shape07' />
            <img src="img/banner_shape04.png" className="shape04"/>
      </div>
          </div>
    )
  }
export default MainPage;
