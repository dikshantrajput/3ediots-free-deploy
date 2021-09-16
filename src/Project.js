import React, {useLayoutEffect, useRef} from 'react'
import './project.css'
import ProjectCard from './ProjectCard'
import img1 from './assets/images/projects/p1.png'
import img2 from './assets/images/projects/p2.png'
import img3 from './assets/images/projects/p3.png'
import img4 from './assets/images/projects/p4.png'

function Project() {

    const projectRef = useRef(null)

    const animateOnScroll = (projectTop=0)=>{
        const windowTop = window.scrollY
        if(projectTop < windowTop)
        {
            projectRef.current.classList.add('animate__project__section')
        }   
    }
    useLayoutEffect(() => {
        const projectTop = projectRef.current.getBoundingClientRect().top - 200
        window.addEventListener('scroll',()=>animateOnScroll(projectTop))
        return () => {
            window.removeEventListener('scroll',animateOnScroll)
        };
    }, [])
    return (
        <section className="project__container" id="projects" ref={projectRef}>
            <div className="project__heading">
                <div className="main__heading">
                    Our previous projects
                </div>
            </div>
            <div className="project__cards">
                <ProjectCard title="Location Tracking App" img={img1}  cls="project__card1" />
                <ProjectCard title="Online game Application" img={img2}  cls="project__card2"/>
                <ProjectCard title="E-commerce Application" img={img3} cls="project__card3"/>
                <ProjectCard title="Learning Management System" img={img4} cls="project__card4"/>
            </div>
        </section>
    )
}

export default Project
