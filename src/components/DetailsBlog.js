import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../helper/useFetch";



const DetailsBlog = () => {
    const {id}=useParams();
    const navigate=useNavigate();

    const handleDelete=()=>{
        fetch("http://localhost:4000/posts/"+id,{
            method: "DELETE"
        })
        .then(()=>{
            console.log("deleted blog");
            navigate("/")
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    const {data: blog,isPending,error}=useFetch('http://localhost:4000/posts/'+id);
    return (
        <div>
            {error && <div className="errorMessage">Error: {error}</div>}
            {isPending && <div className="pending">Loading</div>}
            {blog && <div className="detail-blog">
                <h2>{blog.title}</h2>
                <div>Likes {blog.likes}</div>
                <p>{blog.body}</p>
                <button className="deleteBtn" onClick={handleDelete}>Delete</button>
            </div>}
        </div>
    );
}
 
export default DetailsBlog;