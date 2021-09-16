import React , { useState , useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {authentication, db} from '../firebase.js';
import './admin.css';
import axios from 'axios';
import env from 'react-dotenv'

function Admin(){
    const history = useHistory();
    
    const [responses,setResponses] = useState([])
    const [user,setUser] = useState({});
    
    useEffect(()=>{
        authentication.onAuthStateChanged((user)=>{
            if(!user){
                history.push('/login')
            }else{
                setUser(user)
            }
        })
        axios.get(`${process.env.REACT_APP_API_URL}/api/contact/get`)
        .then((response)=>{
            setResponses(response.data)
        })
        // db.collection('responses').orderBy('date','desc')
        // .onSnapshot((snapshot)=>{
        //     var messages = []
        //     snapshot.forEach((snap)=>{
        //         const data = {...snap.data(), "key":snap.id}
        //         messages.push(data)
        //     })
        //     setResponses(messages)
        // },(error)=>{
        //     console.log(error)
        // })
    },[responses])

    return (
        <>
            <section className="admin__container">
                <h3 className="admin__heading">Responses from contact us form</h3>
                <table className="admin__table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Message</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                responses.map((item)=>{
                                    return (
                                        <tr key={item.key}>
                                            <td>{item.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1) : 'Null'}</td>
                                            <td>{item.email ? item.email : 'Null'}</td>
                                            <td>{item.mobile ? item.mobile : 'Null'}</td>
                                            <td style={{whiteSpace:'pre-wrap'}}>{item.message ? item.message  : 'Null'}</td>
                                            <td>{item.date ? new Date(item.date).toLocaleDateString() + ' ' + new Date(item.date).toLocaleTimeString() : 'Null'}</td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </section>
        </>
    )
} 

export default Admin