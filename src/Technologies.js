import React , {useEffect , useState } from 'react';
import TechnologyCard from './TechnologyCard.js';
import TechnologiesRailItem from './TechnologiesRailItem';
import {batch1, batch2, batch3, batch4, batch5, batch6} from './TechnologyImages.js';
import './technologies.css';


function Technologies(){
    
    const changeTechnologyCards = (key)=>{
        selectTechnologyCards(key)
        let newItemsArray = [...railItems]
        newItemsArray.map((item,index)=>{
            if(index === key){
                item.status = 'active'
            }else{
                item.status = ''
            }
        })
        setRailItems(newItemsArray)
    }

    const selectTechnologyCards = (key)=>{
        switch(key){
            case 0 :
                setActiveTechCards(batch1)
                break;
            case 1:
                setActiveTechCards(batch2)
                break;
            case 2 :
                setActiveTechCards(batch3)
                break;
            case 3:
                setActiveTechCards(batch4)
                break;
            case 4 :
                setActiveTechCards(batch5)
                break;
            case 5:
                setActiveTechCards(batch6)
                break;
            default:
                setActiveTechCards(batch1)
        }
    }

    const [railItems,setRailItems] = useState([
        {
            status:'active',
            title:'Mobile Technologies',
            callbackFn:changeTechnologyCards,
        },
        {
            status:'',
            title:'UI/UX',
            callbackFn:changeTechnologyCards,
        },
        {
            status:'',
            title:'Web & Hybrid',
            callbackFn:changeTechnologyCards,
        },
        {
            status:'',
            title:'Backend & Database',
            callbackFn:changeTechnologyCards,
        },
        {
            status:'',
            title:'Cloud and Push Notification',
            callbackFn:changeTechnologyCards,
        },
        {
            status:'',
            title:'Server',
            callbackFn:changeTechnologyCards,
        }
    ])

    const [activeTechCards,setActiveTechCards] = useState(batch1)
    
    useEffect(() => {
    }, [railItems])
    
    return (
        <>
            <section className="technologies__container" id="technologies">
                <div className="technologies__heading">
                    <div className="main__heading">
                        Technologies we use
                    </div>
                    <div className="secondary__heading">
                        to make your products best
                    </div>
                </div>
                <div className="technologies__rail__container">
                    <ul className="technologies__rail__list">
                        {
                            railItems.map(({status,title,callbackFn},index)=>{
                                return <TechnologiesRailItem key={index} status={status} title={title} onClick={()=>callbackFn(index)}/>
                            })
                        }
                    </ul>    
                </div> 
                <div className="technologies__cards">
                    {
                        activeTechCards.map(({img,title},index)=>{
                            return <TechnologyCard img={img} key={index} title={title} />
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Technologies;