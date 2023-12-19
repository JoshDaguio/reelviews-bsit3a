import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
    } from 'react-router-dom';

import Blogs from '../Blog/BlogPage'
import About from '../About/AboutPage';
import EventAct from '../ReactEvent/Event';
import ContactPage from '../Contact/ContactPage';
import DataAct1 from '../DataFlow/UseState';
import Home from '../Home/Home';
import './menu-bar.css';
import Logo from '../Images/logo-2.png'

function MenuBar(props) {

    const {username} = props;
    return (
        <div>
            <Router>
                    <div>
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <div className="navbar-logo">
                                    <img className="logo"src={Logo} alt="Logo" />
                                </div>
                                <p className="website-title h3 text-white">REELVIEWS</p>
                                {/* <a class="navbar-brand" href="#">Navbar</a> */ }
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"> 
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            <div className="navbar-collapse justify-content-end" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/home" className="nav-link active">
                                        Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/blog" className="nav-link active">
                                        Blog
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link active">
                                        About Us
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link active">
                                        Contact Us
                                        </Link>
                                    </li>
                                
                                    <li className="nav-item">
                                        <h4 className="username-nav">{username}</h4>
                                    </li> 
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Routes>
                        <Route
                            exact
                            path="/home"
                            element={<Home/>}
                        ></Route>
                        <Route
                            exact
                            path="/blog"
                            element={<Blogs/>}
                        ></Route>
                        <Route
                            exact
                            path="/myevent"
                            element={<EventAct/>}
                        ></Route>
                        <Route
                            exact
                            path="/dataflow1"
                            element={<DataAct1/>}
                        ></Route>
                        <Route
                            exact
                            path="/about"
                            element={<About/>}
                        ></Route>
                        <Route
                            exact
                            path="/contact"
                            element={<ContactPage username={username}/>}
                        ></Route>
                    </Routes>
                </div>
                </Router>
        </div>
    )
    
}

export default MenuBar