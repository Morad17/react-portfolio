import profilePic from '../assets/images/profile-pic.png'

const About = () => {
    return (
        <section id="about-section" className="about-section page">
            <div className="about-row">
                <div className="box-wrapper-1"></div>
                <div className="box-wrapper-2"></div>
                <div className="about-text">
                    <h1 className="main-title">About Me</h1>
                    <div id="about-image-mob" className="about-image">
                    <img className="profile-pic" src={ profilePic } alt="Profile"/>
                    </div>

                    <p className="main-text">
                        Hello there. I am Morad an aspiring full stack web developer. 
                        I have a passion for delivering unique, creative and thoughtfull 
                        projects. My strengths lie in my creativity and unique way of thinking. 
                        Through the Full Stack Web Diploma, and Self-learing I have gained the tools 
                        to make anything that I can envision.
                    </p>
                </div>
                <div id="about-image" className="about-image">
                    <img className="profile-pic" src={ profilePic } alt="Profile"/>
                </div>
            </div>
                <div className="tech-row">
                        <div className="current-tech-row">
                            <div className="heading">
                                <h2>Current</h2>
                                <h2>Stack</h2>
                            </div>
                                <img src="https://www.crossshoresolutions.com/wp-content/uploads/2020/04/mern_icon.png" alt="Mern Stack"/>
                        </div>
                        <div className="other-tech-row">
                            <div className="heading">
                                <h2>Other</h2>
                                <h2>Stack</h2>
                            </div>
                            <div className="tech-icon">
                                <img src="https://img.icons8.com/windows/160/000000/php-logo.png" alt="PHP"/>
                                <p>PHP</p>
                            </div>
                            <div className="tech-icon">
                                <img src="https://img.icons8.com/fluency/96/000000/python.png" alt="PYTHON"/>
                                <p>PYTHON</p>
                            </div>
                            <div className="tech-icon">
                                <img src="https://img.icons8.com/ios/100/000000/django.png" alt="DJANGO"/>
                                <p>DJANGO</p>
                            </div>
                            <div className="tech-icon">
                                <img src="https://img.icons8.com/ios/100/000000/mysql-logo.png" alt="MySql"/>
                                <p>MySql</p>
                            </div>
                        </div>
                </div>
        </section>
    )
}

export default About
