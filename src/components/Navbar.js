import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>Dojo</h2>
            <div className="links">
                <Link to='/'>home</Link>
                <Link to='/create' style={{
                    backgroundColor: "#ff6d6dee",
                    borderRadius: "10px",
                    color: "#fff"
                }}>New Blog</Link>
            </div>
        </div>
    );
}
 
export default Navbar;