import React from 'react'
import ProgressBar from '../components/progressBar'

const Skills = () => {
    return (
        <section id="skills-section" className="skills-section">
            <div className="progress-row">
                <h1 className="main-title">Skills &</h1>
                <h1 className="main-title">Experience</h1>
                <p className="main-text main-text-1">
                    From learing to write the first html code, to creating
                    complex react and django e-commerce projects, I have always
                    been keen to always learn new languages. My skills lie in designing a unique and 
                    visually aesthetic project and applying the right applications, to achieve the
                    perfect user experience.Whilst having Front-End and Back-End skills, I focus more 
                    on Front End. As of 2021 my focus is mainly on React Libraries.
                </p>
                <p className="main-text">
                    You can view my <a href="https://www.linkedin.com/in/morad-elbouchikhi/">Linkedin</a> profile
                    for more details or <a href="#">Contact Me</a> though this page.
                </p>
                <div className="skill-bar">
                    <div className="progress-group">
                        <span>Css</span>
                        <ProgressBar value={95} max={100}/>
                    </div>
                    <div className="progress-group">
                        <span>Javascript</span>
                        <ProgressBar value={85} max={100}/>
                    </div>
                    <div className="progress-group">
                        <span>React Js</span>
                        <ProgressBar value={75} max={100}/>
                    </div>
                    <div className="progress-group">
                        <span>Python</span>
                        <ProgressBar value={60} max={100}/>
                    </div>
                    <div className="progress-group">
                        <span>Django</span>
                        <ProgressBar value={60} max={100}/>
                    </div>
            </div>
            </div>
            <div className="timeline-row">
                <div id="card-1" className="timeline-card">
                    <h3 className="title">
                        International Business Degree
                    </h3>
                    <p className="date">
                        2014 - 2018
                    </p>
                    <div className="description">
                        Finished Internatinal Business Management Degree in
                        Anlia Ruskin University
                    </div>
                </div>
                <div id="card-2" className="timeline-card">
                    <h3 className="title">
                        Full Stack Web Diploma
                    </h3>
                    <p className="date">
                       2019 - 2021
                    </p>
                    <div className="description">
                         Completed Diploma in Full Stack Web development, accredited by
                        Edinburgh University. 
                    </div>
                </div>
                <div id="card-3" className="timeline-card">
                    <h3 className="title">
                        First Large Project
                    </h3>
                    <p className="date">
                       2021
                    </p>
                    <div className="description">
                        Created First large-scale project, an Ecommerce store
                        Using Python and Django, called <a href="http://afk-gamer-herokuapp.com/">AFK Gamer</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
