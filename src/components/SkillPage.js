import React, { Component } from 'react' 
 function SkillPage() {
  
    
    return (
        <section className="section1">
          <span className='h3_text'>Skill</span>
      <div className='skill'>
        <div className='skill_box'>
        <img className='skill_img' src='img/html.png'/>
        <span className='h2_title'>Html</span>
        </div>
        <div className='skill_box'>
        <img className='skill_img' src='img/css.png'/>
        <span className='h2_title'>CSS</span>
        </div>
        <div className='skill_box'>
        <img className='skill_img' src='img/js.png'/>
        <span className='h2_title'>JavaScript</span>
        </div>
        <div className='skill_box'>
        <img className='skill_img' src='img/jq.png'/>
        <span className='h2_title'>JQuery</span>
        </div>
        <div className='skill_box'>
        <img className='skill_img' src='img/React.png'/>
        <span className='h2_title'>React</span>
        </div>
        
      </div>

      </section>
    )
  }
  export default SkillPage
