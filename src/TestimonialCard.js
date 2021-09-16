import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function TestimonialCard(props){
    return (
        <>
            <div className="testimonial__card">
                <div className="testimonial__content">
                    <div className="left__quote">
                        <FontAwesomeIcon icon={faQuoteLeft} color="var(--blue)"/>
                    </div>
                    <p>{props.content}</p>
                    <div className="right__quote">
                        <FontAwesomeIcon icon={faQuoteRight} color="var(--blue)"/>
                    </div>
                </div>
                <div className="testimonial__footer">
                    <span style={{"color":"var(--darkBlue)"}}>- {props.name}</span>
                    <p className="testimonial__role">{props.role}</p>
                </div>
            </div>
        </>
    )
}

export default TestimonialCard