import React from 'react';

function TeamCard(props){
    return (
        <>
            <div className="team__card">
                <div className="team__icon">
                    <img src={`${props.img}`} alt="team image"/>
                </div>
                <div className="team__title">
                    {props.title}
                </div>
            </div>
        </>
    )
}

export default TeamCard