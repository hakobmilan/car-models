import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from './Edit.module.css'
import { useState } from "react";

function Edit() {
const [bool,setBool] = useState(false);
const navigate = useNavigate();
const dispatch = useDispatch();
const {id} = useParams();
const cars  =  useSelector( (state) => state.cars);
for(let i =0; i<cars.length; i++) {
    if(+id === +cars[i].id) {
        var mycar = cars[i];
        break;
    }
}
const [image, setImage] = useState(mycar.picture);
const [car, setCar] = useState({
    id : id,
    name: mycar.name,
    model: mycar.model,
    year: mycar.year,
    colour: mycar.colour,
    picture: mycar.picture,
    description: mycar.description
});

const handleImageChange = (event) => {
    setBool(true)
    setImage(event.target.files[0]); 
}

const handleChange = (event) => {
    setCar( {...car,
     [event.target.name]: event.target.value})
    }
 
    const addImage = (imageData) => {
        return {
          type: "EDITCAR",
          payload: {
            image: imageData,
            car:car
        }
        }
      }
    
      
 const handleSubmit = (event) => {
    event.preventDefault()
    if(bool){
        const file = image;
        const reader = new FileReader()       

        reader.onload = () => {
          const imageData = reader.result
          dispatch(addImage(imageData))
        } 

        reader.readAsDataURL(file)
    
    }
  
      else   {dispatch(addImage(image))}
      setBool(false);
       navigate('/home')
 }
  return (
    <>
    <div>Edit {id}</div>
    <div className={styles.container}>

    <form className={styles.myform} onSubmit={handleSubmit}>
            
            <label >
                Name {" "}
                <input  className={styles.inputfield} 
                type="text"  
                name = "name" 
                value={car.name}
                onChange = {handleChange}
                />
            </label >
            <label >
                Model {" "}
                <input  className={styles.inputfield} 
                type="text"  
                name = "model" 
                value={car.model}
                onChange = {handleChange}
                />
            </label>
            <label >
                Year {" "}
                <input className={styles.inputfield} 
                type="text"  
                name = "year" 
                value={car.year}
                onChange = {handleChange}
                />
            </label>
            <label>
                Colour {" "}
                <input className={styles.inputfield} 
                type="text"  
                name = "colour" 
                value={car.colour}
                onChange = {handleChange}
                />
            </label>
            <label>
                Description {" "}
                <input className={styles.inputfield} 
                type="text"  
                name = "description" 
                value={car.description}
                onChange = {handleChange}
                />
            </label>
            <label >
                Image {" "}
                <div >
                    <img src={car.picture} alt="pictre" className={styles.picture} />
                    <input className={styles.inputfield} 
                    id = "image"
                    type="file"  
                    name = "image" 
                    onChange={handleImageChange}
                    />
                </div>
       
              
            </label>
                    <button className={styles.editbutton} type ="submit">Edit</button>
            
               
        </form>
    </div>

            

    </>
    
  )
}

export default Edit