
import * as FaIcons from "react-icons/fa"

const Contact = () => {
    return (
        <section id="contact-section"className="contact-section page">
             <div class="contact-form">
                 <form onsubmit="#">
                <h3>Contact</h3>
                <h5>Fill out this form and I will get back to you!</h5>

                
                    <div className="contact-divider">
                        <div className="contact-details">
                            <div class="contact-row">
                                <label for="name">Name</label>
                                <input type="text" name="name" class="form-control" id="fullname" required/>
                            </div>
                            <div class="contact-row">
                                <label for="emailaddress">Email Address</label>
                                <input type="text" name="emailaddress" class="form-control" id="emailaddress" required/>
                            </div>
                        </div>
                        <div className="contact-message">
                            <div class="contact-row">
                                <label for="message">Message</label>
                                <textarea rows="5" name="message" class="form-control" id="message" required></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="button">Send</button>
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
