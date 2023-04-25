import Lottie from "./lottie";
import './rest.css'
import './App.css';
import './font/font.css'
import 'swiper/css';
import { Keyboard, Pagination, Navigation } from "swiper";
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainImg from "./components/MainImg"
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import MailImg from "./components/MaiImg"

import Skill from "./skills"
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:880px)"
  });

  return <>{isMobile && children}</>
}
export const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:880px)"
  });
  return <>{isPc && children}</>
}

function App() {
  const skills = [
    {
      name: "HTML",
      value: "90%",

    },
    {
      name: "CSS",
      value: "90%"
    },
    {
      name: "Javascript",
      value: "90%"
    },
    {
      name: "REACT",
      value: "80%"
    },
    {
      name: "Jquery",
      value: "70%"
    },
    {
      name: "Vue",
      value: "60%"
    },
    {
      name: "Figma",
      value: "80%"
    },
  ];


  return (
    <>
      <PC>
        <section id="wrap">
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
                    <p className='h1_title'>해와 달처럼<br></br> 조화로운 코드를 구현하는<br /> 프론트엔드 정선문 입니다<p /> </p>
                    <div className="main_button_box">
                      <a href='https://github.com/jungsm?tab=repositories' target="_blank"><button className='button'><span className='kr_text'>깃허브</span></button></a>
                      <a href='https://drive.google.com/file/d/1x-i9clF8w3-TjHmGfBIvJMHJaebp-zk8/view?usp=share_link' target="_blank"><button className='button'><span className='kr_text'>이력서</span></button></a>
                    </div>
                  </div>
                </div>
              </section>
            </div >
            <MainImg/>
          </div>
          <section id="about">
            <ul className="about_items container">
              <li className="about_item">
                <div className="item_box">
                  <div className="item_icon1">
                    <img className="about_img" src="img/services_icon02.png"/>
                  </div>
                  <div className="item_box"></div>
                  <div className="h2_title">프로필</div>
                  <div className="text_box">
                    <p className="kr_text">이름 :정선문</p>
                    <p className="kr_text">생년월일: 2001.07.14</p>
                    <p className="kr_text">거주지: 경기도 남양주시 다산동 </p>
                  </div>
                </div>
              </li>
              <li className="about_item">
                <div className="item_box">
                  <div className="item_icon2">
                    <img className="about_img" src="img/services_icon03.png"/>

                  </div>
                  <div className="h2_title">교육수료</div>
                  <p className="kr_text">2020.03월~2023.02월</p>
                  <p className="kr_text">경남도립거창대학교 컴퓨터공학 2년제 졸업</p>
                  <p className="kr_text">2022.11월~2023.05월</p>
                  <p className="kr_text">프로젝트 기반 프론트엔드(React&Vue)<br /> 웹&앱 SW개발자 양성과정</p>
                </div>
              </li>
              <li className="about_item">
                <div className="item_box">
                  <div className="item_icon3">
                    <img className="about_img" src="img/services_icon01.png"/>
                  </div>
                  <div className="h2_title">자격증</div>
                  <p className="kr_text">운전면허증 2종 자동</p>
                  <p className="kr_text">취득일: 2020.02.14</p>
                </div>
              </li>
            </ul>
          </section>
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
          <section className="section1">
            <div className='skillbar container'>
              {skills.map((x, index) => {
                return <Skill name={x.name} value={x.value} />;
              })}
            </div>

          </section>
          <section className="mail">
            <div className='container'>
              <div className='mail_title'>
                <div className='mail_title1 sub_title'>CONTACT ME</div>
                <div className='mail_title2 h1_text'>저의 포트폴리오를 봐주셔서 감사합니다</div>
              </div>
              <ul className='mail_text kr_text5'>
                <li className='mail_email'>이메일 : wjdtjsans0714@naver.com</li>
                <li className='number'>전화번호 : 010-9378-7268</li>
              </ul>



              <div className='mail_img'>
                <MailImg/>
              </div>
            </div>
          </section>
          <section className='footer'>
            <div className='footer_title'>
              <div className='footer_text'>
                Copyright© 2023. Sunmoon Jung All rights reserved
              </div>
            </div>
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
                <img className='img_banner' src="img/main.png" /> *
              </div>
              <div className='main_banner_right'>
                <div className='right_textbox_mo'>
                  <p className='h1_title'>해와 1달처럼<br></br> 조화로운 코드를<p /> </p>
                  <div className="main_button_box">
                    <a href='https://mango2.notion.site/008cc17e31554d1cbf85c6c993dcd561'><button>Notion</button></a>
                    <a href='https://github.com/jungsm?tab=repositories'><button>Git Hub</button></a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <img src='img/img.png' className='shape01' />
          <img src='img/banner_shape02.png' className='shape02' />
          <img src='img/banner_shape03.png' className='shape03' />
          <img src='img/banner_shape07.png' className='shape07' />
          <img src='img/banner_shape05.png' className='shape05' />
          <img src='img/banner_shape06.png' className='shape06' />
          <img src="img/sun.png" className="sunimg"/>
        </div>
        <section className="about container">
          <ul className="about_items">
            <li className="about_item">
              <div className="item_box">
                <div className="item_icon">
                  <img className="about_img" src="img/about1.png"/>
                </div>
                <div className="h2_title">타이틀</div>
                <div className="kr_text">가나다라마바사</div>
              </div>
            </li>
            <li className="about_item">
              <div className="item_box">
                <div className="item_icon">
                  <img className="about_img" src="img/about1.png"/>
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
                  <img className="about_img" src="img/about1.png"/>
                </div>
                <div className="h2_title">타이틀</div>
                <div className="kr_text">가나다라마바사</div>
              </div>
            </li>
            <li className="about_item">
              <div className="item_box">
                <div className="item_icon">
                  <img className="about_img" src="img/about1.png"/>
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
