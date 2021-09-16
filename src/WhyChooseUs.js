import React from 'react'
import './whychooseus.css'
import WhyChooseUsCard from './WhyChooseUsCard'
import WhyChooseCardContent from './WhyChooseCardContent'
import {isMobile} from 'react-device-detect'
import { Carousel } from 'react-responsive-carousel'

function WhyChooseUs() {
    return (
        <section className="why__choose__us__container container" id="whyChooseUs">
            <div className="why__choose__us__heading">
                <div className="main__heading">
                    Why choose us ?
                </div>
            </div>
            <div className="why__choose__us__cards">
                {
                    isMobile 
                    ? 
                        <Carousel showArrows={false} showIndicators={true} stopOnHover={true} infiniteLoop={true} autoPlay={false} showStatus={false} showThumbs={false} swipeable={true} dynamicHeight={false}>
                            {
                                WhyChooseCardContent.map((item,index) => {
                                    return <WhyChooseUsCard newClass="mobile__choose__card" key={index} heading={item.heading} content={item.content} />
                                })
                            }
                        </Carousel>
                    :
                        WhyChooseCardContent.map((item,index) => {
                            return <WhyChooseUsCard newClass="" key={index} heading={item.heading} content={item.content} />
                        })
                }
            </div>
        </section>
    )
}

export default WhyChooseUs
