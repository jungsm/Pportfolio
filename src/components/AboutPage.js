import React, { Component } from 'react'
import { useState, useEffect } from 'react';
function AboutPage() {
const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return (
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
                <p className="kr_text">이름: 정선문</p>
                <p className="kr_text">전화번호: 010-9378-7268</p>
                <p className="kr_text">생년월일: 2001.07.14</p>
                <p className="kr_text">거주지: 경기도 수원시 메탄2동 </p>
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
    )
  }
export default AboutPage;