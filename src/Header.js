import React , { useState , useEffect }  from 'react';
import './header.css';
import logo from './assets/images/logo.png';
import img1 from './assets/images/burger.png';
import img2 from './assets/images/close_blue.png';
import img3 from './assets/images/insta_blue.png';
import img4 from './assets/images/twitter_blue.png';
import img5 from './assets/images/linkedin_blue.png';
import {Link} from 'react-router-dom';

function Header({newClass}){

    const [burger,setBurger] = useState('hide__navbar');

    const toggleMenu = (e)=>{
        if(e.target.tagName.toLowerCase() == 'a'){
            Array.from(e.target.parentElement.parentElement.children).forEach((item)=>{
                item.children[0].classList.remove('active')
            })
            e.target.classList.add('active')
        }
        if(e.target.classList.contains('right__header__mobile') || e.target.classList.contains('back__navigation__container')){
            return false
        }
        if(burger == 'hide__navbar'){
            setBurger('')
        }else{
            setBurger('hide__navbar')
        }
    }

    return (
        <>
            <header className={newClass}>
                <div className="left__header">
                    <div className="logo__container">
                        <Link to="/" style={{width:'100%',height:'100%'}} className="w-full h-full">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className="right__header">
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="list__items">
                                <a href="/#whyChooseUs" rel="noopener noreferrer">
                                    Why us?
                                </a>
                            </li>
                            {/* <li className="list__items">
                                <a href="/#values" rel="noopener noreferrer">
                                    Our Values
                                </a>
                            </li> */}
                            <li className="list__items">
                                <a href="/#technologies" rel="noopener noreferrer">
                                    Technologies
                                </a>
                            </li>
                            {/* <li className="list__items">
                                <a href="/#team" rel="noopener noreferrer">
                                    Team
                                </a>
                            </li> */}
                            <li className="list__items">
                                <a href="#casestudy" rel="noopener noreferrer">
                                    Case Study
                                </a>
                            </li>
                            {/* <li className="list__items">
                                <a href="#testimonial" rel="noopener noreferrer">
                                    Testimonials
                                </a>
                            </li> */}
                            <li className="list__items">
                                <Link to="/blogs" rel="noopener noreferrer">
                                    Blogs
                                </Link>
                            </li>
                            <li className="list__items">
                                <a href="/#contact" rel="noopener noreferrer">
                                    Contact us
                                </a>
                            </li>
                            <li className="list__items">
                                <a href="/#about" rel="noopener noreferrer">
                                    About us
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={` navbar__overlay ${burger}`} >
                    <div className={` right__header__mobile `} onClick={toggleMenu}>
                        <nav className="nav">
                            <ul className="nav__list">
                                <li className="list__items">
                                    <Link to="/" rel="noopener noreferrer">
                                        Home
                                    </Link>
                                </li>
                                <li className="list__items">
                                    <a href="/#whyChooseUs" rel="noopener noreferrer">
                                        Why us?
                                    </a>
                                </li>
                                {/* <li className="list__items">
                                    <a href="/#values" rel="noopener noreferrer">
                                        Our Values
                                    </a>
                                </li> */}
                                <li className="list__items">
                                    <a href="/#technologies" rel="noopener noreferrer">
                                        Technologies
                                    </a>
                                </li>
                                {/* <li className="list__items">
                                    <a href="/#team" rel="noopener noreferrer">
                                        Team
                                    </a>
                                </li> */}
                                <li className="list__items">
                                    <a href="#casestudy" rel="noopener noreferrer">
                                        Case Study
                                    </a>
                                </li>
                                {/* <li className="list__items">
                                    <a href="#testimonial" rel="noopener noreferrer">
                                        Testimonials
                                    </a>
                                </li> */}
                                <li className="list__items">
                                    <Link to="/blogs" rel="noopener noreferrer">
                                        Blogs
                                    </Link>
                                </li>
                                <li className="list__items">
                                    <a href="/#contact" rel="noopener noreferrer">
                                        Contact us
                                    </a>
                                </li>
                                <li className="list__items">
                                    <a href="/#about" rel="noopener noreferrer">
                                        About us
                                    </a>
                                </li>
                            </ul>
                            <div className="close__navbar" onClick={toggleMenu}>
                                <img src={img2} alt="close icon" />Cancel
                            </div>
                            <div className="social__icons__navbar">
                                <a href="https://www.linkedin.com/company/3ediots/" target="_3ediots" rel="noopener noreferrer">
                                    <img src={img5} alt="linkedin icon" />
                                </a>
                                <a href="https://www.instagram.com/3ediots._/" target="_3ediots" rel="noopener noreferrer">
                                    <img src={img3} alt="insta icon" />
                                </a>
                                <a href="https://twitter.com/3ediotsP" target="_3ediots" rel="noopener noreferrer">
                                    <img src={img4} alt="twitter icon" />
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div onClick={toggleMenu} className="hamburger">
                    <img src={img1} alt="burger" />
                </div>
            </header>
        </>
    )
}

export default Header;