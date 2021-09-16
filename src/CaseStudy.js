import React from 'react'
import img from './assets/images/casestudy/casestudy.png'
import './casestudy.css'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function CaseStudy() {
    return (
        <section className="casestudy__container" id="casestudy">
            <div className="casestudy__image__container">
                <img className="casestudy__image" src={img} alt="case study" />
            </div>
            <div className="casestudy__content__container">
                <div className="casestudy__heading">
                    <div className="main__heading">
                        Case Study
                    </div>
                    <div className="main__secondary__heading">
                        Every solution has its own story.
                    </div>
                    <div className="secondary__heading">
                        <p>
                            We follow agile methodology to develop your solution budget friendly, fast with high quality.
                        </p>
                        <p>
                            Sounds exciting! Check out our case studies to know more about our work.
                        </p>
                    </div>
                    <div className="casestudy__button">
                        <Link to="/casestudies" className="submit__btn">
                            <span>Go to Case Studies</span>
                            <FontAwesomeIcon icon={faChevronRight} ></FontAwesomeIcon>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudy
