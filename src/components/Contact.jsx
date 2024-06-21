import React from "react";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-main">
            <img src="./Assets/Images/cura.png" alt="Left" className="contact-image-left" />
            <div className="contact-container">
                <h1 className="contact-title">Contact Us</h1>
                <section className="contact-info">
                    <article className="contact-info-item">
                        <FaInstagram className="contact-icon" />
                        <p className="contact-info-text">
                            Instagram: <a href="https://www.instagram.com/your_username" target="_blank" rel="noreferrer">your_username</a>
                        </p>
                    </article>
                    <article className="contact-info-item">
                        <FaEnvelope className="contact-icon" />
                        <p className="contact-info-text">
                            Email: <a href="mailto:hemera.tim@gmail.com" target="_blank" rel="noreferrer">hemera.tim@gmail.com</a>
                        </p>
                    </article>
                    <article className="contact-info-item">
                        <FaPhone className="contact-icon" />
                        <p className="contact-info-text" >
                            Kontakt Telefon (Marina): <a href="tel:+1-555-555-1234" target="_blank" rel="noreferrer">+381 69 1997 123</a>
                        </p>
                    </article>
                    <article className="contact-info-item">
                        <FaPhone className="contact-icon" />
                        <p className="contact-info-text" >
                            Kontakt Telefon (Kristina): <a href="tel:+1-555-555-1234" target="_blank" rel="noreferrer">+381 61 1793 177</a>
                        </p>
                    </article>
                </section>
            </div>
            <img src="./Assets/Images/lobanja.png" alt="Right" className="contact-image-right" />
        </div>
    )
}

export default Contact;