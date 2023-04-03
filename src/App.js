import { Animated } from 'react-native';
import React from 'react';
import './App.css';
class SomeComponent extends React.Component {
  state = {
    animation: new Animated.Value(0)
  }
  // ...
}
function App() {
  return (
    <section id="wrap">
      <div className='banner_img'>
      <div className='container'>
      <section className='main_banner'>
        <div className='main_banner_left'>
          <div className=''>
        {/*   <img className='img_banner' src="img/main.png"/> */}
          </div>
        </div>
        <div className='main_banner_right'>
          <div className='right_textbox'>
            <p className='title'>해와 달처럼 조화<p/> </p>
            <div className="main_button_box">
            <a href='https://mango2.notion.site/008cc17e31554d1cbf85c6c993dcd561'><button>Notion</button></a>
            <a href='https://github.com/jungsm?tab=repositories'><button>Git Hub</button></a>
            <a href=''><button>이력서</button></a>
            </div>
        </div>
        </div>  
    </section>
    <section>
    </section>
    </div>
    <img src='img/img.png'className='shape01' ></img>
    <img src='img/banner_shape02.png'className='shape02' ></img>
    <img src='img/banner_shape03.png'className='shape03' ></img>
    <img src='img/banner_shape04.png'className='shape04' ></img>
    <img src='img/banner_shape05.png'className='shape05' ></img>
    <img src='img/banner_shape06.png'className='shape06' ></img>
    <img src='img/banner_shape07.png'className='shape07' ></img>
    </div>
    <div className='b'>
    </div>
    </section>
  );
}

export default App;
