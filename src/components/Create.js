import { useState} from "react";
import {useNavigate} from "react-router-dom"



const Create = () => {
    const [title,setTitle]=useState('title');
    const [body,setBody]=useState('content');
    const [isPending,setIsPending]=useState(false);
    const [error,setError]=useState(null)
    const navigate=useNavigate();
    const handleAddBlog=(e)=>{
        e.preventDefault();
        setIsPending(true)
        const newBlog={
            title: title,
            body: body,
            like: 0
        };

        fetch("http://localhost:4000/posts",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newBlog)
        })
        .then(()=>{
            console.log("added successfully");
            setIsPending(true)
            navigate("/");
        })
        .catch(err=>{
            console.log(err);
            setTimeout(() => {
                setError(err.message);
                setIsPending(false)
            }, 1000);
            
        })
    }
    return (
        <div className="create-blog">
            <h3>Create New Blog</h3>
            <form onSubmit={handleAddBlog}>
                <label htmlFor="title">Title:</label>
                <input type="text" required value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                <label htmlFor="body">Body:</label>
                <textarea required  value={body} onChange={(e)=>{setBody(e.target.value)}}></textarea>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Uploading..</button>}
                {error && <div className="errorMessage">{error}</div>}
            </form>
        </div>
    );
}
 
export default Create;