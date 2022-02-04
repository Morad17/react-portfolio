
import * as FaIcons from "react-icons/fa"

const Contact = () => {
    return (
        <section id="contact-section"className="contact-section page">
            
            <div className="contact-form">
                <form onSubmit="#">
                    <h3>Contact</h3>
                    <h5>Fill out this form and I will get back to you!</h5>
                    <div className="contact-divider">
                        <div className="contact-details">
                            <div className="contact-row">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" className="form-control" id="fullname" required/>
                            </div>
                            <div className="contact-row">
                                <label htmlFor="emailaddress">Email Address</label>
                                <input type="text" name="emailaddress" className="form-control" id="emailaddress" required/>
                            </div>
                        </div>
                        <div className="contact-message">
                            <div className="contact-row">
                                <label htmlFor="message">Message</label>
                                <textarea rows="5" name="message" className="form-control" id="message" required></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="button">Send</button>
                </form>
            </div>
            <footer className="footer">
                <div className="social-links">
                    <a href="https://github.com/Morad17"><FaIcons.FaGithub /></a>
                    <a href="http://instagram.com/moradelbou"><FaIcons.FaInstagram /></a>
                    <a href="http://linkedin.com/in/morad-elbouchikhi"><FaIcons.FaLinkedin /></a>
                </div>
                <div className="details">
                    <p><span>©</span>Morad Elbouchikhi 2022</p>
                </div>
            </footer>   
        </section>
    )
}

export default Contact
