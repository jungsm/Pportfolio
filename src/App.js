import React from "react";
import './rest.css'
import './App.css';
import './font/font.css'
import {useMediaQuery} from 'react-responsive';
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
  
  return (
    <>
    <PC>
    <section id="wrap">
     
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
      <section className='main_banner'>
        <div className='main_banner_left'>
        {/*   <img className='img_banner' src="img/main.png"/> */}
        </div>
        <div className='main_banner_right'>
          <div className='right_textbox'>
            <p className='h1_title'>해와 달처럼<br></br> 조화로운 코드를<p/> </p>
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
