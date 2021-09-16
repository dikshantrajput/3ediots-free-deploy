import React , { useState } from 'react';
import { db } from './firebase.js';
import './contact.css';
import img1 from './assets/images/contact.png';
import axios from 'axios';

function Contact(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    const [message,setMessage] = useState('');
    const [hide,setHide] = useState('hide');

    const submitForm = (e)=>{
        e.preventDefault()
        const data = {name,email,mobile,message}
        axios.post(`${process.env.REACT_APP_API_URL}/api/contact/upload`,data)
        .then((response)=>{
            console.log(response)
            setHide('')
            setTimeout(() => {
                setHide('hide')
            },1500)
        })
        .catch((err)=>{
            console.log(err)
            alert('There was an error sending your message. Please mail us at contact@3edigisolutions.com')
        })
        // db.collection('responses')
        // .doc()
        // .set(data)
        // .then(()=>{
        //     setHide('')
        //     setTimeout(() => {
        //         setHide('hide')
        //     },1500)
        // })
        // .catch((err)=>{
        //     alert('There was an error sending your message. Please mail us at contact@3edigisolutions.com')
        // })
        setName('')
        setMessage('')
        setEmail('')
        setMobile('')
    }
    return (
        <>
            <section className="contact__container" id="contact">
                <div className="contact__left__container">
                    <form method="" onSubmit={submitForm} autoComplete="off">
                        <input className="form__control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
                        <input className="form__control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
                        <input className="form__control" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Phone Number" />
                        <textarea className="form__control textarea" value={message} placeholder="Message" onChange={(e)=>setMessage(e.target.value)}></textarea>
                        <button type="submit" className="submit__btn">Submit</button>
                    </form>
                </div>
                <div className="contact__right__container">
                    <div className="contact__heading">
                        <div className="main__heading">
                            Get in touch
                        </div>
                        <div className="secondary__heading">
                            available for you 24x7
                        </div>
                    </div>
                    <div className="contact__icon">
                        <img src={img1} alt="contact icon"/>
                    </div>
                </div>
            </section>
            <div className={`thanks__message ${hide}`}>
                <div className="thanks__content">
                    Thank You for contacting us
                </div>
            </div>
        </>
    )
}

export default Contact;