import React , { useEffect } from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/images/casestudy/agile.png'
import CaseStudyCard from './CaseStudyCard'
import './casestudies.css'
import {data} from './casestudycontent'

function CaseStudyMain() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <section className="casestudy__main__container" id="casestudy">
            <div className="casestudy__banner__container">
                <div className="casestudy__main__image__container">
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
                                Still have any doubt? then contact us and discuss your project.
                            </p>
                        </div>
                        <div className="casestudy__button">
                            <Link to="/#contactus" className="submit__btn">
                                <span>Contact Us</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="casestudy__cards__container">
                {
                    data?.map((item,index)=>{
                        if(item?.id % 2 == 0){
                            return <CaseStudyCard
                                        id={item?.id}
                                        image={item?.image} 
                                        title={item?.title}
                                        tagline={item?.tagline}
                                        logo={item?.logo}
                                        maxLogoWidth={item?.maxLogoWidth}
                                        mobile_icon={item.mobile_icon}
                                        tech_icons={item?.tech_icons} 
                                        key={index} 
                                        addClass="odd__casestudy__card" 
                                    />
                        }else{
                            return <CaseStudyCard 
                                        id={item?.id}
                                        image={item?.image} 
                                        title={item?.title}
                                        tagline={item?.tagline}
                                        logo={item?.logo}
                                        maxLogoWidth={item?.maxLogoWidth}
                                        mobile_icon={item.mobile_icon}
                                        tech_icons={item?.tech_icons} 
                                        key={index}
                                        addClass=""
                                    />
                        }
                    })
                }
            </div>
        </section>
    )
}

export default CaseStudyMain
