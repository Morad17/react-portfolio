import React from 'react'

import afkThumb from '../assets/images/afk-thumb.png'

const Projects = () => {
    return (
        <section className="projects-section page">
            <h1>Project History</h1>
            <div className="project row">
                <div className="p-row-1">
                    <img src={afkThumb} alt="afk-gamer"/>
                </div>
                <div className="p-row-2"></div>
                <div className="p-row-3"></div>
                <div className="p-row-4"></div>
            </div>
        </section>
    )
}

export default Projects
