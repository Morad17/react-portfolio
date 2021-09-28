import React from 'react'

import afkThumb from '../assets/images/afk-thumb.png'

const Projects = () => {
    return (
        <section id="projects-section" className="projects-section page">
            <h1 className="project-heading">Project History</h1>
            <div className="project-row">
                <div className="p-row-1">
                    <img src={afkThumb} alt="afk-gamer"/>
                    <h3>E-Commerce Shop</h3>
                    <p>An E-Commerce store, selling merchandise like, clothes and accesories. Made with Django and Python, and Javascript funstionality</p>
                </div>
                <div className="p-row-2">
                    <img src={afkThumb} alt="afk-gamer"/>
                    <h3>E-Commerce Shop</h3>
                    <p>An E-Commerce store, selling merchandise like, clothes and accesories. Made with Django and Python, and Javascript funstionality</p>
                </div>
                <div className="p-row-3">
                <img src={afkThumb} alt="afk-gamer"/>
                    <h3>E-Commerce Shop</h3>
                    <p>An E-Commerce store, selling merchandise like, clothes and accesories. Made with Django and Python, and Javascript funstionality</p>
                </div>
                <div className="p-row-4"></div>
            </div>
        </section>
    )
}

export default Projects
