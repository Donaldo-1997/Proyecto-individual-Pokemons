import React from "react";
import { Link } from "react-router-dom";
import './StyleNav.css'

function Nav (props) {
    
    return (
        <div className="nav">
            <Link to='/home' className="nav_link">Home</Link>
            <Link to='/create' className="nav_link">Create</Link>
        </div>
    )
}

export default React.memo(Nav)