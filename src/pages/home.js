import React from 'react'
import SideNavbar from '../components/sideNavbar'
import Hero from '../components/hero'
import About from "../components/about";
import Blog from "../components/blog";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Contact from "../components/contact";

const Home = () => {
    return (
        <div id="home" className="home">
            <div className="">
                <SideNavbar />
            </div>
            <div className="content">
                <Hero />
                {/* <hr className="divider"/> */}
                <About />
                {/* <hr className="divider"/> */}
                <Skills />
            </div>
        </div>
    )
}

export default Home
