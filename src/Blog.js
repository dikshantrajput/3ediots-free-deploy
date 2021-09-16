import React , { useEffect , useState , useRef } from 'react';
import './blog.css';
import { useLocation , useParams } from 'react-router-dom'; 
import img1 from './assets/images/blog/blog_bg.png';
import img2 from './assets/images/blog/blog_text.png';
import img3 from './assets/images/share.png';
import RecentBlogCard from './RecentBlogCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import BlogComment from './BlogComment.js';
import axios from 'axios';
import {Link} from 'react-router-dom';
import CommentCard from './CommentCard.js';
import { isMobile } from 'react-device-detect';

function Blog(){

    const location = useLocation()

    const blogId = useParams()

    const likeButton = useRef()
    const test = useRef()

    const [blogs, setBlogs] = useState([])
    const [comingSoon, setComingSoon] = useState(true)
    const [allBlogs, setAllBlogs] = useState([])
    const [blogSelected, setBlogSelected] = useState({})
    const [blogLikes, setBlogLikes] = useState(0)
    const [blogComments, setBlogComments] = useState(0)
    const [blogsCount, setBlogsCount] = useState(0)
    
    const [loading,setLoading] = useState(true)
    const [showMore,setShowMore] = useState(false)
    const selectBlogById = ()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/api/post/get/${blogId.blogId}`)
        .then((response)=>{
            setBlogSelected(response.data)
            setBlogLikes(response.data.likes)
            setBlogComments(response.data.comments.length)
            setLoading(false)
        })
        // db.collection('blogs')
        // .doc(blogId.blogId)
        // .get()
        // .then((snapshot)=>{
        //     setBlogSelected({...snapshot.data()})
        //     setBlogLikes(snapshot.data().likes)
        // })
    }

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/api/post/get`)
            .then((response)=>{
                setBlogsCount(response.data.length)
                if(response.data.length == 0){
                    setComingSoon(true)
                }else{
                    setComingSoon(false)
                    setAllBlogs(response.data)
                    setBlogs(response.data.slice(0,10))
                }
            })
            if(comingSoon == false){
                if(blogId.blogId){
                    selectBlogById()
                }else{
                    axios.get(`${process.env.REACT_APP_API_URL}/api/post/get`)
                    .then((response)=>{
                        if(response.data.length > 0){
                            setBlogSelected(response.data[0])
                            setBlogLikes(response.data[0].likes)
                            setBlogComments(response.data[0].comments.length)
                            setLoading(false)
                        }else{
                            alert('No Blogs Found')
                        }
                    })
                }
            }
    },[blogs])
    // useEffect(() => {
    //     if(blogId.blogId){
    //         selectBlogById()
    //     }
    //     db.collection('blogs').orderBy('date','desc').limit(10)
    //     .onSnapshot((snapshot)=>{
    //         const blogsCollection = []
    //         snapshot.forEach((snap)=>{
    //             blogsCollection.push({...snap.data(),'key':snap.id})
    //         })
    //         setBlogs(blogsCollection);
    //         setLoading(false)
    //     })
    // }, [])

    // 
    // }    

    const shareBlog = async ()=>{
        const shareData = {
            title:'3Ediot Blog',
            text:blogs[0]?.title,
            url:window.location.href
        }
        if(navigator.canShare && isMobile){
            try{
                await navigator.share(shareData)
                .then(()=>{
                    console.log("done")
                })
            }catch(err){
                alert(err)
            }
        }else{
            var textarea = document.createElement('textarea')
            textarea.value = window.location.href
            document.body.appendChild(textarea)
            textarea.select()
            try{
                var isCopied = document.execCommand('copy')
                isCopied ? alert('Url coppied to clipboard') : alert('error sharing blog') 
            }catch(err){
                alert(err)
            }
            textarea.remove()
        }
    }

    const likeBlog = ()=>{
        likeButton.current.style.color="red"
        likeButton.current.classList.add("active")
        setTimeout(() => {
            likeButton.current.classList.remove("active")
        }, 500);
        // if(blogId.blogId){
        //     db.collection('blogs')
        //     .doc(blogId.blogId)
        //     .get()
        //     .then((snapshot)=>{
        //         var no_of_likes = snapshot.data().likes
        //         db.collection('blogs')
        //         .doc(blogId.blogId)
        //         .update({likes:++no_of_likes})
        //         .then(()=>{
        //             setBlogLikes(no_of_likes)
        //         })
        //     })    
        // }
        axios.patch(`${process.env.REACT_APP_API_URL}/api/post/action/like/${blogSelected._id}`)
        .then((response)=>{
            setBlogLikes(response.data.post.likes)
        })
    }

    const showMoreBlogs = (e)=>{
        if(e.target.classList.contains('more')){
            setShowMore(true)
            e.target.innerHTML = 'Show Less'
            e.target.classList.replace('more','less')
            setBlogs(allBlogs)
        }else{
            setShowMore(false)
            e.target.innerHTML = 'Show More'
            e.target.classList.replace('less','more')
            setBlogs(allBlogs.slice(0,10))
        }
    }


    return (
        <section className="blog__container">
            {
                comingSoon ? <div className="coming__soon__container"><h1>COMING SOON</h1><Link to="/">Home</Link></div> : null
            }
            {
                loading 
                ?
                    <div className="loading">
                        <span className="bubbles bubble1"></span>
                        <span className="bubbles bubble2"></span>
                        <span className="bubbles bubble3"></span>
                    </div>
                :
                    null
            }
            <div className="blog__header">
                <div className="blog__header__image">
                    <img src={img1} alt="background image"/>
                </div>
                <div className="blog__header__text">
                    <img src={img2} alt="blog text" />
                </div>
            </div>
            <div className="blog__content__container">
                <div className="left__container">
                    <div className="blog__image__container">
                        <img src={blogSelected?.image} alt="blog image" className="blog__image"/>
                    </div>
                    <div className="blog__date__container">
                        <span className="blog__date">{blogSelected?.date ? new Date(blogSelected?.date).toLocaleDateString() : new Date(blogs[0]?.date).toLocaleDateString() }</span>
                        <img onClick={shareBlog} src={img3} alt="share image" />
                    </div>
                    <div className="blog__title__container">
                        <p className="blog__title" style={{wordBreak:"break-word"}}>{blogSelected?.title}</p>
                    </div>
                    <div className="blog__content">
                        <p style={{whiteSpace:"pre-wrap",wordBreak:"break-word"}}>
                            {blogSelected?.content}
                        </p>
                    </div>
                    <div className="blog__footer">
                        <div className="blog__writter__name">
                            <span>Written by - </span>
                            <span style={{whiteSpace:"pre-wrap",wordBreak:"break-word"}} className="name">{  blogSelected?.name}</span>
                        </div>
                        <button onClick={shareBlog} className="share__blog__btn">
                            <span>Share this post</span>
                            <img src={img3} alt="share image"/>
                        </button>
                    </div>
                    <div className="blog__actions__container">
                        <button className="like__btn" onClick={likeBlog} ref={likeButton}>
                            <FontAwesomeIcon icon={faHeart}   />
                            <span>Like ({blogLikes ? blogLikes : 0})</span>
                        </button>
                        <BlogComment id={blogSelected?._id} no_of_comments={blogComments}/>
                    </div>
                    <div className="comments__container">
                        {
                            blogSelected?.comments?.map((item,index)=>{
                                if(index < 5){
                                    return <CommentCard text={item?.comment} name={item?.name} date={new Date(item?.date).toLocaleDateString()} />
                                }
                            })
                        }
                    </div>
                </div>
                <div className="right__container">
                    <div className="recent__blogs__heading">
                        <span>Recent posts</span>
                    </div>
                    <div className="recent__blogs__container">
                        {
                            showMore 
                            ?
                                allBlogs?.map((item,index)=>{
                                    return (
                                        <RecentBlogCard index={index} anchor={item?._id} date={new Date(item?.date).toLocaleDateString()} id={item._id} title={item.title} />
                                    )
                                })
                            :
                                blogs?.map((item)=>{
                                    return (
                                        <RecentBlogCard anchor={item?._id} date={new Date(item?.date).toLocaleDateString()} id={item._id} title={item.title} />
                                    )
                                })
                        }
                    </div>
                    {
                        blogsCount > 9 
                        ?
                            <div className="show__more__btn__container">
                                <button className="more__btn more" onClick={showMoreBlogs}>Show more</button>
                            </div>
                        :
                            null
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default Blog;