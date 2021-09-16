import React , { useEffect } from 'react';
import './testimonial.css';
import TestimonialCard from './TestimonialCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { BrowserView,MobileView,isMobile,isBrowser } from "react-device-detect";
import TestimonialContents from './TestimonialContent';

function Testimonial(){
    useEffect(()=>{
        isMobile ? document.querySelector('.carousel__container').remove() : document.querySelector('.carousel__container__mobile').remove()
    },[])
    return (
        <>
            <section className="testimonials__container" id="testimonial">
                <div className="testimonials__heading">
                    <div className="main__heading">
                        Testimonials
                    </div>
                    <div className="secondary__heading">
                        customer's response from our previous projects
                    </div>
                </div>
                <div className="testimonials__cards">
                    <Carousel showArrows={false} showStatus={false} key="019283" infiniteLoop={true} autoPlay={true} showThumbs={false} className="carousel__container__mobile">
                        {
                            TestimonialContents.map((item,index)=>{
                                return (
                                    <>
                                        <div className="testimonial__group mobile" key={index}>
                                            <TestimonialCard content={item.content} key={++index} name={item.name} role={item.role} />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </Carousel>
                    <Carousel showArrows={false}  key="019282" infiniteLoop={true} autoPlay={true} showStatus={false} showThumbs={false} className="carousel__container">
                        <div className="testimonial__group" key="200" >
                            <TestimonialCard key="10" content={TestimonialContents[0].content} name={TestimonialContents[0].name} role={TestimonialContents[0].role} />
                            <TestimonialCard key="20" content={TestimonialContents[1].content} name={TestimonialContents[1].name} role={TestimonialContents[1].role}  />
                        </div>
                        <div className="testimonial__group" key="400">
                            <TestimonialCard key="30" content={TestimonialContents[2].content} name={TestimonialContents[2].name} role={TestimonialContents[2].role}  />
                            <TestimonialCard key="40" content={TestimonialContents[3].content} name={TestimonialContents[3].name} role={TestimonialContents[3].role}  />
                        </div>
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default Testimonial;