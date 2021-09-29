import React from 'react'

import afkThumb from '../assets/images/afk-thumb.png'
import * as FaIcons from "react-icons/fa"
import * as DiIcons from "react-icons/di"

const Projects = () => {
    return (
        <section id="projects-section" className="projects-section page">
            <div className="p-heading-row">
                <h1 className="project-heading">Project</h1>
                <h1 className="project-heading">History</h1>
            </div>
            <div className="project-row">
                <h2>Latest Projects</h2>
                <div className="project-card-row">
                    
                    <div className="project-card-1"> 
                        <img src={afkThumb} alt="afk-gamer"/>
                        <h3>E-Commerce Shop</h3>
                        <p>An E-Commerce store, selling merchandise like, clothes and accesories. Made with Django and Python, and Javascript funstionality</p>
                        <div className="project-icon">
                            <DiIcons.DiDjango />
                            <FaIcons.FaPython />
                            <DiIcons.DiJavascript1 />
                        </div>
                        <div className="code-links">
                            <a href="#" className="button-1">Code</a>
                            <a href="#" className="button-1">Project</a>
                        </div>   
                    </div>
                    <div className="project-card-2">
                        <img src={afkThumb} alt="afk-gamer"/>
                        <h3>React Blog</h3>
                        <p>An E-Commerce store, selling merchandise like, clothes and accesories. Made with Django and Python, and Javascript funstionality</p>
                        <div className="project-icon">
                            <FaIcons.FaReact />
                            <DiIcons.DiJavascript1 />
                            <DiIcons.DiMongodb />
                        </div>
                        <div className="code-links">
                            <a href="#" className="button-1">Code</a>
                            <a href="#" className="button-1">Project</a>
                        </div>
                    </div>
                    <div className="project-card-3">
                    <img src={afkThumb} alt="afk-gamer"/>
                        <h3>Travel App</h3>
                        <p>An E-Commerce store, selling merchandise like, clothes and accesories. Made with Django and Python, and Javascript funstionality</p>
                        <div className="project-icon">
                            <FaIcons.FaReact />
                            <DiIcons.DiJavascript1 />
                            <DiIcons.DiMongodb />
                        </div>
                        <div className="code-links">
                            <a href="#" className="button-1">Code</a>
                            <a href="#" className="button-1">Project</a>
                        </div>
                    </div>
                    <div className="project-card-4"></div>
                </div>
            </div>
        </section>
    )
}

export default Projects
