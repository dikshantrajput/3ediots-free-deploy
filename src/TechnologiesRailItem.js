import React from 'react'

function TechnologiesRailItem({title,status,onClick}) {
    return (
        <li className={`technologies__rail__item ${status}`} onClick={onClick}>
            {title}
        </li>
    )
}

export default TechnologiesRailItem
