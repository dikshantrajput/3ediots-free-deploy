import React, { useRef, useLayoutEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import './movetotop.css'

function MoveToTop() {
    const moveToTopRef = useRef(null)
    
    const moveToTopHandler = ()=>{
        window.scrollTo(0,0)
    }

    const toggleMoveToTop = ()=>{
        if(window.scrollY > 600){
            moveToTopRef.current.classList.remove('hide')
        }else{
            moveToTopRef.current.classList.add('hide')
        }
    }

    useLayoutEffect(() => {
        window.addEventListener('scroll',toggleMoveToTop)
        return () => {
            window.removeEventListener('scroll',(toggleMoveToTop))
        }
    }, [])
    return (
        <div className="move__to__top__container hide" ref={moveToTopRef} onClick={moveToTopHandler}>
            <span className="move__to__top__btn">
                <FontAwesomeIcon icon={faArrowUp} color="var(--blue)" />
            </span>
        </div>
    )
}

export default MoveToTop
