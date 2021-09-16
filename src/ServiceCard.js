import React from 'react';

function ServiceCard(props){
    return (
        <>
            <div className={`service__card ${props.class} `}>
                <div className="service__icon">
                    <div className="circle"></div>
                    <img src={props.img} alt="service icon"/>
                </div>
                <div className="service__body">
                    <div className="service__title">
                        <span>{props.title}</span>
                    </div>
                    <div className="service__content">
                        <span>{props.content}</span>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default ServiceCard;