import React from 'react'

import profilePic from '../assets/images/profile-pic.png'

const About = () => {
    return (
        <section id="about-section" className="about-section page">
                <div className="box-wrapper-1"></div>
                <div className="box-wrapper-2"></div>
            <div className="about-text">
                
                <h1 className="main-title">About Me</h1>
                <p className="main-text">
                    Hello there. I am Morad an aspiring full stack web developer. 
                    I have a passion for delivering unique, creative and thoughtfull 
                    projects. My strengths lie in my creativity and unique way of thinking. 
                    Through the Full Stack Web Diploma, and Self-learing I have gained the tools 
                    to make anything that I can envision.
                </p>
            </div>
            <div className="about-image">
                <img className="profile-pic" src={ profilePic }/>
            </div>
            
        </section>
    )
}

export default About
