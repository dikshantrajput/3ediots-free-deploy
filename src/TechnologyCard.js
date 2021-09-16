import React from 'react';

function TechnologyCard(props){
    return (
        <>
            <div className="technology__card" key={props.title}>
                <div className="technology__icon">
                    <img src={`${props.img}`} alt="technology image"/>
                </div>
                <div className="technology__title">
                    {props.title}
                </div>
            </div>
        </>
    )
}

export default TechnologyCard;