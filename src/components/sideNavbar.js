import React from 'react'
import * as FaIcons from "react-icons/fa"

const SideNavbar = () => {
    return (
            <nav className="sidenav">
                <ul className="sidenav-icons">
                    <li><a href="#home"><FaIcons.FaHome /></a><p>Home</p></li>
                    <li><a href="#about-section"><FaIcons.FaRegUserCircle /></a><p>About</p></li>
                    <li><a href="#skills-section"><FaIcons.FaCode /></a><p>Skills</p></li>
                    <li><a href="#projects-section"><FaIcons.FaProjectDiagram /></a><p>Projects</p></li>
                    {/* <li><a href="#blog-section"><FaIcons.FaBloggerB /></a><p>Blog</p></li> */}
                    <li><a href="#contact-section"><FaIcons.FaPaperPlane /></a><p>Contact</p></li>
                </ul>
            </nav>
    )
}

export default SideNavbar
