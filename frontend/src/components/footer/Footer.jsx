import React from 'react';
import './Footer.css'; // Create a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <p className="footer-heading">I am open to work</p>
                    <p className="footer-text">
                    I’m currently accepting new projects. Schedule a free consultation to discuss how we can work together

                    </p>
                </div>
                <div className="footer-section">
                    <h2 className="footer-title">Let's Collab.</h2>
                    <div className='flex'>
                        <ul className="footer-list">
                            <li className="footer-item bold">Service</li>
                            <li className="footer-item">Front End Development</li>
                            <li className="footer-item">Back End development</li>
                            <li className="footer-item">Full Stack</li>
                        </ul>
                        <ul className="footer-list">
                            <li className="footer-item bold">Connect</li>
                            <li className="footer-item"><a href="https://www.linkedin.com/in/ahmad-touseef-996788205/" className="footer-link">LinkedIn</a></li>
                        </ul>
                        <ul className="footer-list">
                            <li className="footer-item bold">Get in touch</li>
                            <li className="footer-item"><a href="mailto:Hi@expoadriana.com" className="footer-link">ahmad.ravian47@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
                <p className="footer-copyright">
                    &copy; Copyright 2024, Ahmad Touseef. All rights reserved.
                </p>

        </footer>
    );
};

export default Footer;
