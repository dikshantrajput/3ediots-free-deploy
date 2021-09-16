import React , {useState , useRef ,useEffect } from 'react';
import { db } from './firebase.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function BlogComment(props){

    const commentBox = useRef()
    const comment = useRef()

    const blogId = props.id

    const [personName,setPersonName] = useState('')
    const [personComment,setPersonComment] = useState('')
    const [personNameError,setPersonNameError] = useState('')
    const [personCommentError,setPersonCommentError] = useState('')
    const [commentClass, setCommentClass] = useState('hide')
    const [commentCount, setCommentCount] = useState(0)

    useEffect(() => {
        if(blogId){
            axios.get(`${process.env.REACT_APP_API_URL}/api/post/get/${props.id}`)
            .then((response)=>{
                setCommentCount(response.data.comments.length)
            })
        }
    }, [blogId])
    // if(props.blogId){
    //     db.collection('comments')
    //     .where('blogId','==',blogId)
    //     .onSnapshot((snapshot)=>{
    //         let comments = []
    //         snapshot.forEach(snap => {
    //             comments.push({...snap.data()})
    //         });
    //         setCommentCount(comments.length)
    //     })
    // }
    const validateData = ()=>{
        if(personName == ''){
            setPersonNameError('Your name can\'t be empty')
            return false
        }else if(personComment == ''){
            setPersonCommentError('This field can\'t be empty')
            return false
        }else{
            return true
        }
    }

    const commentBlog = (e) =>{
        e.target.disabled="disabled"
        if(!validateData()){
            return false
        }
        const data = {comment:personComment,name:personName}
        axios.patch(`${process.env.REACT_APP_API_URL}/api/post/action/comment/${blogId}`,data)
        .then((response)=>{
            console.log(response)
            alert('Thnak you for commenting')
            comment.current.style.color="blue"
            commentBox.current.classList.add('hide')
            setCommentCount(response.data.post.comments.length)
        })
        .catch(err=>{
            alert(err)
        })
        // db.collection('comments')
        // .doc()
        // .set(data)
        // .then(()=>{
        //     comment.current.style.color="blue"
        //     commentBox.current.classList.add('hide')
        // })
    }

    const hideCommentBox = ()=>{
        setCommentClass('hide')
    }

    const showCommentBox = ()=>{
        setCommentClass('')
    }

    return (
        <>
            <button className="comment__btn"  ref={comment} onClick={showCommentBox}>
                <FontAwesomeIcon icon={faComment}/>
                <span>Comment ({commentCount})</span>
            </button>
            <div className={`blog__comment__wrapper ${commentClass}`} ref={commentBox}>
                <div className="blog__comment__container">
                    <div className="blog__title">Comment</div>
                    <div className="form__group">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" value={personName} onChange={(e)=>setPersonName(e.target.value)} className="form__input"/>
                        {
                            personNameError ? <span className="error">{personNameError}</span> : null
                        }
                    </div>
                    <div className="form__group">
                        <label htmlFor="comment">Comment:</label>
                        <textarea type="text" id="comment" value={personComment} onChange={(e)=>setPersonComment(e.target.value)} className="form__textarea"></textarea>
                        {
                            personCommentError ? <span className="error">{personCommentError}</span> : null
                        }
                    </div>
                    <div className="form__group comment__btns">
                        <button className="comment__submit__btn" onClick={commentBlog}>Comment</button>
                        <button className="comment__cancel__btn" onClick={hideCommentBox}>Cancel</button>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default BlogComment;