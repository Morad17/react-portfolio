import React from 'react'

const Contact = () => {
    return (
        <section id="contact-section"className="contact-section page">
             <div class="contact-form">
                <h3>Contact</h3>
                <h5>Fill out this form and I will get back to you!</h5>

                <form onsubmit="#">
                    <div class="contact-row">
                        <label for="name">Name</label>
                        <input type="text" name="name" class="form-control" id="fullname" required/>
                    </div>
                    <div class="contact-row">
                        <label for="emailaddress">Email Address</label>
                        <input type="text" name="emailaddress" class="form-control" id="emailaddress" required/>
                    </div>
                    <div class="contact-row">
                        <label for="message">Message</label>
                        <textarea rows="5" name="message" class="form-control" id="message" required></textarea>
                    </div>
                    <button type="submit" class="button">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
