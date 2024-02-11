import {Link} from 'react-router-dom';


const  BlogList= ({blogs}) => {
    return (
        <div className="blog-list">
            {blogs.map(blog=>(
                <div className="preview-content" key={blog.id}>
                <Link to={"/blogs/" +blog.id}>
                    <h3 className="title">{blog.title}</h3>
                        <p className="body">
                        {blog.body.slice(0,200)}...
                        </p>
                </Link>
                </div>
        ))}
        </div>
        
    );
}
 
export default BlogList;