import { Link } from "react-router-dom";

const FoundNothing = () => {
    return (
        <div className="foundNothing-blog">
            <h1>Found Nothing</h1>
            <h2>You are out of the gravity.</h2>
            <Link to={'/'}>
                Go Back Home
            </Link>
        </div>
    );
}
 
export default FoundNothing;