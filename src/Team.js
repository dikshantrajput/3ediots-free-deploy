import React from 'react'
import './team.css'
import img from './assets/images/team/team.png'

function Team() {
    return (
        <section className="team__container" id="team">
            <div className="team__heading">
                <div className="main__heading">
                    Our Team
                </div>
                <div className="secondary__heading">
                    We have a fully experienced team for all your digital needs
                </div>
            </div>
            <div className="team__image__container">
                <img src={img} alt="team image" />
            </div>
        </section>
    )
}

export default Team
