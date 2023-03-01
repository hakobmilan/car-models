import React, { useState } from 'react'
import styles from './Home.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';
function Home() {

  const [isopen, setIsOpen] = useState(false);
  console.log(isopen)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cars  =  useSelector( (state) => state.cars);
  const [currId, setCurrId] = useState();
  const handleDeleteButtonClick = (id) => {
    setCurrId(id);
  setIsOpen(true);
  }
  console.log(cars,'cars')
  const handleYesClick = () => {
    dispatch({
      type: "DELETE",
      payload: currId
  });
  setIsOpen(false);
  }
  
  return (
    <>
      {isopen? <Popup handleYesClick={handleYesClick} isopen = {isopen} setIsOpen = {setIsOpen}/> : null}
      <h2>Please look our car parameters table</h2>
      <button onClick={() => navigate("/create")} className={styles.button}>Create New Car</button>
      <table className={styles.cars}>
        <tbody>
          <tr>
            <th>Car name</th>
            <th>Car model</th>
            <th>Year</th>
            <th>Colour</th>
            <th>Picture</th>
            <th>Action</th>
          </tr>

          {cars ? cars.map((car) => (
            
           <tr key={car.id}>
              <td>{car.name}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.colour}</td>
              <td><img src={car.picture} alt="car" className={styles.images} /></td>
              <td> 
                <button onClick={ () => navigate(`/car/${car.id}`)} className={styles.little}>Info</button>
                <button onClick={ () => navigate(`/edit/${car.id}`)} className={styles.little}>Edit</button>
                <button onClick={ () => handleDeleteButtonClick(car.id)} className={styles.little}>Delete</button></td> 
           </tr>
        )) : ''}
        </tbody>
      </table>
        
    </>
  )
}

export default Home