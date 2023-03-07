import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css'
function Login() {
    const navigate = useNavigate();
    
    const [inputState, setInputState] = useState( {
        email: "",
        name: "",
        password: ""
    })
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setInputState( {...inputState,
         [event.target.name]: event.target.value})
        }
        
        // dispatch({
        //     type: "STATE CHANGED",
        //     payload: {
        //         evname: event.target.name,
        //         value: event.target.value
        //     }
        // })
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputState.email.trim().length === 0 || inputState.name.trim().length === 0 || inputState.password.trim().length === 0) {
            alert("Please fill all the fields");
            return
        }
        dispatch({
            type: "SUBMIT",
            payload: inputState
        })
        navigate('/home')
    }
  return (
    <>
        <h2>Login </h2>
        <form className={styles.myform} onSubmit={handleSubmit}>
            
            <label>
                Email {" "}
                <input className={styles.inputfield} 
                type="email"  
                name = "email" 
                value={inputState.email}
                onChange = {handleChange}
                placeholder = "Email"
                required
                />
            </label>

            <label>
                Name {" "}
                <input className={styles.inputfield}
                 type="text"  
                name = "name" 
                value={inputState.name}
                onChange = {handleChange}
                placeholder = "Name"
                required
                />
            </label>

            
            <label>
                Password {" "}
                <input className={styles.inputfield}
                 type="password"  
                name = "password" 
                value={inputState.password}
                onChange = {handleChange}
                placeholder = "Password"
                required
                />
            </label>

            <button type = "submit"  className={styles.mybutton}>Login</button>
            
        </form>
    </>
  )
}

export default Login