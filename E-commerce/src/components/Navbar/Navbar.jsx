import React, { useState } from 'react';
import {NavLink,Link,useNavigate} from "react-router-dom"
import './Navbar.css'
import Baner from './Baner';

export default function Navbar() {
  return (
    <div>
    {/* <Baner/> */}
    <Nav/>
    </div>
  )
}


import { Bandage,logo } from '../../assets/img';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import userAuth from '../../customeHooks/userAuth';
import Icon from '../UserProfile/Icon';

const navlinks=[
  {
    id:1,
    title:"Home",
    path:"/",
    cName:"nav-links",

  },
  // {
  //   id:2,
  //   title:"Shop ",
  //   path:"/shop",
  //   cName:"nav-links",
  //   Component:<IoIosArrowDown />,


  // },
  // {
  //   id:3,
  //   title:"About",
  //   path:"/about",
  //   cName:"nav-links"

  // },
  // {
  //   id:4,
  //   title:"Contact",
  //   path:"/contact",
  //   cName:"nav-links"

  // }
]


function Nav() {
  const [u] = userAuth();
  const [cc, setcc] = useState();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const nav = useNavigate();

  const handleToggle = () => setIsCollapsed(!isCollapsed);
  const handleNavItemClick = () => setIsCollapsed(true);

  return (
    <div className="container Navig">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand me-5" to="/">
            <img src={logo} width={100} height={30} id="nav-img" alt="logo" />
          </NavLink>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded={!isCollapsed} 
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse align-baseline ${isCollapsed ? '' : 'show'}`} id="navbarNav">
            <ul className="navbar-nav me-auto me-5 mb-2 mb-lg-0">
              {navlinks.map((item, index) => (
                <li className="nav-item" key={index}>
                  <NavLink className="nav-link" to={item.path} onClick={handleNavItemClick}>
                    <h5 className='text-black'>{item.title}{item.Component}</h5>
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul className="navbar-nav ml-auto mb-lg-0">
              {u ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/account" onClick={handleNavItemClick}>
                    <h5 className='text-dark'>Profile</h5>
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link" onClick={handleNavItemClick}>
                    <h5 className='text-dark'>Login</h5>
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link" onClick={handleNavItemClick}>
                  <h5 className='text-dark'>Cart</h5>
                  <span>{cc}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}



