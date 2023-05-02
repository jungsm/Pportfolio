import React, { Component } from 'react'
import Skill from "../js/skills"
 function SkillPage() {
    const skills = [
        {
          name: "HTML",
          value: "90%",
    
        },
        {
          name: "CSS",
          value: "90%"
        },
        {
          name: "Javascript",
          value: "90%"
        },
        {
          name: "REACT",
          value: "80%"
        },
        {
          name: "Jquery",
          value: "70%"
        },
        {
          name: "Vue",
          value: "60%"
        },
        {
          name: "Figma",
          value: "80%"
        },
      ];
    
    return (
        <section className="section1">
        <div className='skillbar container'>
          {skills.map((x, index) => {
            return <Skill name={x.name} value={x.value} />;
          })}
        </div>

      </section>
    )
  }
  export default SkillPage
