import React from 'react'
import SideNavbar from '../components/sideNavbar'
import Hero from '../pages/hero'
import About from "../pages/about";
import Blog from "../pages/blog";
import Projects from "../pages/projects";
import Skills from "../pages/skills";
import Contact from "../pages/contact";
import MobileNavbar from '../components/mobileNavbar';

const Home = () => {
    return (
        <div id="home" className="home">
            <div className="">
                <SideNavbar />
                <MobileNavbar className="mobilenav-div"/>
            </div>
            <div className="content">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Blog />
                <Contact />
            </div>
        </div>
    )
}

export default Home
