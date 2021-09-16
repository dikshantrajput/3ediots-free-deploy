import React from 'react'

function BannerIcon({title,img,keyId}) {
    return (
        <div className="banner__icon" key={keyId}>
            <div className="banner__icon__image">
                <img src={img} alt="banner icon" />
            </div>
            <span className="banner__icon__title">{title}</span>
        </div>
    )
}

export default BannerIcon
