import React from 'react'

function ProjectCard({cls,title,img}) {
    return (
        <div className={`project__card ${cls}`}>
            <img src={img} alt="project image" />
            <p className="project__title">
                {title}
            </p>
        </div>
    )
}

export default ProjectCard
