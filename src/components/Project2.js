import Modal from 'react-modal';
import React, { useState } from 'react';

const Project2 = () => {
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
    <img onClick={() => openModal(1)} src="img/prt2.png"></img>
    <p className='img_text kr_img_text'>상세정보 클릭</p>
    <Modal isOpen={modalOpen[1]} closeTimeoutMS={300} onRequestClose={() => closeModal(1)}>

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
              <a href='https://bbatsue-web.vercel.app/' target="_blank"><button className='modal_button'>사이트보기</button></a>
              <a href='https://github.com/jungsm/bbatsueWeb' target="_blank"><button className='modal_button'>깃허브보기</button></a>
              <a href='https://github.com/jungsm/bbatsueWeb/blob/main/file/%EB%BA%8F%EC%8A%88_%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8_%EA%B8%B0%ED%9A%8D%EC%84%9C_%EC%B5%9C%EC%A2%85%EC%88%98%EC%A0%95%EB%B3%B8.pdf' target="_blank"><button className='modal_button'>기획서보기</button></a>
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
                <li><span>구현기</span>술<span className='h5_text kr_text3'> : HTML5, SCSS, JS, Bootstrap, AJAX</span></li>
                <li><span>작업기</span>술<span className='kr_text3'> : 2주</span></li>
                <li><span>배포매</span>체<span className='kr_text3'> : 웹(WEB),반응형</span></li>
                <li><span>본인기여</span>도<span className='kr_text3'> : 총인원 4명 25%</span></li>
                <li><span>브라우저 </span>호환성<span className='kr_text3'> : 크롬,익스플로어</span></li>
                <li><span>페이지</span>수<span className='kr_text3'> : 메인페이지 1개, 서브페이지 4개</span></li>
                <li><span>특</span>징<span className='kr_text3'> : <br />반응형, 부트스트랩 그리드 시스템 사용<br />각자 브랜치를 나눠서 협업</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </li>
  )
}
export default Project2;