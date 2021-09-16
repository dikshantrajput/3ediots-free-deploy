import React from 'react';
import './team.css';
import TeamCard from './TeamCard.js';
import img1 from './assets/images/team/product_manager.png';
import img2 from './assets/images/team/project_manager.png';
import img3 from './assets/images/team/technical_architect.png';
import img4 from './assets/images/team/business_analyst.png';
import img5 from './assets/images/team/research_team.png';
import img6 from './assets/images/team/quality_assurance.png';
import img7 from './assets/images/team/ui_ux.png';
import img8 from './assets/images/team/android_dev.png';
import img9 from './assets/images/team/ios_dev.png';
import img10 from './assets/images/team/website.png';
import img11 from './assets/images/team/backend.png';
import img12 from './assets/images/team/cloud_expert.png';

function Teams(){
    return (
        <>
            <section className="team__container" id="team">
                <div className="team__heading">
                    <div className="main__heading">
                        Our team
                    </div>
                </div>
                <div className="team__cards">
                    <TeamCard img={img1} title="Product Manager" alt="team image"/>
                    <TeamCard img={img2} title="Project Manager" alt="team image"/>
                    <TeamCard img={img3} title="Technical Architect" alt="team image"/>
                    <TeamCard img={img4} title="Bussiness Analyst" alt="team image"/>
                    <TeamCard img={img5} title="Research Team" alt="team image"/>
                    <TeamCard img={img6} title="Quality Assurance Team" alt="team image"/>
                    <TeamCard img={img7} title="UI/UX Designers" alt="team image"/>
                    <TeamCard img={img8} title="Android Developers" alt="team image"/>
                    <TeamCard img={img9} title="iOS Developers" alt="team image"/>
                    <TeamCard img={img10} title="Website Developers" alt="team image"/>
                    <TeamCard img={img11} title="Backend server developers" alt="team image"/>
                    <TeamCard img={img12} title="Cloud server experts" alt="team image"/>
                </div>
            </section>
        </>
    )
}

export default Teams;