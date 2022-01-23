import React from 'react'

import afkThumb from '../assets/images/afk-thumb.png'
import * as FaIcons from "react-icons/fa"
import * as DiIcons from "react-icons/di"

const Projects = () => {
    return (
        <section id="projects-section" className="projects-section page">
            <div className="project-row">
                <h2 className="project-heading">Latest Projects</h2>
                <div className="project-card-row">
                    <div className="project-card-1">
                        <h3 className="project-header">AFK Gamer Store</h3>
                        <img src={afkThumb} alt="afk-gamer"/>
                        <div className="project-details">
                            
                            <div className="project-icon">
                                <DiIcons.DiDjango />
                                <FaIcons.FaPython />
                                <DiIcons.DiJavascript1 />
                            </div>
                            <div className="code-links">
                                <a href="#" className="project-button">Code</a>
                                <a href="#" className="project-button">Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card-2">
                        <h3 className="project-header">AFK Gamer Store</h3>
                        <img src={afkThumb} alt="afk-gamer"/>
                        <div className="project-details">
                            
                            <div className="project-icon">
                                <DiIcons.DiDjango />
                                <FaIcons.FaPython />
                                <DiIcons.DiJavascript1 />
                            </div>
                            <div className="code-links">
                                <a href="#" className="project-button">Code</a>
                                <a href="#" className="project-button">Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card-3">
                        <h3 className="project-header">AFK Gamer Store</h3>
                        <img src={afkThumb} alt="afk-gamer"/>
                        <div className="project-details">
                            
                            <div className="project-icon">
                                <DiIcons.DiDjango />
                                <FaIcons.FaPython />
                                <DiIcons.DiJavascript1 />
                            </div>
                            <div className="code-links">
                                <a href="#" className="project-button">Code</a>
                                <a href="#" className="project-button">Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card-4"></div>
                </div>
            </div>
        </section>
    )
}

export default Projects
