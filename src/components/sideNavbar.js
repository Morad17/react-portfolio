import React from 'react'
import * as FaIcons from "react-icons/fa"

const SideNavbar = () => {
    return (
            <nav className="sidenav">
                <a href="/"><h1 className="logo">ME</h1></a>
                <ul className="sidenav-icons">
                    <li><a href="/"><FaIcons.FaHome /><p>Home</p></a></li>
                    <li><a href="/"><FaIcons.FaRegUserCircle /><p>About</p></a></li>
                    <li><a href="/"><FaIcons.FaCode /><p>Skills</p></a></li>
                    <li><a href="/"><FaIcons.FaProjectDiagram /><p>Projects</p></a></li>
                    <li><a href="/"><FaIcons.FaBloggerB /><p>Blog</p></a></li>
                    <li><a href="/"><FaIcons.FaPaperPlane /><p>Contact</p></a></li>
                </ul>
                <ul className="social-icons">
                    <li><a href="/"><FaIcons.FaGithub /></a></li>
                    <li><a href="/"><FaIcons.FaInstagram /></a></li>
                    <li><a href="/"><FaIcons.FaLinkedin /></a></li>
                </ul>
            </nav>
    )
}

export default SideNavbar
