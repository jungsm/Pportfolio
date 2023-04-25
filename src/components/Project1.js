import Modal from 'react-modal';
import React, { useState } from 'react';

const SlideBox = () => {
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
      <img onClick={() => openModal(0)} src="img/prt1.png" />
      <p className='img_text kr_img_text'>상세정보 클릭</p>
      <Modal isOpen={modalOpen[0]} closeTimeoutMS={300} onRequestClose={closeModal}>
        <img src='img/x.png' className="Exit_img  " onClick={() => closeModal(0)} />
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
                <a href='http://wjdtjsans0714.dothome.co.kr/' target="_blank"><button className='modal_button'>사이트보기</button></a>
                <a href='https://github.com/jungsm/SuwonSicheong.git' target="_blank"><button className='modal_button'>깃허브보기</button></a>
                <a href='https://github.com/jungsm/SuwonSicheong/blob/main/file/proposal.pdf' target="_blank"><button className='modal_button'>기획서보기</button></a>

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
                  <li><span>구현기</span>술<span className='h5_text kr_text3'> : HTML,CSS,JavaScript</span></li>
                  <li><span>작업기</span>술<span className='kr_text3'> : 3주</span></li>
                  <li><span>배포매</span>체<span className='kr_text3'> : 웹(WEB)</span></li>
                  <li><span>본인기여</span>도<span className='kr_text3'> : 총인원 1명 100%</span></li>
                  <li><span>브라우저 </span>호환성<span className='kr_text3'> : 크롬,익스플로어</span></li>
                  <li><span>페이지</span>수<span className='kr_text3'> : 메인페이지</span></li>
                  <li><span>특</span>징<span className='kr_text3'> : <br />웹표준 ,PHP 게시판,좌우슬라이드 버튼크기 개선 <br />날씨 API 사용</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </li>
  )
}
export default SlideBox;