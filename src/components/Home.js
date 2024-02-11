import BlogList from "./BlogList";
import useFetch from "../helper/useFetch";

const Home = () => {
    const {data,isPending,error}= useFetch("http://localhost:4000/posts");

    return (
        <div className="home">
            {error && <div className="errorMessage">{error}</div>}
            {isPending && <div className="pending">Loading...</div>}
            {data && <BlogList blogs={data} title="All Blogs" />}
            {/* <BlogList blogs={blogs.filter(blog=> blog.author ==="Julian")} title="Julian Blogs" /> */}
        </div>
    );
}
 
export default Home;