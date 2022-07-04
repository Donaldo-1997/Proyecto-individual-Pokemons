import { Link } from "react-router-dom";
import './StyleNav.css'

export default function Nav () {
    return (
        <div className="nav">
            <Link to='/home' className="nav_link">Home</Link>
            <Link to='/create' className="nav_link">Create</Link>
        </div>
    )
}