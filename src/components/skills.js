import React from 'react'
import ProgressBar from './progressBar'
import Timeline from './timeline'
import TimelineData from './timelineData'
import * as FaIcons from "react-icons/fa"

import mongoDb from "../assets/images/mongoDb.png"

const Skills = () => {
    return (
        <section id="skills-section" className="skills-section page">
            <div className="">
                <div className="row">
                    <div>
                        <h1 className="main-title">Skills &</h1>
                        <h1 className="main-title">Experience</h1>
                        <p className="main-text">
                            From learing to write the first html code, to creating
                            complex react and django e-commerce projects, I have always
                            been keen to always learn new languages. My skills lie in designing a unique and 
                            visually aesthetic project and applying the right applications, to achieve the
                            perfect user experience
                        </p>
                        <p className="main-text">
                            From graduating with a Full Stack Web Diploma, I have move to learing
                            new librarys, predominantly React. Whilst having Front-End and Back-End
                            skills, I focus more on Front End.
                        </p>
                        <p className="main-text">
                            You can view my <a href="https://www.linkedin.com/in/morad-elbouchikhi/">Linkedin</a> profile
                            for more details or <a href="#">Contact Me</a> though this page.
                        </p>
                    </div>
                </div>
                <div className="row skills-row">
                    <div className="">
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
                        <h2>Tech Stacks Used</h2>
                        <div className="tech-row">
                            <div className="tech-icon">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/css3.png"/>
                                <p>CSS</p>
                            </div>
                            <div className="tech-icon">
                                <img src="https://img.icons8.com/ios/50/ffffff/javascript--v1.png"/>
                                <p>JAVASCRIPT</p>
                            </div>
                            <div className="tech-icon">
                                <img src="https://img.icons8.com/ios/50/ffffff/react-native--v1.png"/>
                                <p>REACT</p>
                            </div>
                        </div>
                        <div className="tech-row">
                            <div className="tech-icon">
                                <img src={mongoDb}/>
                                <p>MONGODB</p>
                            </div>
                            <div className="tech-icon">
                                <img src="https://img.icons8.com/color/48/4a90e2/python--v1.png"/>
                                <p>PYTHON</p>
                            </div>
                            <div className="tech-icon">
                                <img src="https://img.icons8.com/ios/50/ffffff/django.png"/>
                                <p>DJANGO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="timeline">
                <h2 className="timeline-heading">Timeline</h2>
                <div className="timeline-container">
                    {
                        TimelineData.map((data, index) =>(
                            <Timeline data={data} key={index} />
                            
                            )
                        )
                    }
                </div>
                <hr />
            </div>
        </section>
    )
}

export default Skills
