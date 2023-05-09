
import './rest.css';
import './App.css';
import './font/font.css'
import 'swiper/css';
import ProjectPage from './components/ProjectPage';
import AboutPage from "./components/AboutPage"
import SkillPage from './components/SkillPage';
import MainPage from "./components/MainPage";
import MailPage from './components/MailPage';
import FooterPage from './components/FooterPage';

function App() {
  return (
    <>
   
        <section id="wrap">
        <MainPage/>
         <AboutPage/>
        <ProjectPage />
         <SkillPage/>
          <MailPage/>
        <FooterPage/>
        </section>
   

  </>
  )
}
export default App;
