import { Link } from "react-router-dom"
import '../Styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg boxShadow='2xl' shadow" >
            <div className="container-fluid">
                <Link to="/" className="navbar-brand gap"><img src="https://lh3.googleusercontent.com/kvtXWUZ756KishzmjWDgAf0AW77QeBSuLbUXDQidstlS2h63BSRrlgm4bU97NPjdF5skHZFKQufqTqGt1UbTO8VV0OB7SqXAz7qCng=-rw" width="212px" height="24px" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/courses" className="nav-link active" aria-current="page">Online Courses</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/certification" className="nav-link">Certification</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/training" className="nav-link">Live Training</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/remote-work" className="nav-link">Remote Working</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link to="/tools" className="dropdown-item">Tools & Resources</Link></li>
                                <li><Link to="/faqs" className="dropdown-item">Help & FAQs</Link></li>
                                <li><Link to="/feedback" className="dropdown-item">Feedback</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-in" className="nav-link sign">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
