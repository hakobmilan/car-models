import styles from './Header.module.css'
import logo from "./logo.jpg.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.css";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  function handleClickLink() {
    dispatch({ action: "LOGOUT" })
  }
  function toggleMenu(e) {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return (
  
    <div className={isLoggedIn? styles.headerloggedin: styles.header}>
       
      <img onClick={() => { if (isLoggedIn) navigate('/home') }} src={logo} alt="Logo" className={styles.logo} />
      <h2 className={styles.title}>{isLoggedIn ? "Our company welcomes you to our branch of Cars" : "Hello, feel free to Login to our website"}</h2>
     
      <div className={styles.rel}>
        <h3 className={styles.navbar}>{user.name}</h3>
        {isLoggedIn? (<div className={styles.mobilecontainer}>
        <div className={styles.topnav}>
          <a href="#home" className={styles.active}>Logo</a>
          <div id="myLinks">
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
          <a href="#s" onClick={toggleMenu} className={styles.iconm} >
              <FontAwesomeIcon className={styles.icon} icon={faBars}/>
          </a> 
        </div> 
      </div>):null}
      
      {isLoggedIn ? <Link onClick={handleClickLink} className={styles.link} to="/"  > Log out </Link> : null}
    </div>
    </div>
  )
}

export default Header