import React, { useState } from 'react';
import Lottie from "./lottie"; 
import Modal from 'react-modal';
import './rest.css'
import './App.css';
import './font/font.css'
import 'swiper/css';
import { Keyboard, Pagination, Navigation } from "swiper";
import {useMediaQuery} from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';

import Skill from "./skills"
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
  ];
  
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
          <div className='logo'><Lottie/></div>
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
         <img className='img_banner' src="img/profile.png"/> 
        </div>
        <div className='main_banner_right'>
          <div className='right_textbox'>
            <p className='h1_title'>해와 달처럼<br></br> 조화로운 코드를 구현하는<br/> 프론트엔드 정선문 입니다<p/> </p>
            <div className="main_button_box">
            <a href='https://github.com/jungsm?tab=repositories'><button className='button'><span className='kr_text'>깃허브</span></button></a>
            <a href='https://github.com/jungsm?tab=repositories'><button className='button'><span className='kr_text'>이력서</span></button></a>
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
          <span className="kr_text4">이미지를 클릭 시 해당 프로젝트의 상세정보를<br/> 확인하실 수 있습니다.</span> <br/>
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
              <p className='img_text kr_img_text'>상세정보 클릭</p>
              <Modal isOpen={modalOpen[0]} closeTimeoutMS={300}   onRequestClose={closeModal}>
              <img src='img/x.png' className="Exit_img  " onClick={() => closeModal(0)}></img>
              <div className='modal_wrap'>
              <div className='modal_container'>
                <div className='modal_header'>
                  <div className='modal_title'>
                    <div className='modal_title_text'>
                    Portfolio Details
                    </div>
                    </div>
                    <div className='modal_title2'><span className='kr_text  '>Project01 /</span><span className='kr_text'>&nbsp;&nbsp;수원시청</span></div>
                    <div className='modal_buttons'>
                    <a href='http://wjdtjsans0714.dothome.co.kr/'><button className='modal_button'>사이트보기</button></a>
                    <a href='https://github.com/jungsm/SuwonSicheong.git'><button className='modal_button'>깃허브보기</button></a>
                    <a href='https://github.com/jungsm/SuwonSicheong/blob/main/file/proposal.pdf'><button className='modal_button'>기획서보기</button></a>
                   
                    </div>
                </div>
                <div className='modal_main'>
                  <div className='modal_left'>
                    <div className='modal_imgbox'>
                      <img className='modal_img' src='img/modal3.png'></img>
                    </div>
                  </div>
                  <div className='modal_right'>
                    <ul className='modal_text kr_text'>
                      <li><span>구현기</span>술<text className='h5_text'> : <br/>HTML,CSS,JavaScript</text></li>
                      <li><span>작업기</span>술<text className='kr_text3'> : 3주</text></li>
                      <li><span>배포매</span>체<text className='kr_text3'> : 웹(WEB)</text></li>
                      <li><span>본인기여</span>도<text className='kr_text3'> : 총인원 1명 100%</text></li>
                      <li><span>브라우저 </span>호환성<text className='kr_text3'> : 크롬,익스플로어</text></li>
                      <li><span>페이지</span>수<text className='kr_text3'> : 메인페이지</text></li>
                      <li><span>특</span>징<text className='kr_text3'> : <br/>웹표준 ,PHP 게시판,좌우슬라이드 버튼크기 개선 <br/>날씨 API 사용</text></li>
                    </ul>
                  </div>
                </div>
              </div>
             </div>
             </Modal>
            </li>
            </SwiperSlide>
            <SwiperSlide>
            <li className="project_item">
            <img onClick={() => openModal(1)} src="img/prt2.png"></img>
            <p className='img_text kr_img_text'>상세정보 클릭</p>
            <Modal isOpen={modalOpen[1]}  closeTimeoutMS={300}  onRequestClose={() => closeModal(1)}>

            <img src='img/x.png' className="Exit_img  " onClick={() => closeModal(1)}></img>
              <div className='modal_wrap'>
              <div className='modal_container'>
                <div className='modal_header'>
                  <div className='modal_title'>
                    <div className='modal_title_text'>
                    Portfolio Details
                    </div>
                    </div>
                    <div className='modal_title2'><span className='kr_text  '>Project01 /</span><span className='kr_text'>&nbsp;&nbsp;뺏슈</span></div>
                    <div className='modal_buttons'>
                    <a href='https://bbatsue-web.vercel.app/'><button className='modal_button'>사이트보기</button></a>
                    <a href='https://github.com/jungsm/bbatsueWeb'><button className='modal_button'>깃허브보기</button></a>
                    <a href='https://github.com/jungsm/bbatsueWeb/blob/main/file/%EB%BA%8F%EC%8A%88_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EA%B8%B0%ED%9A%8D%EC%84%9C_%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95%EB%B3%B8.pdf'><button className='modal_button'>기획서보기</button></a>
                    </div>
                </div>
                <div className='modal_main'>
                  <div className='modal_left'>
                    <div className='modal_imgbox'>
                      <img className='modal_img' src='img/modal4.png'></img>
                    </div>
                  </div>
                  <div className='modal_right'>
                    <ul className='modal_text kr_text'>
                      <li><span>구현기</span>술<text className='h5_text'> : <br/>HTML5, SCSS, JS, Bootstrap, AJAX</text></li>
                      <li><span>작업기</span>술<text className='kr_text3'> : 2주</text></li>
                      <li><span>배포매</span>체<text className='kr_text3'> : 웹(WEB)</text></li>
                      <li><span>본인기여</span>도<text className='h5_text'> : 총인원 4명 25%</text></li>
                      <li><span>브라우저 </span>호환성<text className='kr_text3'> : 크롬,익스플로어</text></li>
                      <li><span>페이지</span>수<text className='kr_text3'> : 메인페이지 1개, 서브페이지 4개</text></li>
                      <li><span>특</span>징<text className='kr_text3'> : <br/>반응형, 부트스트랩 그리드 시스템 사용<br/>각자 브랜치를 나눠서 협업</text></li>
                    </ul>
                  </div>
                </div>
              </div>
             </div>
             </Modal>
            </li>
            </SwiperSlide>
            <SwiperSlide>
            <li className="project_item">
              <img onClick={() => openModal(2)} src="img/prt3.png">
              </img>
              <p className='img_text kr_img_text'>상세정보 클릭</p>
              <Modal isOpen={modalOpen[2]} closeTimeoutMS={300}  onRequestClose={() => closeModal(2)}>
              <img src='img/x.png' className="Exit_img  " onClick={() => closeModal(2)}></img>
              <div className='modal_wrap'>
              <div className='modal_container'>
                <div className='modal_header'>
                  <div className='modal_title'>
                    <div className='modal_title_text'>
                    Portfolio Details
                    </div>
                    </div>
                    <div className='modal_title2'><span className='kr_text  '>Project03 /&nbsp;&nbsp;ANBD</span></div>
                    <div className='modal_buttons'>
                    <a href='https://anbd.vercel.app/'><button className='modal_button'>사이트보기</button></a>
                    <a href='https://github.com/jungsm/team-project-ANBD'><button className='modal_button'>깃허브보기</button></a>
                    <a href='https://file.notion.so/f/s/5b5b3e1a-93e2-4401-aeb7-17a4f1749521/2%EC%A1%B0(ANBD_).pdf?id=edd53c80-771d-4d13-8468-d94321a0871d&table=block&spaceId=f2b063ab-5763-4522-82a6-f18f4aaa1c70&expirationTimestamp=1681890681161&signature=yIJ0Cn-KbZffLYDpzeq05AdKPU3_DVOLe9lT7mTV9oY&downloadName=2%EC%A1%B0%28ANBD_%29.pdf'><button className='modal_button'>기획서보기</button></a>
                    </div>
                </div>
                <div className='modal_main'>
                  <div className='modal_left'>
                    <div className='modal_imgbox'>
                      <img className='modal_img' src='img/prt3.png'></img>
                    </div>
                  </div>
                  <div className='modal_right'>
                    <ul className='modal_text kr_text'>
                      <li><span>구현기</span>술<text className='h5_text'> : <br/>React, SCSS, Node, sqlLite, Ant Design</text></li>
                      <li><span>작업기</span>술<text className='kr_text3'> : 3주</text></li>
                      <li><span>배포매</span>체<text className='kr_text3'> : 웹(WEB),모바일</text></li>
                      <li><span>본인기여</span>도<text className='kr_text'> : 총인원 4명 25%</text></li>
                      <li><span>브라우저 </span>호환성<text className='kr_text3'> : 크롬,익스플로어</text></li>
                      <li><span>페이지</span>수<text className='kr_text3'> : 메인페이지 1개, 서브페이지5개</text></li>
                      <li><span>특</span>징<text className='kr_text3'> : <br/>카카오톡,네이버 로그인 API ,카카오톡 채널 API,<br/>카카오 지도 API , 다음주소찾기 API </text></li>
                    </ul>
                  </div>
                </div>
              </div>
             </div>
             </Modal>
            </li>
            </SwiperSlide>
            <SwiperSlide>
            <li className="project_item">
              <img  onClick={() => openModal(3  )} src="img/modal6.png"></img>
              <p className='img_text kr_img_text'>상세정보 클릭</p>
            <Modal isOpen={modalOpen[3]} closeTimeoutMS={300}  onRequestClose={() => closeModal(3)}>
            <img src='img/x.png' className="Exit_img  " onClick={() => closeModal(3)}></img>
              <div className='modal_wrap'>
              <div className='modal_container'>
                <div className='modal_header'>
                  <div className='modal_title'>
                    <div className='modal_title_text'>
                    Portfolio Details
                    </div>
                    </div>
                    <div className='modal_title2'><span className='kr_text  '>Project04  /</span><span className='kr_text'>&nbsp;&nbsp;뺏슈</span></div>
                    <div className='modal_buttons'>
                    
                    
                    <a href='https://github.com/jungsm/Pportfolio'><button className='modal_button'>사이트보기</button></a>
                    <a href='https://github.com/jungsm/Pportfolio   '><button className='modal_button'>깃허브보기</button></a>
                    </div>
                </div>
                <div className='modal_main'>
                  <div className='modal_left'>
                    <div className='modal_imgbox'>
                      <img className='modal_img' src='img/modal6.png'></img>
                    </div>
                  </div>
                  <div className='modal_right'>
                    <ul className='modal_text kr_text'>
                      <li><span>구현기</span>술<text className='h5_text'> : <br/>React</text></li>
                      <li><span>작업기</span>술<text className='kr_text3'> : 2주</text></li>
                      <li><span>배포매</span>체<text className='kr_text3'> : 웹(WEB)</text></li>
                      <li><span>본인기여</span>도<text className='h5_text'> : 25%</text></li>
                      <li><span>브라우저 </span>호환성<text className='kr_text3'> : 크롬,익스플로어</text></li>
                      <li><span>페이지</span>수<text className='kr_text3'> : 메인페이지 1개, 서브페이지 4개</text></li>
                      <li><span>특</span>징<text className='kr_text3'> : <br/></text></li>
                    </ul>
                  </div>
                </div>
              </div>
             </div>
             </Modal>
             </li>
            </SwiperSlide>
            <SwiperSlide>
            <li onClick={() => openModal(4)} className="project_item">5</li>
            <p className='img_text kr_img_text'>상세정보 클릭</p>
            <Modal isOpen={modalOpen[4]}  closeTimeoutMS={300} onRequestClose={() => closeModal(4)}>
            <img src='img/x.png' className="Exit_img  " onClick={() => closeModal(4)}></img>
              <div className='modal_wrap'>
              <div className='modal_container'>
                <div className='modal_header'>
                  <div className='modal_title'>
                    <div className='modal_title_text'>
                    Portfolio Details
                    </div>
                    </div>
                    <div className='modal_title2'><span className='kr_text  '>Project01 /</span><span className='kr_text'>수원시청</span></div>
                    <div className='modal_buttons'>
                    <a><button className='modal_button'>기획서보기</button></a>
                    <a><button className='modal_button'>깃허브보기</button></a>
                    <a><button className='modal_button'>사이트보기</button></a>
                    </div>
                </div>
                <div className='modal_main'>
                  <div className='modal_left'>
                    <div className='modal_imgbox'>
                      <img className='modal_img' src='img/modal3.png'></img>
                    </div>
                  </div>
                  <div className='modal_right'>
                    <ul className='modal_text kr_text'>
                      <li><span>구현기</span>술<text className='h5_text'> : HTML,CSS,JavaScript</text></li>
                      <li><span>작업기</span>술<text className='kr_text3'> : 3주</text></li>
                      <li><span>배포매</span>체<text className='kr_text3'> : 웹(WEB)</text></li>
                      <li><span>본인기여</span>도<text className='h5_text'> : 100%</text></li>
                      <li><span>브라우저 </span>호환성<text className='kr_text3'> : 크롬,익스플로어</text></li>
                      <li><span>페이지</span>수<text className='kr_text3'> : 메인페이지</text></li>
                      <li><span>특</span>징<text className='kr_text3'> : </text></li>
                    </ul>
                  </div>
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
        <div className='mail_title2 h1_text'>포트폴리오를 봐주셔서 감사합니다</div>
      </div>
      <ul className='mail_text kr_text5'>
      <li className='mail_email'>이메일 : wjdtjsans0714@naver.com</li>
      <li className='number'>전화번호 : 010-9378-7268</li>
      </ul>
      


<div className='mail_img'>
      <img className='mail_img1' src='img/img1.png'></img>
      <img className='mail_img2' src='img/img2.png'></img>
      <img className='mail_img3' src='img/img3.png'></img>
      <img className='mail_img4' src='img/img4.png'></img>
      <img className='mail_img5' src='img/img5.png'></img>
      <img className='mail_img6' src='img/img6.png'></img>
      <img className='mail_img7' src='img/img7.png'></img>
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
