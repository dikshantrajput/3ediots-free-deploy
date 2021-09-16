import React from 'react';
import './footer.css';
import img1 from './assets/images/mail.png';
import img2 from './assets/images/location.png';
import img3 from './assets/images/linkedin.png';
import img4 from './assets/images/twitter.png';
import img5 from './assets/images/instagram.png';

function Footer(){
    return (
        <>
            <footer id="about">
                <div className="footer__row1">
                    <div className="footer__column1">
                        <div className="footer__heading">
                            About us
                        </div>
                        <div className="footer__content">
                            {/* <span className="motto">
                                "Pursue for excellence, success will chase you"
                            </span> */}
                            3E Digital Solutions is a leading services company with a focus on providing customized IT solutions for businesses and contribute to the digital India mission. Our passionate team, innovative approach, state of art technology and relentless customer focus makes us superior to the existing competition.
                        </div>
                    </div>
                    <div className="footer__column2">
                        <div className="footer__heading">
                            Locate us
                        </div>
                        <div className="footer__content">
                            <div className="footer__locate__row1">
                                <img alt="location icon" src={img2} />
                                <div className="location__text">
                                    <p>Sandeep Vihar, Whitefield</p>
                                    <p>Bangalore, 560067 </p>
                                </div>
                            </div>
                            <div className="footer__locate__row2">
                                <img alt="email icon" src={img1} />
                                <div className="location__text">
                                    <a href="mailto:contact@3edigisolutions.com" rel="noopener noreferrer">
                                        <p>contact@3edigisolutions.com</p>
                                    </a>
                                </div>
                            </div>
                            {/* <div className="footer__locate__row3">
                                <img alt="phone icon" src={img4}/>
                                <div className="location__text">
                                    <a href="tel:+">
                                        <p>1234567890</p>
                                    </a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="footer__column3">
                        <div className="footer__heading">
                            Follow us
                        </div>
                        <div className="footer__content">
                            <a href="https://www.linkedin.com/company/3ediots/" target="_blank" rel="noopener noreferrer">
                                <img alt="linkedin icon" src={img3} />
                            </a>
                            <a href="https://twitter.com/3ediotsP" target="_blank" rel="noopener noreferrer">
                                <img alt="twitter icon" src={img4} />
                            </a>
                            <a href="https://www.instagram.com/3ediots._/" target="_blank" rel="noopener noreferrer">
                                <img alt="insta icon" src={img5} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__row2">
                    copyright <span>&copy;</span>  2020, 3E Digital Solutions <span className="line">|</span>  <span className="arr"> All rights reserved</span>
                </div>                
            </footer>
        </>
    )
}

export default Footer;