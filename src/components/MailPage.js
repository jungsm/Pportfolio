import React, { Component } from 'react'

function MailPage() {
  const handleCopyClipBoard = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
      alert('클립보드에 복사되었습니다.');
    } catch (error) {
      alert('클립보드 복사에 실패하였습니다.');
    }
  };
    return (
        <section className="mail">
        <div className='container'>
          <div className='mail_title'>
            <div className='mail_title1 sub_title'>CONTACT ME</div>
            <div className='mail_title2 h1_text'>저의 포트폴리오를 봐주셔서 감사합니다</div>
          </div>
          <ul className='mail_text kr_text5'>
            <li className='mail_email' onClick={() => handleCopyClipBoard('wjdtjsans0714@naver.com')}>이메일 : wjdtjsans0714@naver.com&nbsp;&nbsp;&nbsp;<button className='text_copy'>복사</button></li>
            <li className='number' onClick={() => handleCopyClipBoard('01093787268')}>전화번호 : 010-9378-7268</li>
          </ul>



          <div className='mail_img'>
          <div>
         <img className='mail_img1' src='img/img1.png'/>
            <img className='mail_img2' src='img/img2.png'/>
            <img className='mail_img3' src='img/img3.png'/>
            <img className='mail_img4' src='img/img4.png'/>
            <img className='mail_img5' src='img/img5.png'/>
            <img className='mail_img6' src='img/img6.png'/>
            <img className='mail_img7' src='img/img7.png'/>
  </div>
          </div>
        </div>
      </section>
    )
  }
  export default MailPage;
