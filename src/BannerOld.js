import React ,{ useState } from 'react';
import './banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from './assets/images/banner_images/android.png';
import img2 from './assets/images/banner_images/ios.png';
import img3 from './assets/images/banner_images/website.png';
import img4 from './assets/images/banner_images/creative_designing.png';
import img5 from './assets/images/banner_images/marketing.png';
import img6 from './assets/images/banner_images/cloud_computing.png';
import img7 from './assets/images/banner_images/iot.png';
import img8 from './assets/images/banner_images/data_science.png';
import img9 from './assets/images/banner_images/machine_learning.png';
import img10 from './assets/images/p_phone.png';
import img11 from './assets/images/p_mail.png';

function Banner(){

    const [techContent, setTechContent] = useState("android apps")

    function test(index){
        switch(index){
            case 0:
                setTechContent("Android apps")
                break;
            case 1:
                setTechContent("iOS apps")
                break; 
            case 2:
                setTechContent("Websites")
                break; 
            case 3:
                setTechContent("Creative designing")
                break;
            // case 4:
            //     setTechContent("Digital marketing")
            //     break; 
            case 4:
                setTechContent("Cloud computing")
                break; 
            // case 6:
            //     setTechContent("I.O.T")
            //     break;
            // case 7:
            //     setTechContent("Data science")
            //     break; 
            // case 8:
            //     setTechContent("Machine learning")
            //     break; 
        }
    }

    return (
        <>
            <section className="banner__container">
                <div className="banner__group">
                    <div className="banner__left__container">
                        <div className="banner__heading">
                            <div className="banner__main__heading">
                                Your digital partner
                            </div>
                            <div className="banner__secondary__heading">
                                We take care of all your digital <br></br>needs like : 
                            </div>
                            <div className="tech__heading">
                                <span>{techContent}</span>
                            </div>
                        </div>
                    </div>
                    <div className="banner__right__container">
                        <div className="banner__carousel">
                        <Carousel showArrows={false} showStatus={false} autoPlay={true} infiniteLoop={true} showThumbs={false} onChange={test}>
                                <div className="slider__image__container" key="1">
                                    <img src={img1} />
                                </div>
                                <div className="slider__image__container" key="2">
                                    <img src={img2} />
                                </div>
                                <div className="slider__image__container" key="3">
                                    <img src={img3} />
                                </div>
                                <div className="slider__image__container" key="4">
                                    <img src={img4} />
                                </div>
                                {/* <div>
                                    <img src={img5} />
                                </div> */}
                                <div className="slider__image__container" key="5">
                                    <img src={img6} />
                                </div>
                                {/*<div>
                                    <img src={img7} />
                                </div>
                                <div>
                                    <img src={img8} />
                                </div>
                                <div>
                                    <img src={img9} />
                                </div> */}
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="banner__footer">
                    <a href="#contact" className="banner__btn">Contact us</a>
                </div>
            </section>
            {/* <div className="floating__contact">
                <div className="floating__row">
                    <div className="floating__icon ">
                        <img src={img10} alt="phone icon" />
                    </div>
                    <div className="floating__text">
                        <a href="tel:+">
                            1234567890
                        </a>
                    </div>
                </div>
                <div className="floating__row">
                    <div className="floating__icon mail__p__icon">
                        <img src={img11} alt="phone icon" />
                    </div>
                    <div className="floating__text">
                        <a href="mailto:contact@3edigisolutions.com" rel="noopener noreferrer">
                            contact@3edigisolutions.com
                        </a>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Banner;