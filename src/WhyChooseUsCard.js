import React from 'react'

function WhyChooseUsCard({heading,content,newClass}) {
    return (
        <div className={`${newClass} why__choose__us__card`}>
            <div className="why__choose__us__card__heading">
                {heading}
            </div>
            <div className="why__choose__us__card__content">
                <p>
                    {content}
                </p>
            </div>
            
        </div>
    )
}

export default WhyChooseUsCard
