import React ,{ useState , useRef} from 'react';
import { firebase , db , bucket , authentication } from '../firebase.js';
import {useHistory} from 'react-router-dom';
import './blogForm.css';
import axios from 'axios';

function BlogForm(){
    const history = useHistory();

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const [name, setName] = useState('')

    const [titleError, setTitleError] = useState('')
    const [imageError, setImageError] = useState('')
    const [contentError, setContentError] = useState('')
    const [nameError, setNameError] = useState('')

    const [imageUploadStarted,setImageUploadStarted] = useState(false)
    const [imageUploadError,setImageUploadError] = useState('')
    const [percentage,setPercentage] = useState(0)
    const [promises,setPromises] = useState([])

    const ref = bucket.ref();

    const imageInput = useRef()

    const uploadFile = (file)=>{
        setImageUploadStarted(true)
        const acceptedFormat = ['jpg','jpeg','png']
        var extension = file.type.split('/')[1]
        if(acceptedFormat.includes(extension)){
            setImageError('')
            var childRef = ref.child('images/' + new Date().getTime() + file.name)
            var uploadTask = childRef.put(file)
            setPromises(uploadTask)
            uploadTask.on('state_changed',(snapshot)=>{
                var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
                setPercentage(progress)
            },(error)=>{
                setImageError(error.code)
            },()=>{
                uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                    setImage(url)
                })
            })
        }else{
            setImageError('Image type not supported')
        }
    }
    
    const validateData = ()=>{
        if(title == ''){
            setTitleError('Title can\'t be empty')
        }
        if(content == ''){
            setContentError('Content can\'t be empty')
        }
        if(name == ''){
            setNameError('Name can\'t be empty')
        }
        if(title == '' || content == '' || name == ''){
            return false
        }else{
            return true
        }
    }
    const saveInDb = (e)=>{
        e.preventDefault()
        if(!validateData()){
            return false
        }
        if(!imageUploadStarted){
            setImageError('Select an image to upload')
            return false
        }else{
            setTitleError('')
            setImageError('')
            setContentError('')
            setNameError('')
            if(image != ''){
                const date = new Date().toLocaleDateString() +" "+ new Date().toLocaleTimeString();
                var likes = 0
                var data = {title,content,image,date,name}
                // db.collection('blogs').doc().set(data)
                // .then(()=>{
                //     alert('posted')
                //     setTitle('')
                //     setImage('')
                //     setContent('')
                //     setName('')
                //     setPercentage(0)
                //     setImageUploadStarted(false)
                //     setImageUploadError('')
                //     imageInput.current.value = ''
                // })

                axios.post(`${process.env.REACT_APP_API_URL}/api/post/upload`,data)
                .then((response)=>{
                    alert(response.data.status)
                    console.log(response)
                    setTitle('')
                    setImage('')
                    setContent('')
                    setName('')
                    setPercentage(0)
                    setImageUploadStarted(false)
                    setImageUploadError('')
                    imageInput.current.value = ''
                })
                .catch((err)=>{
                    console.log(err)
                })

            }else{
                setImageUploadError('please wait for image to upload and then try again')
            }
        }
    }

    const logoutUser = ()=>{
        authentication.signOut()
        history.push('/login')    
    }

    return (
        <section className="blog__form__container">
            <div className="logout__container">
                <button type="button" className="logout__btn" onClick={logoutUser}>Logout</button>
            </div>
            <h3 className="admin__heading">Create a Blog</h3>
            <form onSubmit={saveInDb} encType="multipart/form-data">
                    <div max="100" min="0" className="percentage__bar__container" value={percentage}>
                        <div className="percentage__bar" style={{width:`${percentage}%`}}></div>
                    </div> 
                
                {
                    image != '' ? <span className="success">Image have been uploaded successfullly</span> : null
                }
                {
                    imageUploadError ? <span className="error">{imageUploadError}</span> : null
                }
                <div className="form__group">
                    <label htmlFor="name">Name:</label>
                    <input className="name form__input" type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                    {
                        nameError ? <span className="error">{nameError}</span> : null
                    }
                </div>
                <div className="form__group">
                    <label htmlFor="title">Title:</label>
                    <input className="title form__input" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
                    {
                        titleError ? <span className="error">{titleError}</span> : null
                    }
                </div>
                <div className="form__group">
                    <label htmlFor="title">Image:</label>
                    <input className="form__input__file image" type="file" ref={imageInput}  accept="image/*" onChange={(e)=>uploadFile(e.target.files[0])} />
                    {
                        imageError ? <span className="error">{imageError}</span> : null
                    }
                </div>
                <div className="form__group">
                    <label htmlFor="title">Content:</label>
                    <textarea className="form__textarea" value={content}  onChange={(e)=>setContent(e.target.value)}></textarea>
                    {
                        contentError ? <span className="error">{contentError}</span> : null
                    }
                </div>
                <button className="login__submit__btn" type="submit">Submit</button>
            </form>
        </section>
    )
}

export default BlogForm