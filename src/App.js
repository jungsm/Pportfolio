import img from "./main.png";
import img2 from "./img.png";

import './App.css';

function App() {
  return (
    <section id="wrap">
       <img className="wrap_img" src={img2}></img>
    <section id='header'>
      <section className='main_banner'>
        <div className='main_banner_left'>
          <img src={img} className="banner_img"></img>
        </div>
        <div className='main_banner_right'>
          <div className='right_textbox'>
            <p>Grow Your Business Using Our Services</p>
            <div className="main_button_box">
            <button>Notion</button>
            <button>Git Hub</button>
            <button>이력서</button>
            </div>
          </div>
        </div>
      </section>
      


    </section>
    </section>
  );
}

export default App;
