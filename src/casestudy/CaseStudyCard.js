import React from 'react'
import { Link } from 'react-router-dom'
import './casestudycard.css'

function CaseStudyCard({addClass,id,image,title,tagline,logo,maxLogoWidth,mobile_icon,tech_icons}) {
    return (
        <div className={`casestudy__card__container ${addClass}`} key={id}>
            <div className="casestudy__card__image__container">
                <Link to="#">
                    <div className="casestudy__card__logo__container">
                        <img src={logo} className="casestudy__card__logo" alt="logo" style={{maxWidth:maxLogoWidth}} />
                    </div>
                    <div className="casestudy__card__image__overlay"></div>
                    <img src={image} className="casestudy__card__image" alt="name" height="250" width="500" />
                    <div className="casestudy__card__mobile__container">
                        <img src={mobile_icon} className="casestudy__card__mobile" alt="mobile" />
                    </div>
                </Link>
            </div>
            <div className="casestudy__card__content__container">
                <div className="casestudy__card__title">
                    {title}
                </div>
                <div className="casestudy__card__tagline">
                    <p>{tagline}</p>
                </div>
                <div className="casestudy__card__technology__icons">
                    {
                        tech_icons?.map((item,index)=>{
                            return <img src={item} alt="tech icon" key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CaseStudyCard
