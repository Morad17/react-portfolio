import React from 'react'

import afkThumb from '../assets/images/afk-thumb.png';
import premierLeague from '../assets/images/premier-league.png';
import travelInfo from '../assets/images/travel-info-thumb.jpg';

import * as FaIcons from "react-icons/fa"
import * as DiIcons from "react-icons/di"

const Projects = () => {
    return (
        <section id="projects-section" className="projects-section page">
            <div className="project-row">
                <h2 className="project-heading">Latest Projects</h2>
                <div className="project-card-row">
                <div className="project-card-1">
                        <h3 className="project-header">Travel Maps Guide</h3>
                        <img src={travelInfo} alt="aldente"/>
                        <div className="project-details">
                            
                            <div className="project-icon">
                                <FaIcons.FaReact />
                                <DiIcons.DiJavascript1 />
                                <DiIcons.DiCss3 />
                            </div>
                            <div className="code-links">
                                <a target="_blank" href="https://github.com/Morad17/react-travel-info" className="project-button"  rel="noopener noreferrer">Code</a>
                                <a target="_blank" href="https://react-travel-adviser-project.netlify.app/" className="project-button"  rel="noopener noreferrer">Project</a>
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
                                <a href="https://github.com/Morad17/ms4" className="project-button" target="_blank" rel="noopener noreferrer">Code</a>
                                <a href="http://afk-gamer.herokuapp.com/" className="project-button" target="_blank" rel="noopener noreferrer">Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card-3">
                        <h3 className="project-header">Premier League DB</h3>
                        <img src={premierLeague} alt="premier-league"/>
                        <div className="project-details">
                            
                            <div className="project-icon">
                                <DiIcons.DiMongodb />
                                <FaIcons.FaPython />
                                <DiIcons.DiJavascript1 />
                            </div>
                            <div className="code-links">
                                <a href="https://github.com/Morad17/premier-league-ms3" className="project-button" target="_blank" rel="noopener noreferrer">Code</a>
                                <a href="https://premier-league-ms3.herokuapp.com/" className="project-button" target="_blank" rel="noopener noreferrer">Project</a>
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
