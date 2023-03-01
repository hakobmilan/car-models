import styles from './Header.module.css'
import logo from "./logo.jpg.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const issLoggedIn = useSelector(state => state.issLoggedIn)
  function handleClickLink() {
    dispatch({action : "LOGOUT"})
  }
  console.log("userInHEADER", user)
  return (
    <div className= {styles.header}>
        <img onClick={() =>{if(issLoggedIn) navigate('/home')} } src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>{issLoggedIn?"Our company welcomes you to our branch of Cars" :"Hello, feel free to Login to our website"}</h1>
        <h3>{issLoggedIn?user.name : null}</h3>
        {issLoggedIn?<Link onClick={handleClickLink} className={styles.link} to ="/"  > Log out </Link> : null}
  </div>
  )
}

export default Header