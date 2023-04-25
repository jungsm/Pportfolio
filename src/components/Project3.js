import Modal from 'react-modal';
import React, { useState } from 'react';

const Project3 = () => {
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
    <li className="project_item">
      <img onClick={() => openModal(2)} src="img/prt3.png">
      </img>
      <p className='img_text kr_img_text'>상세정보 클릭</p>
      <Modal isOpen={modalOpen[2]} closeTimeoutMS={300} onRequestClose={() => closeModal(2)}>
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
                <a href='https://anbd.vercel.app/' target="_blank"><button className='modal_button'>사이트보기</button></a>
                <a href='https://github.com/jungsm/team-project-ANBD' target="_blank"><button className='modal_button'>깃허브보기</button></a>
                <a href='https://drive.google.com/file/d/1DzFp1u04hHfmyOE0RK894UEbAqsELZJd/view?usp=sharing' target="_blank"><button className='modal_button'>기획서보기</button></a>
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
                  <li><span>구현기</span>술<span className='h5_text kr_text3'> : React, SCSS, Node,sqlLite Ant Design</span></li>
                  <li><span>작업기</span>술<span className='kr_text3'> : 3주</span></li>
                  <li><span>배포매</span>체<span className='kr_text3'> : 웹(WEB),모바일</span></li>
                  <li><span>본인기여</span>도<span className='kr_text3'> : 총인원 4명 25%</span></li>
                  <li><span>브라우저 </span>호환성<span className='kr_text3'> : 크롬,익스플로어</span></li>
                  <li><span>페이지</span>수<span className='kr_text3'> : 메인페이지 1개, 서브페이지5개</span></li>
                  <li><span>특</span>징<span className='kr_text3'> : 카카오톡,네이버 로그인 API ,카카오톡 채널 API,카카오 지도 API , 다음주소찾기 API </span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </li>
  )
}
export default Project3;