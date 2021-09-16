import React from 'react'
import './banner.css'
import BannerSlide from './BannerSlide'
import bannerImg1 from './assets/images/banner_images_new/b1.png'
import bannerImg2 from './assets/images/banner_images_new/b2.png'
import bannerImg3 from './assets/images/banner_images_new/b3.png'
import bannerImg4 from './assets/images/banner_images_new/b4.png'
import {bannerIconsSet1, bannerIconsSet2, bannerIconsSet3, bannerIconsSet4} from './BannerIconSets'
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function Banner() {
    return (
        <Carousel showArrows={false} stopOnHover={true} showIndicators={false} infiniteLoop={true} autoPlay={true} showStatus={false} showThumbs={false} swipeable={false} dynamicHeight={false}>
            <BannerSlide 
                key="100"
                keyId="0"
                bannerClass="banner__container1"
                title={<span>DIGITAL<br/> SOLUTION PROVIDER</span>}
                contentp1={<p className="banner__para">Transforming the way businesses work, <b>DIGITALLY!</b></p>}
                contentp2=""
                bannerImg={bannerImg1}
                bannerIcons={bannerIconsSet1}
                bannerIconsClass="banner__icons__set1"
            />
            <BannerSlide 
                key="101"
                keyId="1"
                bannerClass="banner__container2"
                title="PRODUCT MANAGEMENT"
                contentp1={<p className="banner__para">Product manager surpasses all odds to make a <b>Digital Model</b> for a Business, with a <b>brilliant UI/UX</b> and <b>technology</b>, making the product a huge success.</p>}
                contentp2=""
                bannerImg={bannerImg2}
                bannerIcons={bannerIconsSet2}
                bannerIconsClass="banner__icons__set2"
            />
            <BannerSlide 
                key="102"
                keyId="2"
                bannerClass="banner__container3"
                title="AGILE"
                contentp1={<p className="banner__para">At 3E Digital Solutions, we adopt the Agile working model. It is a step by step, <b>time saving</b> and cost <b>effective</b> way to build your product.</p>}
                contentp2=""
                bannerImg={bannerImg3}
                bannerIcons={bannerIconsSet3}
                bannerIconsClass="banner__icons__set3"
            />
            <BannerSlide 
                key="103"
                keyId="3"
                bannerClass="banner__container4"
                title="PARTNERSHIP"
                contentp1={<p className="banner__para">If your project idea interests us, we can <b>invest upto 40%</b> in your idea, which can be highly beneficial to both the parties and build a sustained relationship.</p>}
                contentp2=""
                bannerImg={bannerImg4}
                bannerIcons={bannerIconsSet4}
                bannerIconsClass="banner__icons__set4"
            />
        </Carousel>
    )
}

export default Banner
