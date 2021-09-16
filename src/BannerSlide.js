import React from 'react'
import BannerIcon from './BannerIcon'

function BannerSlide({keyId,bannerClass,title,contentp1,contentp2,bannerImg,bannerIcons,bannerIconsClass}) {
    return (
        <section className={`banner__container ${bannerClass}`} key={keyId} id="home">
            <div className="banner__content">
                <div className="left__container">
                    <div className="main__heading">
                        {title}
                    </div>
                    {contentp1}
                    {contentp2}
                </div>
                <div className="right__container">
                    <img src={bannerImg} alt="banner image" />
                </div>
            </div>
            <div className={`banner__icons ${bannerIconsClass}`}>
                {
                    bannerIcons.map((item,index)=>{
                        return  <BannerIcon keyId={index} title={item.title} img={item.img} />
                    })
                }
            </div>
            </section>
    )
}

export default BannerSlide
