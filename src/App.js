import React, { useState } from 'react';
/* import Lottie from "./lottie"; */
import Modal from 'react-modal';
import './rest.css'
import './App.css';
import './font/font.css'
import 'swiper/css';
import { Keyboard, Pagination, Navigation } from "swiper";
import {useMediaQuery} from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
export const Mobile = ({children}) => {
  const isMobile = useMediaQuery({
    query : "(max-width:880px)"
  });
  
  return <>{isMobile && children}</>
}
export const PC = ({children}) => {
  const isPc = useMediaQuery({
    query : "(min-width:880px)"
  });
  return <>{isPc && children}</>
}

function App() {
  const [modalOpen, setModalOpen] = useState([false, false]);

  const openModal = (index) => {
    const newModalOpen = [...modalOpen];
    newModalOpen[index] = true;
    setModalOpen(newModalOpen);
  };

  const closeModal = (index) => {
    const newModalOpen = [...modalOpen];
    newModalOpen[index] = false;
    setModalOpen(newModalOpen);
  };

  return (
    <>
    <PC>
    <section id="wrap">
      <div className='banner_img'>
      <div className='container'>
      <section className='header'>
        <div className='menu_nav'>
          <div className='logo'>{/* <Lottie/> */}</div>
          <div className='menu_item'>
            <ul className='menu_drop'>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Portfolio</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className='main_banner'>
        <div className='main_banner_left'>
        {/*   <img className='img_banner' src="img/main.png"/> */}
        </div>
        <div className='main_banner_right'>
          <div className='right_textbox'>
            <p className='h1_title'>해와 달처럼<br></br> 조화로운 코드를 구현하는<br/> 프론트엔드 정선문 입니다<p/> </p>
            <div className="main_button_box">
            <a href='https://github.com/jungsm?tab=repositories'><button className='git_button'>깃허브</button></a>
            </div>
        </div>
        </div>  
    </section>
    </div >
    <img src='img/img.png'className='shape01' ></img>
    <img src='img/banner_shape02.png'className='shape02'  ></img>
    <img src='img/banner_shape03.png'className='shape03' ></img>
    <img src='img/banner_shape05.png'className='shape05' ></img>
    <img src='img/banner_shape06.png'className='shape06' ></img>
    <img src='img/banner_shape07.png'className='shape07' ></img>
    <img src="img/banner_shape04.png" className="shape04"></img>
    </div>
    <section className="about container">
      <ul className="about_items">
        <li className="about_item">
          <div className="item_box">
          <div className="item_icon1">
            <img className="about_img" src="img/services_icon02.png"></img>
          </div>
          <div className="item_box"></div>
          <div className="h2_title">프로필</div>
          <div className="text_box">
          <p className="kr_text">이름 :정선문</p>
          <p className="kr_text">생년월일: 2001.07.14</p>
          <p className="kr_text">거주지: 경기도 남양주시 다산동 </p>
          <p className="kr_text">이메일: wjdtjsans0714@naver.com </p>
          <p className="kr_text">전화번호: 010-9378-7268 </p>
          </div>
          </div>
        </li>
        <li className="about_item">
          <div className="item_box">
          <div className="item_icon2">
            <img className="about_img" src="img/services_icon03.png"></img>
          </div>
          <div className="h2_title">교육수료</div>
          <p className="kr_text">2020.03월~2023.02월</p>
          <p className="kr_text">경남도립거창대학교 컴퓨터공학 2년제 졸업</p>
          <p className="kr_text">2022.11월~2023.05월</p>
          <p className="kr_text">프로젝트 기반 프론트엔드(React&Vue)<br/> 웹&앱 SW개발자 양성과정</p>
          </div>
        </li>
        <li className="about_item">
          <div className="item_box">
          <div className="item_icon3">
            <img className="about_img" src="img/services_icon01.png"></img>
          </div>
          <div className="h2_title">자격증</div>
          <p className="kr_text">운전면허증 2종 자동</p>
          <p className="kr_text">취득일: 2020.02.14</p>
          </div>
        </li>
      </ul>
    </section>
    <section className="project margin_top">
      <div className="container">
      <div className="project_box">
        <div className="project_text_box">
          <div className="project_text">
            <span className="h3_text">프로젝트</span>
          <span className="h1_text">이미지를 클릭 시 해당 프로젝트의 상세정보를<br/> 확인하실 수 있습니다.</span> <br/>
          <span className="h4_text">HTML,CSS,SCSS,JavaScript,JQuery<br/>React,React Native로 작업한 프로젝트 입니다.</span>
          <ul className="arrow_box">
            <div className='swiper-button-prev'></div>
          </ul>
          </div>
        </div>
          <ul className="project_items">
          <Swiper
      style={{width:'900px',height:'560px'}}
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
          <SwiperSlide>
            <li className="project_item">
              <img onClick={() => openModal(0)}  src="img/prt1.png"></img>
              <Modal isOpen={modalOpen[0]} closeTimeoutMS={300}   onRequestClose={closeModal}>
              <img src='img/x.png' className="modal" onClick={() => closeModal(0)}></img>
              <div className='modal_wrap'>
              <div className='modal_img_box'>
              <img className="modal_img" src='img/modal3.png'></img>
              </div >
              <div className='modal_box'>
                <p className='h3_title mt'>첫번째 프로젝트 수원시청 사이트 입니다.</p>
                <ul className='modal_texts'>
                <li className='modal_text'>기술스택: <span className='modal_en_text'>HTML, CSS, JavaScript</span></li>
                
                <li className='modal_text'>기여도: <span className='modal_en_text'>100%</span></li>
                <li className='modal_text'>작업기간: <span className='modal_en_text'>3주</span></li>
                <li className='modal_text'>특징:: <span className='modal_en_text'>HTML,CSS,JavaScript</span></li>
                </ul>
                <div className='modal_buttons'>
               <a href="https://github.com/jungsm/project1" target="_blank"><button className='modal_button'>깃허브</button></a>
              <a href='https://github.com/jungsm/project1/blob/main/file/proposal.pdf' target="_blank"><button className='modal_button'>기획서</button></a>  
              <a href="http://wjdtjsans0714.dothome.co.kr/" target="_blank"><button className='modal_button'>사이트</button></a>  
                </div>
              </div>
              </div>
             </Modal>
            </li>
            </SwiperSlide>
            <SwiperSlide>
            <li className="project_item">
            <img onClick={() => openModal(1)} src="img/prt2.png"></img>
            <Modal isOpen={modalOpen[1]}  onRequestClose={() => closeModal(1)}>

              <img src='img/x.png' className="modal" onClick={() => closeModal(1)}></img>
              <div className='modal_wrap'>
              <div className='modal_img_box'>
              <img className="modal_img" src='img/modal4.png'></img>
              </div >
              <div className='modal_box'>
                <p className='h3_title mt'>두번째 프로젝트 수원시청 사이트 입니다.</p>
                <ul className='modal_texts'>
                <li className='modal_text'>기술스택: <span className='modal_en_text'>HTML, SCSS, JS, AJAX</span></li>
                <span className=''></span>
                <li className='modal_text'>기여도: <span className='modal_en_text'>25%</span></li>
                <li className='modal_text'>작업기간:2주</li>
                <li className='modal_text'>특징::</li>
                </ul>
                <div className='modal_buttons'>
               <a href='https://github.com/jungsm/bbatsueWeb'><button className='modal_button'>깃허브</button></a> 
               <a href='https://bbatsue-web.vercel.app/index.html'><button className='modal_button'>사이트</button></a> 
             
                </div>
              </div>
              </div>
             </Modal>
            </li>
            </SwiperSlide>
            <SwiperSlide>
            <li className="project_item">
              <img onClick={() => openModal(2)} src="img/prt3.png"></img>
              <Modal isOpen={modalOpen[2]} onRequestClose={() => closeModal(2)}>
              <img src='img/x.png' className="modal" onClick={() => closeModal(2)}></img>
              
              <div className='modal_wrap'>
              <div className='modal_img'>
              <img className="" src=''></img>
              이미지
              </div >
              <div className='modal_box'>
                <p className='h3_title mt'>세번째 프로젝트 수원시청 사이트 입니다.</p>
                <ul className='modal_texts'>
                <li className='modal_text'>기술스택:</li>
                <li className='modal_text'>기여도:</li>
                <li className='modal_text'>작업기간:</li>
                <li className='modal_text'>특징::</li>
                </ul>
                <div className='modal_buttons'>
                <a href=''><button className='modal_button'>깃허브</button></a> 
               <a href=''><button className='modal_button'>기획서</button></a> 
               <a href=''><button className='modal_button'>사이트</button></a> 
                </div>
              </div>
              </div>
             </Modal>
            </li>
            </SwiperSlide>
            <SwiperSlide>
            <li onClick={() => openModal(3)} className="project_item">4</li>
            <Modal isOpen={modalOpen[3]} onRequestClose={() => closeModal(3)}>
              <img src='img/x.png' className="modal" onClick={() => closeModal(3)}></img>
              <div className='modal_wrap'>
              <div className='modal_img'>
              <img className="" src=''></img>
              이미지
              </div >
              <div className='modal_box'>
                <p className='h3_title mt'>네번째 프로젝트 수원시청 사이트 입니다.</p>
                <ul className='modal_texts'>
                <li className='modal_text'>기술스택:</li>
                <li className='modal_text'>기여도:</li>
                <li className='modal_text'>작업기간:</li>
                <li className='modal_text'>특징::</li>
                </ul>
                <div className='modal_buttons'>
                <a href=''><button className='modal_button'>깃허브</button></a> 
               <a href=''><button className='modal_button'>기획서</button></a> 
               <a href=''><button className='modal_button'>사이트</button></a> 
                </div>
              </div>
              </div>
             </Modal>
            </SwiperSlide>
            <SwiperSlide>
            <li onClick={() => openModal(4)} className="project_item">5</li>
            <Modal isOpen={modalOpen[4]} onRequestClose={() => closeModal(4)}>
              <img src='img/x.png' className="modal" onClick={() => closeModal(4)}></img>
              <div className='modal_wrap'>
              <div className='modal_img'>
              <img className="" src=''></img>
              이미지
              </div >
              <div className='modal_box'>
                <p className='h3_title mt'>다섯번째 프로젝트 수원시청 사이트 입니다.</p>
                <ul className='modal_texts'>
                <li className='modal_text'>기술스택:</li>
                <li className='modal_text'>기여도:</li>
                <li className='modal_text'>작업기간:</li>
                <li className='modal_text'>특징::</li>
                </ul>
                <div className='modal_buttons'>
                <a href=''><button className='modal_button'>깃허브</button></a> 
               <a href=''><button className='modal_button'>기획서</button></a> 
               <a href=''><button className='modal_button'>사이트</button></a> 
                </div>
              </div>
              </div>
             </Modal>
            </SwiperSlide>
            </Swiper>
          </ul>
          
        </div>
        </div>
        <div>
        <img src='img/banner_shape09.png' className='shape09'></img>
        <img src='img/banner_shape08.png' className='shape08'></img>
        <img src='img/moon.png' className='moon'></img>
        </div>
    </section>
    <section className="section1">
      section1
      
    </section>
    <section className="section2">
      footer
    </section>
    </section>
    </PC>












    <Mobile>
    <div className='banner_img'>
      <div className='container'>
      <section className='header'>
        <div className='menu_nav'>
          <div className='logo'></div>
          <div className='menu_item'>
            <ul className='menu_drop'>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Portfolio</a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className='main_banner_mo'>
        <div className='main_banner_left'>
          <img className='img_banner' src="img/main.png"/> *
        </div>
        <div className='main_banner_right'>
          <div className='right_textbox_mo'>
            <p className='h1_title'>해와 1달처럼<br></br> 조화로운 코드를<p/> </p>
            <div className="main_button_box">
            <a href='https://mango2.notion.site/008cc17e31554d1cbf85c6c993dcd561'><button>Notion</button></a>
            <a href='https://github.com/jungsm?tab=repositories'><button>Git Hub</button></a>
            </div>
        </div>
        </div>  
    </section>
    </div >
    <img src='img/img.png'className='shape01' ></img>
    <img src='img/banner_shape02.png'className='shape02'  ></img>
    <img src='img/banner_shape03.png'className='shape03' ></img>
    <img src='img/banner_shape05.png'className='shape05' ></img>
    <img src='img/banner_shape06.png'className='shape06' ></img>
    <img src='img/banner_shape07.png'className='shape07' ></img>
    <img src="img/sun.png" className="sunimg"></img>
    </div>
    <section className="about container">
      <ul className="about_items">
        <li className="about_item">
          <div className="item_box">
          <div className="item_icon">
            <img className="about_img" src="img/about1.png"></img>
          </div>
          <div className="h2_title">타이틀</div>
          <div className="kr_text">가나다라마바사</div>
          </div>
        </li>
        <li className="about_item">
          <div className="item_box">
          <div className="item_icon">
            <img className="about_img" src="img/about1.png"></img>
          </div>
          <div className="h2_title">타이틀</div>
          <div className="kr_text">가나다라마바사</div>
          </div>
        </li>
        </ul>
        <ul className="about_items">
        <li className="about_item">
          <div className="item_box">
          <div className="item_icon">
            <img className="about_img" src="img/about1.png"></img>
          </div>
          <div className="h2_title">타이틀</div>
          <div className="kr_text">가나다라마바사</div>
          </div>
        </li>
        <li className="about_item">
          <div className="item_box">
          <div className="item_icon">
            <img className="about_img" src="img/about1.png"></img>
          </div>
          <div className="h2_title">타이틀</div>
          <div className="kr_text">가나다라마바사</div>
          </div>
        </li>
      </ul>
    </section> 
    </Mobile>
    
    </>
  );
}
export default App;
