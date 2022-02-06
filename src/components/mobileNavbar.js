import React, { useEffect, useState } from 'react';
import * as FaIcons from "react-icons/fa"

const MobileNavbar = () => {

    // const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() =>{
        const menuBtn = document.querySelector('.menu-btn');
        const mobileDropdown = document.querySelector('.mobilenav-dropdown');
        let menuOpen = false;

        menuBtn.addEventListener('click', () => {
            if(!menuOpen){
                menuBtn.classList.add('open');
                menuOpen = true
                mobileDropdown.style.marginTop = "0"
            } else {
                menuBtn.classList.remove('open');
                menuOpen = false
                mobileDropdown.style.marginTop = "-40vh"
            }
        })
    })
   

  return (
    <nav className="mobilenav">
            <div className="menu-btn">
                <div className="menu-btn-burger">

                </div>
            </div>
            <ul className="mobilenav-dropdown">
                <hr />
                <li><a href="#home"><FaIcons.FaHome /></a><p>Home</p></li>
                <hr />
                <li><a href="#about-section"><FaIcons.FaRegUserCircle /></a><p>About</p></li>
                <hr />
                <li><a href="#skills-section"><FaIcons.FaCode /></a><p>Skills</p></li>
                <hr />
                <li><a href="#projects-section"><FaIcons.FaProjectDiagram /></a><p>Projects</p></li>
                <hr />
                <li><a href="#blog-section"><FaIcons.FaBloggerB /></a><p>Blog</p></li>
                <hr />
                <li><a href="#contact-section"><FaIcons.FaPaperPlane /></a><p>Contact</p></li>
                <hr />
            </ul>
        </nav>
  )
};

export default MobileNavbar;
