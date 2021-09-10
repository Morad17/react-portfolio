import React from 'react'
import ProgressBar from './progressBar'

const Skills = () => {
    return (
        <div className="skills-section page">
            <div className="">
                <div className="row">
                    <div>
                        <h1 className="main-title">Skills & Experience</h1>
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
                    </div>
                </div>
            </div>
            <div className="row timeline">

            </div>
        </div>
    )
}

export default Skills
