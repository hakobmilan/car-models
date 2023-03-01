import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './NewCar.module.css';
function NewCar() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [newcar, setNewCar] = useState({
        name:"",
        model:"",
        year: "",
        colour: "",
        picture:"",
        description:""
    });
    const handleChange = (event) =>  {
        setNewCar({...newcar, [event.target.name]:event.target.value})
    }
     const addImage = (imageData) => {
        return {
          type: "ADDCAR",
          payload: {
            image: imageData,
            newcar:newcar
        }
        }
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(newcar.name.trim() ==='' || newcar.model.trim() ==='' || newcar.year.trim() ==='' || newcar.colour.trim() ==='' ) {
            return;
        }
        const file = image;
        const reader = new FileReader()
        reader.onload = () => {
          const imageData = reader.result
          dispatch(addImage(imageData))
        }
        reader.readAsDataURL(file)
        navigate('/home')
        }
       
    
    const handleImageChange = (event) => {
        setImage(event.target.files[0])
    }

  return (
        <>
            <h2>Add your car parameters</h2>
            <div className={styles.container}>
            <form className={styles.myform} onSubmit={handleSubmit}>
            
            <label >
                Name {" "}
                <input className={styles.inputfield} 
                type="text"  
                name = "name" 
                value={newcar.name}
                onChange = {handleChange}
                />
            </label >
            <label>
                Model {" "}
                <input className={styles.inputfield} 
                type="text"  
                name = "model" 
                value={newcar.model}
                onChange = {handleChange}
                />
            </label>
            <label >
                Year {" "}
                <input  className={styles.inputfield} 
                type="text"  
                name = "year" 
                value={newcar.year}
                onChange = {handleChange}
                />
            </label>
            <label>
                Colour {" "}
                <input  className={styles.inputfield} 
                type="text"  
                name = "colour" 
                value={newcar.colour}
                onChange = {handleChange}
                />
            </label>
            <label >
                Image {" "}
                <div >
                <input className={styles.inputfield} 
                type="file"  
                name = "picture" 
                onChange={handleImageChange}
               />
            </div>
            </label>
            <button type = "submit"  className={styles.mybutton}>Create Car</button>
          

        </form>
        </div>
        </>
  )
}

export default NewCar