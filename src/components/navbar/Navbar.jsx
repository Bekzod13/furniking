import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

// import images
import downAngle from './angle.png';

// import icons
import {BsSearch, BsBag} from 'react-icons/bs';
import {BiBell} from 'react-icons/bi';
import {HiOutlineUser} from 'react-icons/hi';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-top-bg">
                <div className="container nav-top">
                    <p>Welcome to our online shop</p>
                    <div className="nav-items">
                        <div className="langs">
                            <p>English (USD) <img src={downAngle} alt="" /></p>
                            <div className="langs-items">
                                <p className="lang">English (USD)</p>
                                <p className="lang">Uzbek (UZS)</p>
                                <p className="lang">Russian (RUB)</p>
                            </div>
                        </div>
                        <div>
                            <Link to="/" className="navlink">Login</Link>
                            <span>or</span>
                            <Link to="/" className="navlink">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container navbar-bottom">
                <Link to='/' className="logo">Furniking</Link>
                <div className="search-division">
                    <input type="text" placeholder='Search here' className='main-search'/>
                    <select name="" id="" className='nav-category'>
                        <option value="all">Categories</option>
                        <option value="home">Interier</option>
                        <option value="garden">Garden</option>
                        <option value="free">Freestyle</option>
                    </select>
                    <button className="search-btn">
                        <BsSearch/>
                    </button>
                </div>
                <div className="main-icons">
                    <Link to='/' className="main-icon cart">
                        <BsBag/>
                        <span>0</span>
                    </Link>
                    <Link to='/' className="main-icon">
                        <BiBell/>
                    </Link>
                    <Link to='/' className="main-icon">
                        <HiOutlineUser/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
